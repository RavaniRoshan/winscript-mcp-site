"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/8 bg-site-bg">
      <div className="site-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-site-muted sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-md">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-site-soft">
            winscript
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-site-text">
            Windows automation for MCP-native agent loops.
          </p>
          <p className="mt-3 leading-7 text-site-muted">
            Built for teams that need real desktop reach, structured recovery,
            and fewer brittle handoffs between UI automation, COM, and shell
            execution.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <Link href="/docs" className="transition-colors hover:text-site-text">
            Docs
          </Link>
          <Link href="/api" className="transition-colors hover:text-site-text">
            API
          </Link>
          <Link
            href="/architecture"
            className="transition-colors hover:text-site-text"
          >
            Architecture
          </Link>
          <a
            href="https://github.com/RavaniRoshan/winscript-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-site-text"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
