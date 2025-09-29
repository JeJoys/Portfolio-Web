"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string }

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" })
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus({ type: "loading" })

    try {
      const to = "mfarhanmadisa@gmail.com"
      const subject = `New portfolio message from ${form.name}`
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(
        to,
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      const newTab = window.open(gmailUrl, "_blank", "noopener,noreferrer")

      if (!newTab) {
        const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.location.href = mailto
      }

      setStatus({
        type: "success",
        message: "Opening Gmail compose. Please review and send your message.",
      })
      setForm({ name: "", email: "", message: "" })
    } catch (err: any) {
      setStatus({
        type: "error",
        message: "Unable to open your email client. Please email me directly at mfarhanmadisa@gmail.com.",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">Get in Touch</h2>
        <p className="text-muted-foreground">
          Send me a message using the form below. It will go directly to my email.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Send a Message</CardTitle>
          <CardDescription>Fields marked with * are required.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Write your message..."
                rows={6}
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                type="submit"
                disabled={status.type === "loading"}
                className="bg-primary text-primary-foreground hover:opacity-90"
              >
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </Button>
              {status.type === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400" role="status">
                  {status.message}
                </p>
              )}
              {status.type === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
