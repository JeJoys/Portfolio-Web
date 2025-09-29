import { NextResponse } from "next/server"
import { Resend } from "resend"

const toEmail = "mfarhanmadisa@gmail.com"

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || ""
    let payload: Record<string, any> = {}

    if (contentType.includes("application/json")) {
      payload = await req.json()
    } else if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      const form = await req.formData()
      payload = Object.fromEntries(form.entries())
    } else {
      const textBody = await req.text()
      return NextResponse.json(
        {
          error: "Unsupported content type",
          details: contentType,
          bodyPreview: textBody.slice(0, 200),
        },
        { status: 415 },
      )
    }

    const { name, email, message } = payload

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          error: "Missing RESEND_API_KEY. Add it in Project Settings > Environment Variables.",
        },
        { status: 500 },
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: "Portfolio Contact <noreply@v0-mail.dev>",
      to: toEmail,
      subject: `New message from ${name || "Portfolio Visitor"}`,
      reply_to: email || undefined,
      text: `From: ${name || "Unknown"} <${email || "no-email"}>
      
${message || ""}`,
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    const safeMessage = err?.message || "Unknown error"
    return NextResponse.json({ error: safeMessage }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 })
}
