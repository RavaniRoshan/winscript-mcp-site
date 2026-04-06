"use client";

import StitchNavbar from "@/components/StitchNavbar";
import { Zap, Shield, Download, Code, Lightbulb } from "lucide-react";

export default function DocsIntroduction() {
  return (
    <main className="min-h-screen bg-white">
      <StitchNavbar />

      <div className="flex pt-12">
        {/* SideNavBar */}
        <aside className="fixed left-0 top-12 h-[calc(100vh-48px)] w-64 bg-neutral-50 border-r border-neutral-200 flex flex-col py-4 gap-1 overflow-y-auto">
          <div className="px-6 mb-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Documentation
            </h2>
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
              v1.2.0-stable
            </p>
          </div>
          <nav className="flex flex-col gap-0.5 px-2">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-blue-600 bg-white font-bold border-l-4 border-blue-600 text-xs font-medium"
            >
              <span className="material-symbols-outlined">info</span>
              Introduction
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 text-xs font-medium"
            >
              <span className="material-symbols-outlined">download</span>
              Installation
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 text-xs font-medium"
            >
              <span className="material-symbols-outlined">psychology</span>
              Core Concepts
            </a>
            <a
              href="/api"
              className="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 text-xs font-medium"
            >
              <span className="material-symbols-outlined">alt_route</span>
              MCP Integration
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 text-xs font-medium"
            >
              <span className="material-symbols-outlined">
                settings_system_daydream
              </span>
              Automation Reference
            </a>
          </nav>
        </aside>

        {/* Main Content Canvas */}
        <main className="ml-64 w-full min-h-screen bg-white">
          <div className="max-w-4xl mx-auto px-12 py-16">
            {/* Introduction Section */}
            <section className="mb-20">
              <div className="mb-4">
                <span className="text-stitch-primary text-xs font-semibold tracking-widest uppercase">
                  Docs / Introduction
                </span>
              </div>
              <h1 className="text-4xl font-light text-neutral-900 mb-6 tracking-tight">
                The Windows Orchestration Layer for AI Agents
              </h1>
              <div className="bg-stitch-surface-container p-8 border-l-4 border-stitch-primary mb-12">
                <p className="text-xl leading-relaxed text-stitch-on-surface-variant font-light">
                  WinScript is a high-performance automation framework that
                  bridges the gap between Large Language Models and the Windows
                  operating system via the Model Context Protocol (MCP).
                </p>
              </div>

              {/* Visual Hero/Bento Concept */}
              <div className="grid grid-cols-12 gap-4 mb-16">
                <div className="col-span-8 bg-stitch-surface-container-low p-6 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Native Execution
                    </h3>
                    <p className="text-sm text-stitch-on-surface-variant leading-relaxed">
                      Direct COM/Win32 API access without the overhead of heavy
                      wrappers. Control everything from File Explorer to deep
                      Registry settings with sub-millisecond latency.
                    </p>
                  </div>
                  <div className="w-full h-40 bg-gradient-to-br from-blue-500 to-blue-600 mt-6 rounded-none opacity-30"></div>
                </div>
                <div className="col-span-4 flex flex-col gap-4">
                  <div className="bg-stitch-primary text-white p-6 flex-1 flex flex-col items-start justify-start">
                    <Zap className="w-8 h-8 mb-4" />
                    <h3 className="text-lg font-semibold">Real-time Response</h3>
                  </div>
                  <div className="bg-stitch-surface-container p-6 flex-1 flex flex-col items-start justify-start">
                    <Shield className="w-8 h-8 mb-4 text-stitch-primary" />
                    <h3 className="text-lg font-semibold">Sandboxed Security</h3>
                  </div>
                </div>
              </div>
            </section>

            {/* Installation Section */}
            <section className="mb-20">
              <div className="flex items-center gap-2 mb-6">
                <Download className="w-5 h-5 text-stitch-primary" />
                <h2 className="text-2xl font-semibold tracking-tight">
                  Installation
                </h2>
              </div>
              <p className="text-stitch-on-surface-variant mb-6 leading-relaxed">
                WinScript is distributed via PyPI. Ensure you have Python 3.10+
                installed on your Windows machine.
              </p>
              <div className="bg-stitch-on-background p-4 mb-8 font-mono text-sm text-white">
                <div className="flex items-center justify-between mb-2 text-neutral-400 text-[10px] uppercase tracking-widest">
                  <span>Terminal</span>
                  <span className="cursor-pointer hover:text-white">
                    copy
                  </span>
                </div>
                <code>pip install winscript-mcp</code>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-b border-stitch-outline-variant pb-6">
                  <h4 className="text-xs font-bold uppercase text-stitch-secondary mb-2">
                    Requirements
                  </h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-stitch-primary mt-1">✓</span>
                      <span>Windows 10/11 (x64)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-stitch-primary mt-1">✓</span>
                      <span>Python 3.10 or higher</span>
                    </li>
                  </ul>
                </div>
                <div className="border-b border-stitch-outline-variant pb-6">
                  <h4 className="text-xs font-bold uppercase text-stitch-secondary mb-2">
                    Capabilities
                  </h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-stitch-primary mt-1">✓</span>
                      <span>Claude Desktop Integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-stitch-primary mt-1">✓</span>
                      <span>Custom MCP Toolsets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Getting Started / Agent Example */}
            <section className="mb-20">
              <div className="flex items-center gap-2 mb-6">
                <Code className="w-5 h-5 text-stitch-primary" />
                <h2 className="text-2xl font-semibold tracking-tight">
                  Getting Started
                </h2>
              </div>
              <p className="text-stitch-on-surface-variant mb-8 leading-relaxed">
                The following example demonstrates how to initialize the WinScript
                engine and register a tool for your AI agent to interact with the
                Windows UI.
              </p>
              <div className="bg-stitch-on-background p-6 mb-12 text-white font-mono text-xs">
                <div className="flex items-center justify-between mb-4 border-b border-neutral-700 pb-2">
                  <span className="text-neutral-500">agent_config.py</span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <pre className="leading-6 overflow-x-auto whitespace-pre-wrap break-words">{`from winscript import WinEngine, ToolRegistry

# Initialize the engine
engine = WinEngine()

@ToolRegistry.register(name="open_application")
def launch_app(app_name: str):
    """Launches a native Windows application by name."""
    engine.shell.run(app_name)
    return f"Successfully launched {app_name}"

# Start the MCP server
engine.serve_mcp()`}</pre>
              </div>

              <div className="mt-12 bg-stitch-tertiary text-white p-6 flex items-start gap-4">
                <Lightbulb className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Pro Tip: Agent Autonomy</h4>
                  <p className="text-sm mt-1 opacity-90 leading-relaxed">
                    Combine WinScript with the MCP SDK to allow your agent to
                    autonomously troubleshoot environment issues by reading system
                    logs and restarting services.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="w-full border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center p-8 gap-4 bg-neutral-100 font-sans text-xs text-neutral-500">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-neutral-900">
                winscript Enterprise
              </span>
              <span>© 2024 Built for high-performance Windows automation.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-neutral-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-neutral-900 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-neutral-900 transition-colors">
                Security
              </a>
              <a href="#" className="hover:text-neutral-900 transition-colors">
                Status
              </a>
            </div>
          </footer>
        </main>
      </div>
    </main>
  );
}
