"use client";

import Link from "next/link";
import StitchNavbar from "@/components/StitchNavbar";
import {
  ArrowRight,
  Bot,
  Brain,
  Code2,
  Database,
  LayoutGrid,
  Monitor,
  Route,
  Shield,
  Terminal,
  Zap,
  type LucideIcon,
} from "lucide-react";

type ComparisonRow = {
  feature: string;
  macOS: string;
  winscript: string;
  traditional: string;
};

type StoryItem = {
  eyebrow: string;
  title: string;
  description: string;
};

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
  note: string;
};

const comparisonData: ComparisonRow[] = [
  {
    feature: "Automation model",
    macOS: "AppleScript dictionaries and native app verbs",
    winscript: "MCP tools mapped to UIA, COM, and shell execution",
    traditional: "Separate scripts, SDKs, and fragile glue code",
  },
  {
    feature: "Agent context",
    macOS: "Readable, but app-specific",
    winscript: "Structured tool responses with predictable retry paths",
    traditional: "Logs and exceptions without protocol semantics",
  },
  {
    feature: "Reach",
    macOS: "Best in first-party app ecosystems",
    winscript: "Desktop UI, enterprise apps, Office, and system tasks",
    traditional: "Usually one surface at a time",
  },
  {
    feature: "Operator workflow",
    macOS: "Scriptable by power users",
    winscript: "Composable for agent loops and human operators",
    traditional: "Custom automation projects for each use case",
  },
];

const storyItems: StoryItem[] = [
  {
    eyebrow: "01 / interpret",
    title: "Take agent intent and narrow it into a concrete action plan.",
    description:
      "WinScript turns high-level instructions into targetable operations that can survive UI drift, loading states, and missing focus.",
  },
  {
    eyebrow: "02 / route",
    title: "Pick the right Windows surface instead of forcing one integration path.",
    description:
      "The runtime can flow toward UI Automation, COM/OLE, or PowerShell depending on the task, so agents stop guessing which subsystem to trust.",
  },
  {
    eyebrow: "03 / recover",
    title: "Return structured outcomes that help the next model step recover fast.",
    description:
      "Clear errors, screenshots, and state hints make retries useful instead of random. That is what turns automation into an agent loop instead of a brittle macro.",
  },
];

const capabilities: Capability[] = [
  {
    icon: LayoutGrid,
    title: "UI Automation",
    description:
      "Read windows, inspect controls, click targets, and fill forms across Win32, WPF, WinUI, and Electron surfaces.",
    note: "Best for desktop navigation and state inspection.",
  },
  {
    icon: Database,
    title: "COM and OLE",
    description:
      "Reach into Office, legacy line-of-business tools, and apps that still expose deep object models behind the visible UI.",
    note: "Best for spreadsheet, document, and ERP-style workflows.",
  },
  {
    icon: Terminal,
    title: "Shell and system control",
    description:
      "Run PowerShell commands, touch the registry, and orchestrate background tasks when the cleanest path is below the interface.",
    note: "Best for setup, remediation, and fleet actions.",
  },
  {
    icon: Shield,
    title: "Recovery surfaces",
    description:
      "Give agents the signal they need to retry intentionally with typed failures, screenshots, and action traces.",
    note: "Best for keeping long automation runs stable.",
  },
];

const runtimeSignals = [
  "MCP-native transport",
  "Windows-first automation runtime",
  "Structured retries for agents",
];

const protocolLayers = [
  {
    icon: Brain,
    name: "Client",
    value: "Claude Desktop, Cursor, or your own agent runtime",
  },
  {
    icon: Route,
    name: "Runtime",
    value: "Intent routing, action planning, and recovery logic",
  },
  {
    icon: Monitor,
    name: "Surface",
    value: "UIA, COM, PowerShell, registry, and system state",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <StitchNavbar />

      <section className="relative isolate overflow-hidden bg-[#07111f] pt-12 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,98,254,0.35),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.12),_transparent_24%),linear-gradient(180deg,_#081120_0%,_#07111f_52%,_#0b1728_100%)]" />
        <div className="hero-grid animate-drift absolute inset-0 opacity-40" />
        <div className="animate-pulse-glow absolute left-[8%] top-24 h-48 w-48 rounded-full bg-[#0f62fe]/30 blur-3xl" />
        <div className="animate-float-slow absolute right-[10%] top-1/3 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100svh-3rem)] max-w-7xl gap-14 px-6 py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:py-16">
          <div className="max-w-xl animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/45">
              winscript / desktop automation runtime
            </p>

            <div className="mt-6 inline-flex items-center rounded-full border border-white/15 bg-white/6 px-4 py-1 text-xs font-medium text-white/80 backdrop-blur">
              v1.2.0 stable
            </div>

            <h1 className="mt-6 max-w-4xl text-balance text-[clamp(3.4rem,8vw,7rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
              WinScript
            </h1>

            <p className="mt-5 max-w-lg text-balance text-xl leading-8 text-white/72 sm:text-2xl">
              AppleScript-grade control for Windows, delivered as an MCP server
              for AI agents.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/68">
              {runtimeSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-white/12 bg-white/5 px-4 py-2 backdrop-blur"
                >
                  {signal}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                Read the docs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://github.com/RavaniRoshan/winscript-mcp#installation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/18 px-6 py-3 text-sm font-medium text-white/82 transition-colors hover:bg-white/8"
              >
                Install from GitHub
              </a>
            </div>

            <p className="mt-10 max-w-md border-t border-white/12 pt-6 text-sm leading-6 text-white/56">
              Built for Claude Desktop, Cursor, internal copilots, and any team
              building agent loops that need real Windows reach.
            </p>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "120ms" }}
          >
            <div className="animate-float-slow absolute inset-0 translate-x-4 translate-y-6 rounded-[2rem] bg-[#0f62fe]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/58">
                  Runtime Preview
                </div>
              </div>

              <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-cyan-100/58">
                    <Bot className="h-3.5 w-3.5" />
                    Agent Intent
                  </div>
                  <pre className="mt-4 overflow-x-auto bg-transparent p-0 font-mono text-sm leading-7 text-white/84">
{`goal: update forecast workbook and email finance

plan:
  - open Excel workbook through COM
  - verify "Q2 Forecast" tab is visible
  - patch cells B4:D9
  - capture confirmation screenshot
  - send completion note through Outlook`}
                  </pre>
                </div>

                <div className="space-y-5 p-6">
                  <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/52">
                      <Route className="h-3.5 w-3.5" />
                      Action Graph
                    </div>
                    <div className="mt-4 space-y-3">
                      {protocolLayers.map((layer) => (
                        <div
                          key={layer.name}
                          className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3"
                        >
                          <layer.icon className="mt-0.5 h-4 w-4 text-cyan-200" />
                          <div>
                            <p className="text-sm font-medium text-white/88">
                              {layer.name}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-white/56">
                              {layer.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] border border-[#0f62fe]/30 bg-[#0f62fe]/12 p-4">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-blue-100/70">
                      <Zap className="h-3.5 w-3.5" />
                      Tool Call
                    </div>
                    <div className="mt-3 font-mono text-sm leading-7 text-white/88">
                      winscript.execute({"{"}
                      <br />
                      &nbsp;&nbsp;target: "Excel",
                      <br />
                      &nbsp;&nbsp;surface: "com",
                      <br />
                      &nbsp;&nbsp;action: "SetRange"
                      <br />
                      {"}"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid border-t border-white/10 md:grid-cols-3">
                <div className="border-b border-white/10 px-6 py-4 md:border-b-0 md:border-r">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    UIA
                  </p>
                  <p className="mt-2 text-sm text-white/72">
                    Visible controls and app state.
                  </p>
                </div>
                <div className="border-b border-white/10 px-6 py-4 md:border-b-0 md:border-r">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    COM
                  </p>
                  <p className="mt-2 text-sm text-white/72">
                    Object models behind Office and legacy apps.
                  </p>
                </div>
                <div className="px-6 py-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    Shell
                  </p>
                  <p className="mt-2 text-sm text-white/72">
                    PowerShell and system-level remediation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef4ff] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f62fe]">
                Why it exists
              </p>
              <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Windows always had the power. It just never had one coherent
                interface for agents.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                Most automation stacks on Windows force you to choose between
                brittle UI scripting, app-specific object models, or hand-built
                shell orchestration. WinScript lets one runtime decide which
                layer to use, then reports back in agent-friendly language.
              </p>

              <div className="mt-10 space-y-8">
                <div className="border-t border-slate-300 pt-5">
                  <p className="text-sm font-medium text-slate-950">
                    One protocol across multiple surfaces
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                    Agents stop switching mental models every time a task moves
                    from visible UI to Office objects to system setup work.
                  </p>
                </div>
                <div className="border-t border-slate-300 pt-5">
                  <p className="text-sm font-medium text-slate-950">
                    Clear failure modes instead of silent script drift
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                    Structured outcomes make it easier to retry on purpose,
                    recover state, and continue long-running jobs.
                  </p>
                </div>
                <div className="border-t border-slate-300 pt-5">
                  <p className="text-sm font-medium text-slate-950">
                    Built for operators as much as prompt engineers
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                    The same runtime can support human-run workflows, internal
                    copilots, and fully autonomous desktop loops.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <div className="grid grid-cols-[1.05fr_1fr_1.15fr_1fr] border-b border-slate-200 bg-slate-950 px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
                <div>Feature</div>
                <div>macOS</div>
                <div className="text-blue-300">WinScript</div>
                <div>Traditional</div>
              </div>

              {comparisonData.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid gap-4 px-6 py-5 text-sm leading-6 md:grid-cols-[1.05fr_1fr_1.15fr_1fr] ${
                    index !== comparisonData.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  <p className="font-medium text-slate-950">{row.feature}</p>
                  <p className="text-slate-600">{row.macOS}</p>
                  <p className="font-medium text-[#0f62fe]">{row.winscript}</p>
                  <p className="text-slate-600">{row.traditional}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f62fe]">
              System story
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              A runtime that speaks to agents on one side and Windows on the
              other.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              The hard part is not clicking buttons. The hard part is knowing
              when to switch surfaces, how to report failure, and how to keep a
              multi-step workflow understandable to the next model call.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div className="rounded-[1.75rem] bg-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/52">
                <Code2 className="h-4 w-4" />
                Runtime Layers
              </div>

              <div className="mt-8 space-y-6">
                <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm font-medium text-white/88">
                    Agent protocol
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/58">
                    Tool schemas, typed parameters, predictable responses, and a
                    compact interface that models can reason over quickly.
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm font-medium text-white/88">
                    Decision engine
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/58">
                    Routing logic that chooses between UIA, COM, and shell
                    execution while preserving traceability for retries.
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm font-medium text-white/88">
                    Windows reach
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/58">
                    The actual desktop substrate: application object models,
                    accessible control trees, process state, and machine-level
                    commands.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {storyItems.map((item, index) => (
                <div
                  key={item.title}
                  className="border-t border-slate-200 pt-6 animate-fade-in"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1728] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
              Capability rail
            </p>
            <h2 className="mt-4 max-w-md text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              One runtime, four high-value surfaces.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/62">
              What matters is the shape of the reach: visible UI, deep object
              models, system actions, and the recovery loop that keeps
              automation stable when the desktop changes underneath you.
            </p>
          </div>

          <div className="divide-y divide-white/10">
            {capabilities.map((capability) => (
              <div key={capability.title} className="grid gap-5 py-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <capability.icon className="h-5 w-5 text-cyan-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-white/62">
                    {capability.description}
                  </p>
                </div>
                <p className="max-w-xs text-sm leading-6 text-white/46 md:pt-1 md:text-right">
                  {capability.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f62fe]">
            Start here
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Give your agent a Windows runtime that actually understands the
            machine.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Read the docs, inspect the runtime model, and wire WinScript into
            the MCP client or operator workflow you already have.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Explore documentation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://github.com/RavaniRoshan/winscript-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-white"
            >
              View source
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-semibold tracking-tight text-slate-950">
              winscript
            </span>
            <p className="mt-1">Windows automation for MCP-native agent loops.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/docs" className="transition-colors hover:text-slate-950">
              Docs
            </Link>
            <Link href="/api" className="transition-colors hover:text-slate-950">
              API
            </Link>
            <Link
              href="/architecture"
              className="transition-colors hover:text-slate-950"
            >
              Architecture
            </Link>
            <a
              href="https://github.com/RavaniRoshan/winscript-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-slate-950"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
