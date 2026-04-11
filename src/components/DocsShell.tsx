"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { BookOpen, Braces, Network } from "lucide-react";
import StitchNavbar from "@/components/StitchNavbar";
import SiteFooter from "@/components/SiteFooter";

type SectionLink = {
  href: string;
  label: string;
};

type DocsShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  activePage: "/docs" | "/api" | "/architecture";
  badges: string[];
  sectionLinks: SectionLink[];
  children: ReactNode;
};

const pageLinks: Array<{
  href: DocsShellProps["activePage"];
  icon: LucideIcon;
  label: string;
}> = [
  { href: "/docs", icon: BookOpen, label: "Introduction" },
  { href: "/api", icon: Braces, label: "API Reference" },
  { href: "/architecture", icon: Network, label: "Architecture" },
];

export default function DocsShell({
  eyebrow,
  title,
  description,
  activePage,
  badges,
  sectionLinks,
  children,
}: DocsShellProps) {
  return (
    <main className="min-h-screen bg-site-bg text-site-text">
      <StitchNavbar />

      <div className="relative overflow-hidden pt-36">
        <div className="site-grid absolute inset-0 opacity-25" />
        <div className="site-grid site-grid-fade absolute inset-0 opacity-35" />
        <div className="site-radial-blue animate-pulse-glow absolute left-[-8rem] top-28 h-[28rem] w-[28rem] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[270px_minmax(0,1fr)] lg:items-start">
            <aside className="lg:sticky lg:top-36">
              <div className="site-panel rounded-[2rem] p-5 shadow-site">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-site-soft">
                  Documentation
                </p>
                <p className="mt-2 text-sm text-site-muted">v1.2.0 stable</p>

                <div className="mt-6 space-y-2">
                  {pageLinks.map((link) => {
                    const isActive = activePage === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-colors ${
                          isActive
                            ? "bg-white/[0.08] text-site-text"
                            : "text-site-muted hover:bg-white/[0.04] hover:text-site-text"
                        }`}
                      >
                        <span className="inline-flex items-center gap-3">
                          <link.icon className="h-4 w-4" />
                          {link.label}
                        </span>
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-site-accent" />
                        )}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6 border-t border-white/8 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-site-soft">
                    On this page
                  </p>
                  <div className="mt-4 space-y-2">
                    {sectionLinks.map((section) => (
                      <a
                        key={section.href}
                        href={section.href}
                        className="block rounded-xl px-3 py-2 text-sm text-site-muted transition-colors hover:bg-white/[0.04] hover:text-site-text"
                      >
                        {section.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="space-y-10">
              <section className="site-panel-strong relative overflow-hidden rounded-[2.25rem] p-8 shadow-site-glow sm:p-10">
                <div className="site-dots absolute inset-y-0 right-0 w-1/2 opacity-20" />
                <div className="site-radial-blue absolute right-[-5rem] top-[-6rem] h-72 w-72 blur-3xl" />

                <div className="relative max-w-3xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-site-accent-soft">
                    {eyebrow}
                  </p>
                  <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] text-site-text sm:text-5xl">
                    {title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-site-muted">
                    {description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-xs font-medium text-site-text/90"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              <div className="space-y-8">{children}</div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
