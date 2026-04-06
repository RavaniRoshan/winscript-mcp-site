"use client";

import StitchNavbar from "@/components/StitchNavbar";
import { CheckCircle, Lock, Eye, List } from "lucide-react";

export default function Architecture() {
  return (
    <main className="min-h-screen bg-white">
      <StitchNavbar />

      <div className="flex pt-12 min-h-screen">
        {/* SideNavBar */}
        <aside className="fixed left-0 top-12 h-[calc(100vh-48px)] w-64 bg-neutral-50 border-r border-neutral-200 flex flex-col py-4 gap-1">
          <div className="px-6 mb-6">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">
              Documentation
            </div>
            <div className="text-[10px] text-neutral-500">v1.2.0-stable</div>
          </div>
          <nav className="flex flex-col gap-1 px-2">
            <a
              href="/docs"
              className="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 text-xs font-medium"
            >
              <span className="material-symbols-outlined text-lg">info</span>
              <span>Introduction</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 text-xs font-medium"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              <span>Installation</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 text-xs font-medium"
            >
              <span className="material-symbols-outlined text-lg">psychology</span>
              <span>Core Concepts</span>
            </a>
            <a
              href="/api"
              className="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 text-xs font-medium"
            >
              <span className="material-symbols-outlined text-lg">alt_route</span>
              <span>MCP Integration</span>
            </a>
            <a
              href="/architecture"
              className="flex items-center gap-3 px-4 py-2 text-blue-600 bg-white font-bold border-l-4 border-blue-600 text-xs font-medium"
            >
              <span className="material-symbols-outlined text-lg">
                settings_system_daydream
              </span>
              <span>Architecture</span>
            </a>
          </nav>
        </aside>

        {/* Main Content Canvas */}
        <main className="ml-64 w-full">
          <div className="max-w-5xl mx-auto p-12">
            {/* Header */}
            <section className="mb-12">
              <div className="text-xs font-bold text-stitch-primary mb-2 uppercase tracking-widest">
                Architecture & Safety
              </div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                Enterprise Automation Framework
              </h1>
              <p className="text-lg text-stitch-on-surface-variant leading-relaxed">
                WinScript bridges the gap between high-level AI reasoning and
                low-level Windows API execution through a secure, structured
                pipeline optimized for the Model Context Protocol (MCP).
              </p>
            </section>

            {/* Execution Pipeline Architecture */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">
                Execution Pipeline Architecture
              </h2>

              {/* Pipeline Flow */}
              <div className="bg-neutral-50 p-12 rounded-none border border-stitch-outline-variant mb-12">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  {/* AI Agent */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-stitch-primary text-white flex items-center justify-center mb-4 rounded-lg">
                      <span className="material-symbols-outlined text-4xl">
                        smart_toy
                      </span>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-sm">AI AGENT</h4>
                      <p className="text-xs text-gray-600 mt-1">Claude / GPT-4</p>
                    </div>
                  </div>

                  <div className="h-1 flex-1 bg-stitch-outline-variant relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <div className="w-0 h-0 border-l-4 border-t-2 border-b-2 border-l-stitch-outline-variant border-t-transparent border-b-transparent"></div>
                    </div>
                  </div>

                  {/* MCP Server */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-600 text-white flex items-center justify-center mb-4 rounded-lg">
                      <span className="material-symbols-outlined text-4xl">
                        settings
                      </span>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-sm">MCP SERVER</h4>
                      <p className="text-xs text-gray-600 mt-1">Protocol Layer</p>
                    </div>
                  </div>

                  <div className="h-1 flex-1 bg-stitch-outline-variant relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <div className="w-0 h-0 border-l-4 border-t-2 border-b-2 border-l-stitch-outline-variant border-t-transparent border-b-transparent"></div>
                    </div>
                  </div>

                  {/* WinScript */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-blue-500 text-white flex items-center justify-center mb-4 rounded-lg">
                      <span className="material-symbols-outlined text-4xl">
                        alt_route
                      </span>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-sm">WINSCRIPT</h4>
                      <p className="text-xs text-gray-600 mt-1">Execution Engine</p>
                    </div>
                  </div>

                  <div className="h-1 flex-1 bg-stitch-outline-variant relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <div className="w-0 h-0 border-l-4 border-t-2 border-b-2 border-l-stitch-outline-variant border-t-transparent border-b-transparent"></div>
                    </div>
                  </div>

                  {/* OS Interface */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-neutral-900 text-white flex items-center justify-center mb-4 rounded-lg">
                      <span className="material-symbols-outlined text-4xl">
                        terminal
                      </span>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-sm">OS INTERFACE</h4>
                      <p className="text-xs text-gray-600 mt-1">Win32/COM/Reg</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Three Pillars */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 border-b-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <h3 className="font-bold text-sm">Sandboxed Execution</h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Commands are validated against a strict allow-list. Protects
                    against unintended system modifications.
                  </p>
                </div>

                <div className="bg-white p-6 border-b-4 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <List className="w-5 h-5 text-green-500" />
                    <h3 className="font-bold text-sm">Audit Logging</h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Every interaction from the MCP request to the Windows API call
                    is captured and audited.
                  </p>
                </div>

                <div className="bg-white p-6 border-b-4 border-orange-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-orange-500" />
                    <h3 className="font-bold text-sm">Protocol State</h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Maintains a discrete session between the Agent and the OS,
                    ensuring reproducibility.
                  </p>
                </div>
              </div>
            </section>

            {/* Visual Feedback Pipeline */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Visual Feedback Pipeline</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-stitch-surface-container p-6">
                  <h3 className="font-bold mb-3">Response Payload Structure</h3>
                  <div className="bg-stitch-on-background p-4 font-mono text-xs text-white leading-relaxed">
                    {`{
  "type": "image",
  "metadata": {
    "resolution": "1440x900",
    "encoding": "jpeg"
  },
  "data": "base64..."
}`}
                  </div>
                </div>

                <div className="bg-neutral-100 p-6">
                  <h3 className="font-bold mb-3">Capture Metadata</h3>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-stitch-primary mt-1">•</span>
                      <span>High-fidelity screen capture with latency tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-stitch-primary mt-1">•</span>
                      <span>Optional privacy redaction layer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-stitch-primary mt-1">•</span>
                      <span>Automatic OCR for text-heavy UIs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Backend Drivers */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Backend Drivers</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-stitch-surface-container text-xs font-bold uppercase tracking-wider">
                      <th className="p-4 border-b border-stitch-outline-variant">
                        Driver Name
                      </th>
                      <th className="p-4 border-b border-stitch-outline-variant">
                        Technology
                      </th>
                      <th className="p-4 border-b border-stitch-outline-variant">
                        Primary Use Case
                      </th>
                      <th className="p-4 border-b border-stitch-outline-variant">
                        Safety Level
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      {
                        name: "AutomationProxy",
                        tech: "pywinAuto",
                        use: "GUI Navigation & Clicks",
                        safety: "HIGH",
                      },
                      {
                        name: "ComponentBridge",
                        tech: "win32com",
                        use: "Office & Legacy Integrations",
                        safety: "MEDIUM",
                      },
                      {
                        name: "ShellExecutor",
                        tech: "subprocess",
                        use: "CLI Tools & File Operations",
                        safety: "CRITICAL",
                      },
                      {
                        name: "InputSynthesizer",
                        tech: "SendInput / API",
                        use: "Raw Keyboard/Mouse Simulation",
                        safety: "HIGH",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={
                          idx % 2 === 0
                            ? "bg-white hover:bg-stitch-surface-container-low"
                            : "bg-stitch-surface-container-low hover:bg-stitch-surface-container"
                        }
                      >
                        <td className="p-4 border-b border-stitch-outline-variant font-mono text-stitch-primary">
                          {row.name}
                        </td>
                        <td className="p-4 border-b border-stitch-outline-variant">
                          {row.tech}
                        </td>
                        <td className="p-4 border-b border-stitch-outline-variant">
                          {row.use}
                        </td>
                        <td className="p-4 border-b border-stitch-outline-variant">
                          <span
                            className={`px-2 py-1 text-[10px] font-bold rounded-none ${
                              row.safety === "CRITICAL"
                                ? "bg-stitch-error text-white"
                                : row.safety === "MEDIUM"
                                ? "bg-yellow-100 text-yellow-900"
                                : "bg-stitch-tertiary text-white"
                            }`}
                          >
                            {row.safety}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="w-full bg-neutral-100 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center p-8 gap-4 font-sans text-xs text-neutral-500">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-neutral-900">
                winscript Enterprise
              </span>
              <span>
                © 2024 Built for high-performance Windows automation.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Security
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Status
              </a>
            </div>
          </footer>
        </main>
      </div>
    </main>
  );
}
