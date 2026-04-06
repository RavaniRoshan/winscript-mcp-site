import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WinScript - AppleScript for Windows | MCP Server for AI Agents",
  description:
    "A Windows-native automation API, packaged as an MCP server, that gives AI agents the same system-level desktop control that AppleScript gives on macOS.",
  keywords: [
    "MCP",
    "AI agent",
    "Windows automation",
    "AppleScript",
    "desktop control",
    "UI automation",
  ],
  authors: [{ name: "WinScript Team" }],
  openGraph: {
    title: "WinScript - AppleScript for Windows",
    description:
      "A Windows-native automation API for AI agents, packaged as an MCP server.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}