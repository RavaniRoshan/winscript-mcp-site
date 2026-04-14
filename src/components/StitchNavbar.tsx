"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, Github, Menu, X, Sun, Moon } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "/docs" },
  { name: "API", href: "/api" },
  { name: "Architecture", href: "/architecture" },
];

const PRODUCT_HUNT_LAUNCH_ISO = "2026-04-13T00:01:00-07:00";

type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
};

function getCountdownParts(targetMs: number): CountdownParts {
  const totalMs = targetMs - Date.now();
  const safeMs = Math.max(0, totalMs);

  const days = Math.floor(safeMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safeMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((safeMs / (1000 * 60)) % 60);
  const seconds = Math.floor((safeMs / 1000) % 60);

  return { days, hours, minutes, seconds, totalMs };
}

export default function StitchNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const pathname = usePathname();
  const launchTimeMs = useMemo(() => new Date(PRODUCT_HUNT_LAUNCH_ISO).getTime(), []);
  const [countdown, setCountdown] = useState<CountdownParts>(() =>
    getCountdownParts(launchTimeMs),
  );

  useEffect(() => {
    // Check initial theme
    if (document.documentElement.classList.contains("light")) {
      setIsLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove("light");
      setIsLightMode(false);
    } else {
      document.documentElement.classList.add("light");
      setIsLightMode(true);
    }
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownParts(launchTimeMs));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [launchTimeMs]);

  const isLive = countdown.totalMs <= 0;
  const timerLabel = `${String(countdown.days).padStart(2, "0")}d : ${String(
    countdown.hours,
  ).padStart(2, "0")}h : ${String(countdown.minutes).padStart(2, "0")}m : ${String(
    countdown.seconds,
  ).padStart(2, "0")}s`;

  return (
    <header className="fixed inset-x-0 top-6 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between rounded-[1.35rem] border border-site-line-strong bg-site-panel px-4 shadow-site backdrop-blur-xl">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-site-soft">
                ws
              </span>
              <span className="text-base font-semibold tracking-[-0.04em] text-site-text">
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
                        ? "bg-site-surface-active text-site-text"
                        : "text-site-muted hover:bg-site-surface-hover hover:text-site-text"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center p-2 text-site-muted transition-colors hover:text-site-text rounded-full hover:bg-site-surface-hover"
              aria-label="Toggle theme"
            >
              {isLightMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <a
              href="https://github.com/RavaniRoshan/winscript-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-site-muted transition-colors hover:text-site-text"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://github.com/RavaniRoshan/winscript-mcp#installation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-site-accent px-4 py-1.5 text-sm font-medium text-site-text-strong transition-colors hover:bg-site-accent-soft"
            >
              Install
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center p-2 text-site-text"
              aria-label="Toggle theme"
            >
              {isLightMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-site-text"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-site-bg/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-x-4 top-[132px] z-50 rounded-[1.6rem] border border-site-line-strong bg-site-panel-strong p-5 shadow-site-glow">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold tracking-[-0.04em] text-site-text">
                winscript
              </span>
              <button
                type="button"
                className="rounded-full p-2 text-site-muted transition-colors hover:bg-site-surface-hover hover:text-site-text"
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
                        ? "bg-site-surface-active text-site-text"
                        : "bg-site-surface text-site-muted hover:bg-site-surface-hover hover:text-site-text"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 space-y-3 border-t border-site-line pt-5">
              <a
                href="https://github.com/RavaniRoshan/winscript-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-site-surface px-4 py-3 text-sm font-medium text-site-muted"
              >
                GitHub
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/RavaniRoshan/winscript-mcp#installation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-site-accent px-4 py-3 text-sm font-medium text-site-text-strong"
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
