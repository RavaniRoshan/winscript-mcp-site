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
    feature: "Approach",
    winscript: "App-name + element-name based",
    traditional: "Screenshot + UI tree coords (Windows-MCP)",
  },
  {
    feature: "Workflow recording",
    winscript: "✅ Built-in macro recorder",
    traditional: "❌ Not available",
  },
  {
    feature: "App-specific helpers",
    winscript: "Dedicated Excel, Outlook, Notepad tools",
    traditional: "Generic UI interactions",
  },
  {
    feature: "Audit log",
    winscript: "✅ Full history of every tool call",
    traditional: "❌ Not available",
  },
];

const runtimeSteps: RuntimeStep[] = [
  {
    label: "01 / setup",
    title: "One-click install for Claude.",
    description:
      "Install WinScript and link it to an AI assistant like Claude Desktop. It acts as a bridge between the AI's intelligence and your Windows PC.",
  },
  {
    label: "02 / instruct",
    title: "Tell the AI what you want to do.",
    description:
      "Simply type your request. For example: 'Open my weekly report in Excel, copy the summary, and email it to my manager using Outlook.'",
  },
  {
    label: "03 / execute",
    title: "Watch the magic happen.",
    description:
      "The AI uses WinScript to take control—opening apps, clicking buttons, typing text, and managing files—just like you would, only faster.",
  },
];

const capabilities: Capability[] = [
  {
    icon: LayoutGrid,
    title: "Workflow Automation & Macros",
    description:
      "The killer feature: Record all your actions into a named workflow and replay it anytime. Perfect for repetitive morning tasks or data extraction.",
    note: "Saves hours of prompt-writing.",
  },
  {
    icon: Database,
    title: "Deep Office Integration",
    description:
      "It doesn't just click; it understands Excel and Outlook on a deeper level. It can read specific cells, write data, and draft emails reliably.",
    note: "Ideal for generating reports or automating email workflows.",
  },
  {
    icon: Terminal,
    title: "System Execution & PowerShell",
    description:
      "WinScript can run PowerShell scripts, organize folders, copy files, and inspect machine state using 64 fully tested tools.",
    note: "Great for comprehensive system management.",
  },
  {
    icon: Shield,
    title: "Full Audit Log",
    description:
      "Every tool call is tracked with full history and execution timings. Debugging your AI automation becomes trivial.",
    note: "Keeps your workflows transparent and reliable.",
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
  { value: "64", label: "fully tested tools for complete desktop control" },
  { value: "1", label: "click install for Claude Desktop and MCP clients" },
  { value: "∞", label: "repeatable workflows with the macro recorder" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-site-bg text-site-text">
      <StitchNavbar />

      <section className="relative isolate overflow-hidden pt-40 sm:pt-44">
        <div className="site-grid absolute inset-0 opacity-30" />
        <div className="site-grid site-grid-fade absolute inset-0 opacity-40" />
        <div className="site-radial-blue animate-pulse-glow absolute left-[-10rem] top-[-4rem] h-[32rem] w-[32rem] blur-3xl" />
        <div className="site-radial-warm absolute bottom-[-10rem] left-1/3 h-[24rem] w-[24rem] blur-3xl opacity-55" />

        <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl gap-16 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:px-8">
          <div className="max-w-xl animate-fade-in">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-site-accent-soft">
              Windows orchestration layer
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-site-line-strong bg-site-surface px-4 py-2 text-xs font-medium text-site-text/88">
                v1.2.0 stable
              </div>
              <a
                href="https://www.producthunt.com/products/winscript?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-winscript"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <img
                  alt="WinScript - Windows native automation API via MCP for AI desktop control | Product Hunt"
                  width={250}
                  height={54}
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1119785&theme=dark&t=1775917805859"
                  className="h-9 w-auto"
                />
              </a>
            </div>

            <h1 className="mt-7 max-w-3xl text-balance text-[clamp(3.4rem,8vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
              Tell your AI what to do on Windows, and WinScript does it.
            </h1>

            <p className="mt-6 max-w-lg text-balance text-lg leading-8 text-site-muted sm:text-xl">
              Automate Excel, send emails, click buttons, and manage files—all just by asking. No coding required. WinScript connects your AI assistant directly to your desktop.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full bg-site-accent px-6 py-3 text-sm font-semibold text-site-text-strong transition-transform hover:-translate-y-0.5 hover:bg-[#6b96ff]"
              >
                Read the docs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://github.com/RavaniRoshan/winscript-mcp#installation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-site-line-strong px-6 py-3 text-sm font-medium text-site-text transition-colors hover:bg-site-surface-hover"
              >
                Install from GitHub
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-site-muted sm:grid-cols-3">
              <div className="rounded-2xl border border-site-line bg-site-surface px-4 py-4">
                MCP-native transport
              </div>
              <div className="rounded-2xl border border-site-line bg-site-surface px-4 py-4">
                Windows-first runtime
              </div>
              <div className="rounded-2xl border border-site-line bg-site-surface px-4 py-4">
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
              <div className="animate-slow-spin absolute inset-[6%] rounded-full border border-site-line" />
              <div className="absolute inset-[14%] rounded-full border border-site-accent/20" />
              <div className="absolute inset-[22%] rounded-full border border-site-line" />
              <div className="absolute inset-[30%] rounded-full border border-site-accent/25" />
              <div className="absolute inset-[39%] rounded-full border border-site-line-strong" />

              <div className="site-panel-strong absolute inset-[20%] rounded-full shadow-site-glow">
                <div className="site-grid absolute inset-0 rounded-full opacity-20" />
                <div className="absolute inset-[16%] rounded-full border border-site-accent/30" />
                <div className="absolute inset-[30%] rounded-full border border-site-line-strong" />
                <div className="site-radial-blue absolute inset-[18%] rounded-full blur-2xl" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-site-accent-soft">
                    Runtime preview
                  </p>
                  <p className="mt-4 max-w-[14rem] text-balance text-3xl font-semibold tracking-[-0.05em] text-site-text">
                    Intent routes to the right Windows layer.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-site-line-strong bg-site-surface-hover px-4 py-2 text-xs text-site-muted">
                    <Route className="h-3.5 w-3.5 text-site-accent-soft" />
                    UIA, COM, PowerShell
                  </div>
                </div>
              </div>

              {stackNodes.map((node) => (
                <div
                  key={node.label}
                  className={`absolute ${node.className} hidden sm:block rounded-full border border-site-line-strong bg-site-panel px-4 py-2 text-xs font-medium text-site-text shadow-site`}
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

      <section className="relative py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-site-line-strong bg-site-bg-alt shadow-site-glow cursor-pointer group">
            {/* Placeholder for actual video demo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-transform group-hover:scale-105">
              <div className="h-16 w-16 rounded-full bg-site-accent/20 flex items-center justify-center mb-4 border border-site-accent/30 shadow-site-glow">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-site-accent border-b-8 border-b-transparent ml-1" />
              </div>
              <p className="text-sm font-medium text-site-text/80">Watch WinScript in Action</p>
              <p className="text-xs text-site-muted mt-2">See how Claude Desktop automates Windows natively</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-start">
            <div className="max-w-lg">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-site-accent-soft">
                Real-World Examples
              </p>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] text-site-text sm:text-5xl">
                What can you do with WinScript?
              </h2>
              <p className="mt-6 text-lg leading-8 text-site-muted">
                From simple tasks to complex workflows, WinScript gives your AI the power to interact with Windows just like a human operator would.
              </p>

              <div className="mt-10 space-y-5 border-t border-site-line pt-6">
                <div className="flex items-start gap-3">
                  <Bot className="mt-1 h-4 w-4 text-site-accent-soft" />
                  <p className="text-sm leading-7 text-site-muted">
                    <strong>Data Entry:</strong> Ask your AI to read a PDF invoice and automatically type the details into a legacy accounting app.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="mt-1 h-4 w-4 text-site-accent-soft" />
                  <p className="text-sm leading-7 text-site-muted">
                    <strong>Automated Reporting:</strong> Extract last month's numbers from Excel, draft an email in Outlook, and send it to your team.
                  </p>
                </div>
              </div>
            </div>

            <div className="site-panel rounded-[2.25rem] p-6 shadow-site sm:p-8">
              <div className="grid grid-cols-[1.05fr_1fr_1fr] gap-6 border-b border-site-line pb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-site-soft">
                <div>Feature</div>
                <div>WinScript</div>
                <div>Traditional</div>
              </div>

              <div className="divide-y divide-white/8">
                {comparisonRows.map((row) => (
                  <div
                    key={row.feature}
                    className="group grid gap-5 rounded-2xl px-4 py-5 transition-colors hover:bg-site-surface md:-mx-4 md:grid-cols-[1.05fr_1fr_1fr]"
                  >
                    <p className="text-sm font-medium text-site-text transition-colors group-hover:text-site-accent-soft">
                      {row.feature}
                    </p>
                    <p className="text-sm leading-7 text-site-text/88">
                      {row.winscript}
                    </p>
                    <p className="text-sm leading-7 text-site-muted transition-colors group-hover:text-site-text/60">
                      {row.traditional}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-site-line bg-site-surface p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-site-soft">
                    Data Parsing
                  </p>
                  <p className="mt-3 text-sm leading-7 text-site-muted">
                    Reads and extracts info directly from the screen.
                  </p>
                </div>
                <div className="rounded-2xl border border-site-line bg-site-surface p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-site-soft">
                    Action Taking
                  </p>
                  <p className="mt-3 text-sm leading-7 text-site-muted">
                    Clicks buttons, types text, and navigates apps.
                  </p>
                </div>
                <div className="rounded-2xl border border-site-line bg-site-surface p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-site-soft">
                    Self-Correcting
                  </p>
                  <p className="mt-3 text-sm leading-7 text-site-muted">
                    Recovers gracefully if a window loads slowly.
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
                How It Works
              </p>
              <h2 className="mt-5 max-w-lg text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] text-site-text sm:text-5xl">
                A reliable bridge between your AI and your PC.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-site-muted">
                WinScript handles all the complicated Windows internals so your AI can focus on getting the job done.
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
                Under the Hood
              </p>
              <h2 className="mt-5 max-w-lg text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] text-site-text sm:text-5xl">
                Powerful tech, simplified for everyone.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-site-muted">
                WinScript connects directly to Windows' deepest technical layers—like UI Automation, COM, and the Command Line—but hides the complexity so you don't have to worry about it.
              </p>

              <div className="mt-10 divide-y divide-white/8">
                {capabilities.map((capability) => (
                  <div
                    key={capability.title}
                    className="grid gap-4 py-5 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-start"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-site-line-strong bg-site-surface">
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
              <div className="absolute inset-[14%] rounded-full border border-site-line" />
              <div className="absolute inset-[26%] rounded-full border border-site-accent/22" />
              <div className="absolute inset-[38%] rounded-full border border-site-line-strong" />

              <div className="relative flex aspect-square items-center justify-center">
                <div className="rounded-full border border-site-line-strong bg-site-panel px-8 py-7 text-center shadow-site">
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
                    className={`absolute ${node.className} rounded-full border border-site-line-strong bg-site-panel-strong px-4 py-2 text-xs font-medium text-site-text`}
                  >
                    {node.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 border-t border-site-line pt-10 sm:grid-cols-3">
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
            Get Started
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] text-site-text sm:text-5xl">
            Give your AI the keys to your Windows PC today.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-site-muted">
            Check out the documentation to see how easy it is to install WinScript and connect it to your favorite AI assistant in minutes.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-full bg-site-accent px-6 py-3 text-sm font-semibold text-site-text-strong transition-colors hover:bg-site-accent-soft"
            >
              Explore documentation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://github.com/RavaniRoshan/winscript-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-site-line-strong px-6 py-3 text-sm font-medium text-site-text transition-colors hover:bg-site-surface-hover"
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
