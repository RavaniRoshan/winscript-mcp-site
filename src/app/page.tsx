"use client";

import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import StitchNavbar from "@/components/StitchNavbar";
import {
  ArrowRight,
  Bot,
  Database,
  LayoutGrid,
  Route,
  Shield,
  Terminal,
  Zap,
  type LucideIcon,
} from "lucide-react";

type ComparisonRow = {
  feature: string;
  winscript: string;
  traditional: string;
};

type RuntimeStep = {
  label: string;
  title: string;
  description: string;
};

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
  note: string;
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Execution model",
    winscript: "Routes into UIA, COM, or shell at runtime",
    traditional: "Hard-codes one layer and breaks when the path changes",
  },
  {
    feature: "Agent context",
    winscript: "Returns structured outcomes and retry-friendly signals",
    traditional: "Leaves the model guessing from logs and exceptions",
  },
  {
    feature: "Desktop reach",
    winscript: "Works across visible UI, Office objects, and system commands",
    traditional: "Usually needs separate tools for each of those surfaces",
  },
  {
    feature: "Operator workflow",
    winscript: "Fits human operators, copilots, and autonomous loops",
    traditional: "Turns each workflow into a one-off automation project",
  },
];

const runtimeSteps: RuntimeStep[] = [
  {
    label: "01 / interpret",
    title: "Turn agent intent into a stable action path.",
    description:
      "WinScript narrows a broad instruction into targetable operations so the model stops guessing which Windows surface to touch first.",
  },
  {
    label: "02 / route",
    title: "Choose the right surface instead of forcing one integration strategy.",
    description:
      "The runtime can move between UI Automation, COM, and PowerShell based on what the task actually needs, not what was easiest to wire first.",
  },
  {
    label: "03 / recover",
    title: "Return enough state for the next model step to recover fast.",
    description:
      "Typed failures, screenshots, and action traces make retries useful. That is what turns desktop automation into a real agent loop.",
  },
];

const capabilities: Capability[] = [
  {
    icon: LayoutGrid,
    title: "UI Automation",
    description:
      "Read windows, inspect controls, click targets, and fill forms across Win32, WPF, WinUI, and Electron applications.",
    note: "Best for visible desktop state and navigation.",
  },
  {
    icon: Database,
    title: "COM and OLE",
    description:
      "Reach into Office and legacy business applications that expose deep object models behind the visible interface.",
    note: "Best for documents, spreadsheets, and enterprise systems.",
  },
  {
    icon: Terminal,
    title: "Shell and registry",
    description:
      "Run PowerShell, inspect machine state, and handle system-level remediation when the cleanest path lives below the UI.",
    note: "Best for setup, repair, and fleet actions.",
  },
  {
    icon: Shield,
    title: "Recovery surfaces",
    description:
      "Report failures in a way that models can use, with action traces, screenshots, and the context needed for deliberate retries.",
    note: "Best for keeping long flows stable.",
  },
];

const stackNodes = [
  { label: "UIA", className: "left-[4%] top-[30%]" },
  { label: "COM", className: "left-[16%] top-[14%]" },
  { label: "Shell", className: "right-[8%] top-[16%]" },
  { label: "Office", className: "right-[4%] top-[38%]" },
  { label: "Registry", className: "left-[12%] bottom-[18%]" },
  { label: "Win32", className: "right-[14%] bottom-[14%]" },
];

const metrics = [
  { value: "3", label: "control surfaces routed by one runtime" },
  { value: "1", label: "protocol for human operators and agents alike" },
  { value: "0", label: "interest in brittle one-layer glue code" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-site-bg text-site-text">
      <StitchNavbar />

      <section className="relative isolate overflow-hidden pt-36">
        <div className="site-grid absolute inset-0 opacity-30" />
        <div className="site-grid site-grid-fade absolute inset-0 opacity-40" />
        <div className="site-radial-blue animate-pulse-glow absolute left-[-10rem] top-[-4rem] h-[32rem] w-[32rem] blur-3xl" />
        <div className="site-radial-warm absolute bottom-[-10rem] left-1/3 h-[24rem] w-[24rem] blur-3xl opacity-55" />

        <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl gap-16 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:px-8">
          <div className="max-w-xl animate-fade-in">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-site-accent-soft">
              Windows orchestration layer
            </p>
            <div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-site-text/88">
              v1.2.0 stable
            </div>

            <h1 className="mt-7 max-w-3xl text-balance text-[clamp(3.4rem,8vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
              WinScript gives AI agents AppleScript-grade control over
              Windows.
            </h1>

            <p className="mt-6 max-w-lg text-balance text-lg leading-8 text-site-muted sm:text-xl">
              Route intent through UI Automation, COM, and shell execution with
              one MCP-native runtime built for real desktops, enterprise apps,
              and recovery-aware agent loops.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full bg-site-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#6b96ff]"
              >
                Read the docs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://github.com/RavaniRoshan/winscript-mcp#installation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-site-text transition-colors hover:bg-white/[0.05]"
              >
                Install from GitHub
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-site-muted sm:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                MCP-native transport
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                Windows-first runtime
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                Structured recovery
              </div>
            </div>
          </div>

          <div
            className="relative mx-auto w-full max-w-[680px] animate-fade-in"
            style={{ animationDelay: "120ms" }}
          >
            <div className="animate-float-slow absolute inset-0 scale-[1.06] rounded-full border border-site-accent/10" />
            <div className="site-radial-blue absolute inset-[16%] rounded-full blur-3xl opacity-90" />
            <div className="site-radial-warm absolute inset-x-[22%] bottom-[4%] h-40 rounded-full blur-3xl opacity-70" />
            <div className="site-dots absolute inset-[12%] rounded-full opacity-20" />

            <div className="relative aspect-square w-full">
              <div className="animate-slow-spin absolute inset-[6%] rounded-full border border-white/8" />
              <div className="absolute inset-[14%] rounded-full border border-site-accent/20" />
              <div className="absolute inset-[22%] rounded-full border border-white/8" />
              <div className="absolute inset-[30%] rounded-full border border-site-accent/25" />
              <div className="absolute inset-[39%] rounded-full border border-white/10" />

              <div className="site-panel-strong absolute inset-[20%] rounded-full shadow-site-glow">
                <div className="site-grid absolute inset-0 rounded-full opacity-20" />
                <div className="absolute inset-[16%] rounded-full border border-site-accent/30" />
                <div className="absolute inset-[30%] rounded-full border border-white/10" />
                <div className="site-radial-blue absolute inset-[18%] rounded-full blur-2xl" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-site-accent-soft">
                    Runtime preview
                  </p>
                  <p className="mt-4 max-w-[14rem] text-balance text-3xl font-semibold tracking-[-0.05em] text-site-text">
                    Intent routes to the right Windows layer.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-site-muted">
                    <Route className="h-3.5 w-3.5 text-site-accent-soft" />
                    UIA, COM, PowerShell
                  </div>
                </div>
              </div>

              {stackNodes.map((node) => (
                <div
                  key={node.label}
                  className={`absolute ${node.className} rounded-full border border-white/10 bg-[rgba(8,12,18,0.88)] px-4 py-2 text-xs font-medium text-site-text shadow-site`}
                >
                  {node.label}
                </div>
              ))}

              <div className="absolute left-[7%] top-[48%] w-24 border-t border-dashed border-site-accent/30" />
              <div className="absolute right-[7%] top-[48%] w-24 border-t border-dashed border-site-accent/30" />
              <div className="absolute left-[22%] top-[18%] h-16 border-l border-dashed border-site-accent/30" />
              <div className="absolute right-[24%] bottom-[16%] h-20 border-l border-dashed border-site-accent/30" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-start">
            <div className="max-w-lg">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-site-accent-soft">
                Proof / routing
              </p>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] text-site-text sm:text-5xl">
                One protocol, three Windows surfaces, fewer brittle decisions.
              </h2>
              <p className="mt-6 text-lg leading-8 text-site-muted">
                Most Windows automation stacks make you choose too early between
                UI scripting, object models, or shell commands. WinScript keeps
                that choice inside the runtime where it belongs.
              </p>

              <div className="mt-10 space-y-5 border-t border-white/8 pt-6">
                <div className="flex items-start gap-3">
                  <Bot className="mt-1 h-4 w-4 text-site-accent-soft" />
                  <p className="text-sm leading-7 text-site-muted">
                    Built for Claude Desktop, Cursor, and internal copilots that
                    need desktop reach without fragile custom glue.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="mt-1 h-4 w-4 text-site-accent-soft" />
                  <p className="text-sm leading-7 text-site-muted">
                    Reports back with the state a model actually needs for the
                    next step, not just a raw error string.
                  </p>
                </div>
              </div>
            </div>

            <div className="site-panel rounded-[2.25rem] p-6 shadow-site sm:p-8">
              <div className="grid grid-cols-[1.05fr_1fr_1fr] gap-6 border-b border-white/8 pb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-site-soft">
                <div>Surface</div>
                <div>WinScript</div>
                <div>Traditional</div>
              </div>

              <div className="divide-y divide-white/8">
                {comparisonRows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid gap-5 py-5 md:grid-cols-[1.05fr_1fr_1fr]"
                  >
                    <p className="text-sm font-medium text-site-text">
                      {row.feature}
                    </p>
                    <p className="text-sm leading-7 text-site-text/88">
                      {row.winscript}
                    </p>
                    <p className="text-sm leading-7 text-site-muted">
                      {row.traditional}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-site-soft">
                    UI Automation
                  </p>
                  <p className="mt-3 text-sm leading-7 text-site-muted">
                    Inspect controls and navigate the visible desktop.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-site-soft">
                    COM / OLE
                  </p>
                  <p className="mt-3 text-sm leading-7 text-site-muted">
                    Go deeper when Office or legacy app models are available.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-site-soft">
                    Shell
                  </p>
                  <p className="mt-3 text-sm leading-7 text-site-muted">
                    Handle setup, remediation, and machine-level work cleanly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="site-radial-blue absolute left-[60%] top-[10%] h-72 w-72 blur-3xl opacity-55" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-site-accent-soft">
                Runtime story
              </p>
              <h2 className="mt-5 max-w-lg text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] text-site-text sm:text-5xl">
                The desktop is not the problem. The handoff between surfaces is.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-site-muted">
                WinScript exists to make that handoff reliable, legible, and
                useful to the next model step.
              </p>
            </div>

            <div className="space-y-6">
              {runtimeSteps.map((step, index) => (
                <div
                  key={step.label}
                  className="site-panel rounded-[2rem] p-6 shadow-site sm:p-8"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-site-accent-soft">
                    {step.label}
                  </p>
                  <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-site-text sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-site-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="site-grid absolute inset-0 opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-site-accent-soft">
                Reach / trust
              </p>
              <h2 className="mt-5 max-w-lg text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] text-site-text sm:text-5xl">
                Control the desktop, not just the prompt loop around it.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-site-muted">
                Recovery, reliability, and control surfaces are part of the same
                runtime. That is the difference between a clever demo and a tool
                a team can keep using.
              </p>

              <div className="mt-10 divide-y divide-white/8">
                {capabilities.map((capability) => (
                  <div
                    key={capability.title}
                    className="grid gap-4 py-5 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-start"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <capability.icon className="h-5 w-5 text-site-accent-soft" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-site-text">
                        {capability.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-site-muted">
                        {capability.description}
                      </p>
                    </div>
                    <p className="max-w-xs pt-1 text-sm leading-7 text-site-soft md:text-right">
                      {capability.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="site-panel-strong relative overflow-hidden rounded-[2.4rem] p-8 shadow-site-glow sm:p-10">
              <div className="site-radial-blue absolute inset-[20%] rounded-full blur-3xl opacity-75" />
              <div className="site-dots absolute inset-0 opacity-10" />
              <div className="absolute inset-[14%] rounded-full border border-white/8" />
              <div className="absolute inset-[26%] rounded-full border border-site-accent/22" />
              <div className="absolute inset-[38%] rounded-full border border-white/10" />

              <div className="relative flex aspect-square items-center justify-center">
                <div className="rounded-full border border-white/10 bg-[rgba(7,10,16,0.88)] px-8 py-7 text-center shadow-site">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-site-accent-soft">
                    Windows stack
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-site-text">
                    WinScript
                  </p>
                  <p className="mt-3 max-w-[13rem] text-sm leading-7 text-site-muted">
                    One runtime for visible UI, deep objects, system commands,
                    and recovery-aware tool results.
                  </p>
                </div>

                {stackNodes.map((node) => (
                  <div
                    key={`stack-${node.label}`}
                    className={`absolute ${node.className} rounded-full border border-white/10 bg-[rgba(8,12,18,0.92)] px-4 py-2 text-xs font-medium text-site-text`}
                  >
                    {node.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 border-t border-white/8 pt-10 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-4xl font-semibold tracking-[-0.06em] text-site-text">
                  {metric.value}
                </p>
                <p className="mt-3 max-w-xs text-sm leading-7 text-site-muted">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-site-accent-soft">
            Start here
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] text-site-text sm:text-5xl">
            Give your agent a Windows runtime that actually understands the
            machine.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-site-muted">
            Read the docs, inspect the runtime model, and wire WinScript into
            the MCP client or operator workflow you already have.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-full bg-site-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6b96ff]"
            >
              Explore documentation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://github.com/RavaniRoshan/winscript-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-site-text transition-colors hover:bg-white/[0.05]"
            >
              View source
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
