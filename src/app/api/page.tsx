"use client";

import DocsShell from "@/components/DocsShell";
import { AlertCircle, Braces, Lock, Route } from "lucide-react";

const primitives = [
  {
    primitive: "App IPC",
    namespace: "winscript.ipc.*",
    description:
      "Low-level inter-process communication for Windows native applications.",
    latency: "REAL-TIME",
  },
  {
    primitive: "UI Access",
    namespace: "winscript.ui.anchor.*",
    description:
      "Access to accessibility trees, window handles, and visual element queries.",
    latency: "ASYNC",
  },
  {
    primitive: "Scripting",
    namespace: "winscript.core.eval.*",
    description:
      "Dynamic execution of automation logic with runtime isolation.",
    latency: "ASYNC",
  },
];

export default function APIReference() {
  return (
    <DocsShell
      eyebrow="Docs / API Reference"
      title="System primitives, permission models, and failure semantics."
      description="The WinScript API surface is designed for agents that need typed tooling, predictable namespaces, and clear recovery behavior when Windows state does not cooperate."
      activePage="/api"
      badges={["Typed primitives", "Permission model", "Retry semantics"]}
      sectionLinks={[
        { href: "#primitives", label: "System primitives" },
        { href: "#security", label: "Security model" },
        { href: "#implementation", label: "Implementation strategy" },
      ]}
    >
      <section
        id="primitives"
        className="site-panel rounded-[2rem] p-6 shadow-site sm:p-8"
      >
        <div className="flex items-center gap-3">
          <Braces className="h-5 w-5 text-site-accent-soft" />
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-site-text">
            System primitives
          </h2>
        </div>

        <p className="mt-5 max-w-3xl text-base leading-8 text-site-muted">
          Each primitive exposes a different layer of Windows control. Agents can
          work with one namespace while the runtime decides which surface fits
          the job and what recovery information needs to come back.
        </p>

        <div className="mt-8 overflow-x-auto rounded-[1.8rem] border border-white/8 bg-white/[0.03]">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="text-[11px] uppercase tracking-[0.24em] text-site-soft">
                <th className="border-b border-white/8 px-5 py-4">Primitive</th>
                <th className="border-b border-white/8 px-5 py-4">Namespace</th>
                <th className="border-b border-white/8 px-5 py-4">Description</th>
                <th className="border-b border-white/8 px-5 py-4">Latency</th>
              </tr>
            </thead>
            <tbody>
              {primitives.map((primitive) => (
                <tr
                  key={primitive.primitive}
                  className="border-b border-white/8 last:border-b-0"
                >
                  <td className="px-5 py-5 text-sm font-medium text-site-text">
                    {primitive.primitive}
                  </td>
                  <td className="px-5 py-5 font-mono text-sm text-site-accent-soft">
                    {primitive.namespace}
                  </td>
                  <td className="px-5 py-5 text-sm leading-7 text-site-muted">
                    {primitive.description}
                  </td>
                  <td className="px-5 py-5">
                    <span className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-site-text">
                      {primitive.latency}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        id="security"
        className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
      >
        <div className="site-panel rounded-[2rem] p-6 shadow-site sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-site-accent-soft">
                Security architecture
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-site-text">
                Open by default inside the automation workspace.
              </h2>
            </div>
            <Lock className="h-6 w-6 text-site-accent-soft" />
          </div>

          <p className="mt-5 text-sm leading-8 text-site-muted">
            WinScript assumes primary visual access to any application context
            registered in the automation manifest. That keeps the runtime usable
            for real work while still bounding execution to the active user
            session and the surfaces the operator has chosen to expose.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-site-soft">
                Implicit trust
              </p>
              <p className="mt-3 text-sm leading-7 text-site-muted">
                Standard operations do not require extra prompts once the
                workspace is configured.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-site-soft">
                Scope bound
              </p>
              <p className="mt-3 text-sm leading-7 text-site-muted">
                Execution stays locked to the active session and the registered
                automation context.
              </p>
            </div>
          </div>
        </div>

        <div className="site-panel rounded-[2rem] p-6 shadow-site sm:p-8">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-site-accent-soft" />
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-site-text">
              Error handling
            </h2>
          </div>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.24em] text-site-accent-soft">
            WinScriptMaxRetriesError
          </p>
          <p className="mt-4 text-sm leading-8 text-site-muted">
            This exception is thrown when a system primitive cannot stabilize
            after the default or custom retry limit. It usually signals an
            unrecoverable UI state, blocked IPC channel, or missing surface.
          </p>

          <div className="site-panel-strong mt-6 rounded-[1.5rem] p-5">
            <pre className="text-xs leading-7 text-site-text sm:text-sm">
{`try {
  await app.launch();
} catch (error) {
  if (error instanceof WinScriptMaxRetriesError) {
    console.error("Critical failure");
  }
}`}
            </pre>
          </div>
        </div>
      </section>

      <section
        id="implementation"
        className="site-panel rounded-[2rem] p-6 shadow-site sm:p-8"
      >
        <div className="flex items-center gap-3">
          <Route className="h-5 w-5 text-site-accent-soft" />
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-site-text">
            Implementation strategy
          </h2>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <div>
            <p className="text-sm leading-8 text-site-muted">
              When designing automation flows, prefer IPC or object-model access
              before falling back to raw UI actions. That keeps workflows faster,
              more stable, and less sensitive to visual changes in the desktop.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-site-soft">
                1. Request handles
              </p>
              <p className="mt-3 text-sm leading-7 text-site-muted">
                Acquire persistent pointers to target windows or applications
                through the appropriate namespace before sending actions.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-site-soft">
                2. Prefer stable channels
              </p>
              <p className="mt-3 text-sm leading-7 text-site-muted">
                Use IPC or COM whenever the application exposes them. Treat raw
                UI interaction as the control surface of last resort.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-site-soft">
                3. Bubble failures intentionally
              </p>
              <p className="mt-3 text-sm leading-7 text-site-muted">
                Retry logic belongs in the runtime and the caller. Do not assume
                lower layers will silently recover on behalf of the workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DocsShell>
  );
}
