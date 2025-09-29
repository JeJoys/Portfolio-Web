"use client"

import { useEffect } from "react"

export default function ThemeWatcher() {
  useEffect(() => {
    try {
      const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null
      const prefersDark =
        typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      const theme = stored || (prefersDark ? "dark" : "light")
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } catch {
      // no-op
    }
  }, [])
  return null
}
