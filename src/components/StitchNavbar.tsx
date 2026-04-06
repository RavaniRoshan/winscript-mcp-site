"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, Github, Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "/docs" },
  { name: "API", href: "/api" },
  { name: "Architecture", href: "/architecture" },
];

export default function StitchNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
              ws
            </span>
            <span className="text-base font-semibold tracking-tight text-slate-950">
              winscript
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-full px-3 py-1 text-sm transition-colors ${
                    isActive
                      ? "bg-slate-950 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/RavaniRoshan/winscript-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-950"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://github.com/RavaniRoshan/winscript-mcp#installation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0f62fe] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#0b4fd1]"
          >
            Install
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-slate-700 md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-x-4 top-4 z-50 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold tracking-tight text-slate-950">
                winscript
              </span>
              <button
                type="button"
                className="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-slate-950 text-white"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 space-y-3 border-t border-slate-200 pt-5">
              <a
                href="https://github.com/RavaniRoshan/winscript-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
              >
                GitHub
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/RavaniRoshan/winscript-mcp#installation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-[#0f62fe] px-4 py-3 text-sm font-medium text-white"
              >
                Install
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
