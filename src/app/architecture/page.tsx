"use client";

import DocsShell from "@/components/DocsShell";
import {
  Bot,
  CheckCircle2,
  Eye,
  ListChecks,
  Monitor,
  Network,
  Shield,
  Terminal,
} from "lucide-react";

const drivers = [
  {
    name: "AutomationProxy",
    tech: "pywinAuto",
    use: "GUI navigation and clicks",
    safety: "HIGH",
  },
  {
    name: "ComponentBridge",
    tech: "win32com",
    use: "Office and legacy integrations",
    safety: "MEDIUM",
  },
  {
    name: "ShellExecutor",
    tech: "subprocess",
    use: "CLI tools and file operations",
    safety: "CRITICAL",
  },
  {
    name: "InputSynthesizer",
    tech: "SendInput / API",
    use: "Raw keyboard and mouse simulation",
    safety: "HIGH",
  },
];

const pipeline = [
  {
    icon: Bot,
    title: "AI agent",
    detail: "Claude, GPT, or your own runtime",
  },
  {
    icon: Network,
    title: "MCP server",
    detail: "Protocol and tool schema layer",
  },
  {
    icon: Shield,
    title: "WinScript",
    detail: "Execution and recovery engine",
  },
  {
    icon: Terminal,
    title: "OS interface",
    detail: "Win32, COM, registry, and shell",
  },
];

export default function Architecture() {
  return (
    <DocsShell
      eyebrow="Docs / Architecture"
      title="Enterprise automation framework for MCP-native desktop control."
      description="WinScript bridges high-level AI reasoning and low-level Windows execution through a structured pipeline that emphasizes observability, routing, and reliable recovery."
      activePage="/architecture"
      badges={["Execution pipeline", "Visual feedback", "Driver model"]}
      sectionLinks={[
        { href: "#pipeline", label: "Execution pipeline" },
        { href: "#feedback", label: "Visual feedback" },
        { href: "#drivers", label: "Backend drivers" },
      ]}
    >
      <section
        id="pipeline"
        className="site-panel rounded-[2rem] p-6 shadow-site sm:p-8"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-site-accent-soft">
          Execution pipeline
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-site-text">
          One flow from agent intent to Windows execution.
        </h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {pipeline.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-6"
            >
              <step.icon className="h-6 w-6 text-site-accent-soft" />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-site-soft">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-site-text">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-site-muted">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-site-accent-soft" />
              <h3 className="text-lg font-semibold text-site-text">
                Sandboxed execution
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-site-muted">
              Commands are validated against the configured automation context so
              the runtime can stay useful without drifting into blind system
              mutation.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <ListChecks className="h-5 w-5 text-site-accent-soft" />
              <h3 className="text-lg font-semibold text-site-text">
                Audit logging
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-site-muted">
              Each step from MCP request to Windows action can be captured as a
              trace, making it easier to inspect, replay, and debug.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <Eye className="h-5 w-5 text-site-accent-soft" />
              <h3 className="text-lg font-semibold text-site-text">
                Protocol state
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-site-muted">
              Session state stays discrete between the agent and the OS so
              workflows remain reproducible across long-running tasks.
            </p>
          </div>
        </div>
      </section>

      <section
        id="feedback"
        className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
      >
        <div className="site-panel rounded-[2rem] p-6 shadow-site sm:p-8">
          <div className="flex items-center gap-3">
            <Monitor className="h-5 w-5 text-site-accent-soft" />
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-site-text">
              Visual feedback pipeline
            </h2>
          </div>
          <p className="mt-5 text-sm leading-8 text-site-muted">
            Screen capture and state inspection are part of the runtime rather
            than bolted on after the fact. That gives the next model step the
            evidence it needs to verify state, not just hope for it.
          </p>

          <div className="site-panel-strong mt-8 rounded-[1.8rem] p-6">
            <div className="mb-3 text-[11px] uppercase tracking-[0.24em] text-site-soft">
              Response payload
            </div>
            <pre className="text-xs leading-7 text-site-text sm:text-sm">
{`{
  "type": "image",
  "metadata": {
    "resolution": "1440x900",
    "encoding": "jpeg"
  },
  "data": "base64..."
}`}
            </pre>
          </div>
        </div>

        <div className="site-panel rounded-[2rem] p-6 shadow-site sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-site-accent-soft">
            Capture metadata
          </p>
          <div className="mt-6 space-y-5">
            {[
              "High-fidelity screen capture with latency tracking",
              "Optional privacy redaction layer",
              "Automatic OCR for text-heavy interfaces",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5"
              >
                <p className="text-sm leading-7 text-site-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="drivers"
        className="site-panel rounded-[2rem] p-6 shadow-site sm:p-8"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-site-accent-soft">
          Backend drivers
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-site-text">
          Driver model behind the runtime.
        </h2>

        <div className="mt-8 overflow-x-auto rounded-[1.8rem] border border-white/8 bg-white/[0.03]">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="text-[11px] uppercase tracking-[0.24em] text-site-soft">
                <th className="border-b border-white/8 px-5 py-4">Driver</th>
                <th className="border-b border-white/8 px-5 py-4">Technology</th>
                <th className="border-b border-white/8 px-5 py-4">Use case</th>
                <th className="border-b border-white/8 px-5 py-4">Safety</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver) => (
                <tr key={driver.name} className="border-b border-white/8 last:border-b-0">
                  <td className="px-5 py-5 font-mono text-sm text-site-accent-soft">
                    {driver.name}
                  </td>
                  <td className="px-5 py-5 text-sm text-site-text">
                    {driver.tech}
                  </td>
                  <td className="px-5 py-5 text-sm leading-7 text-site-muted">
                    {driver.use}
                  </td>
                  <td className="px-5 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                        driver.safety === "CRITICAL"
                          ? "bg-[rgba(170,56,56,0.2)] text-[#ffb4b4]"
                          : driver.safety === "MEDIUM"
                            ? "bg-[rgba(243,181,98,0.14)] text-site-warm"
                            : "bg-[rgba(90,133,255,0.16)] text-site-accent-soft"
                      }`}
                    >
                      {driver.safety}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DocsShell>
  );
}
