"use client";

import DocsShell from "@/components/DocsShell";
import {
  Check,
  Code2,
  Download,
  Lightbulb,
  Shield,
  Zap,
} from "lucide-react";

export default function DocsIntroduction() {
  return (
    <DocsShell
      eyebrow="Docs / Introduction"
      title="The Windows orchestration layer for AI agents."
      description="WinScript bridges large language models and the Windows operating system through the Model Context Protocol, with one runtime that can speak to visible UI, application object models, and system commands."
      activePage="/docs"
      badges={["Windows 10/11", "Python 3.10+", "MCP-ready"]}
      sectionLinks={[
        { href: "#overview", label: "Overview" },
        { href: "#installation", label: "Installation" },
        { href: "#getting-started", label: "Getting started" },
      ]}
    >
      <section
        id="overview"
        className="site-panel rounded-[2rem] p-6 shadow-site sm:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-site-accent-soft">
              Native execution
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-site-text">
              Desktop control without the usual Windows fragmentation.
            </h2>
            <p className="mt-5 text-base leading-8 text-site-muted">
              WinScript gives agents one automation interface instead of forcing
              separate tools for visible controls, Office objects, or machine
              commands. That makes desktop workflows easier to compose and much
              easier to recover when the environment shifts underneath you.
            </p>
          </div>

          <div className="site-panel-strong relative overflow-hidden rounded-[2rem] p-6 shadow-site-glow">
            <div className="site-dots absolute inset-0 opacity-10" />
            <div className="site-radial-blue absolute inset-[18%] rounded-full blur-3xl opacity-80" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5">
                <Zap className="h-6 w-6 text-site-accent-soft" />
                <h3 className="mt-5 text-lg font-semibold text-site-text">
                  Real-time response
                </h3>
                <p className="mt-3 text-sm leading-7 text-site-muted">
                  Direct control over native Windows surfaces without heavy
                  wrappers between the model and the machine.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5">
                <Shield className="h-6 w-6 text-site-accent-soft" />
                <h3 className="mt-5 text-lg font-semibold text-site-text">
                  Recovery-aware
                </h3>
                <p className="mt-3 text-sm leading-7 text-site-muted">
                  Failures return enough context for agents to retry with intent
                  instead of guessing blindly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="installation"
        className="site-panel rounded-[2rem] p-6 shadow-site sm:p-8"
      >
        <div className="flex items-center gap-3">
          <Download className="h-5 w-5 text-site-accent-soft" />
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-site-text">
            Installation
          </h2>
        </div>

        <p className="mt-5 max-w-3xl text-base leading-8 text-site-muted">
          WinScript is distributed through PyPI. Install it on a Windows machine
          with Python 3.10 or newer and connect it to the MCP client or tool
          host you already use.
        </p>

        <div className="site-panel-strong mt-8 rounded-[1.8rem] p-6">
          <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-site-soft">
            <span>Terminal</span>
            <span>pip</span>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/8 bg-[#05070b] px-4 py-4 font-mono text-sm text-site-text">
            pip install winscript-mcp
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-site-soft">
              Requirements
            </p>
            <div className="mt-5 space-y-4">
              {["Windows 10/11 (x64)", "Python 3.10 or higher"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 text-site-accent-soft" />
                  <p className="text-sm leading-7 text-site-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-site-soft">
              Capabilities
            </p>
            <div className="mt-5 space-y-4">
              {[
                "Claude Desktop integration",
                "Custom MCP toolsets",
                "Windows-first desktop automation",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 text-site-accent-soft" />
                  <p className="text-sm leading-7 text-site-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="getting-started"
        className="site-panel rounded-[2rem] p-6 shadow-site sm:p-8"
      >
        <div className="flex items-center gap-3">
          <Code2 className="h-5 w-5 text-site-accent-soft" />
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-site-text">
            Getting started
          </h2>
        </div>

        <p className="mt-5 max-w-3xl text-base leading-8 text-site-muted">
          A minimal setup can initialize the WinScript engine, register a tool,
          and expose that tool through an MCP server for your agent runtime.
        </p>

        <div className="site-panel-strong mt-8 rounded-[1.8rem] p-6">
          <div className="mb-4 flex items-center justify-between border-b border-white/8 pb-3 text-[11px] uppercase tracking-[0.24em] text-site-soft">
            <span>agent_config.py</span>
            <span>Python</span>
          </div>
          <pre className="text-xs leading-7 text-site-text sm:text-sm">
{`from winscript import WinEngine, ToolRegistry

engine = WinEngine()

@ToolRegistry.register(name="open_application")
def launch_app(app_name: str):
    """Launch a native Windows application by name."""
    engine.shell.run(app_name)
    return f"Successfully launched {app_name}"

engine.serve_mcp()`}
          </pre>
        </div>

        <div className="mt-8 rounded-[1.6rem] border border-site-accent/20 bg-site-accent/10 p-6">
          <div className="flex items-start gap-4">
            <Lightbulb className="mt-1 h-5 w-5 text-site-accent-soft" />
            <div>
              <h3 className="text-lg font-semibold text-site-text">
                Pro tip: agent autonomy
              </h3>
              <p className="mt-2 text-sm leading-7 text-site-muted">
                Combine WinScript with the MCP SDK so your agent can inspect
                system logs, restart services, or troubleshoot the environment
                before asking a human to intervene.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DocsShell>
  );
}
