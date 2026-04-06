"use client";

import StitchNavbar from "@/components/StitchNavbar";
import { AlertCircle, Lock } from "lucide-react";

export default function APIReference() {
  return (
    <main className="min-h-screen bg-white">
      <StitchNavbar />

      <div className="flex pt-12">
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
              className="flex items-center gap-3 px-4 py-2 text-blue-600 bg-white font-bold border-l-4 border-blue-600 text-xs font-medium"
            >
              <span className="material-symbols-outlined text-lg">alt_route</span>
              <span>MCP Integration</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 text-xs font-medium"
            >
              <span className="material-symbols-outlined text-lg">
                settings_system_daydream
              </span>
              <span>Automation Reference</span>
            </a>
          </nav>
        </aside>

        {/* Main Content Canvas */}
        <main className="ml-64 pt-12 min-h-screen">
          <div className="max-w-5xl mx-auto p-12">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-stitch-secondary mb-8">
              <span>Docs</span>
              <span>›</span>
              <span className="text-neutral-900">API Reference</span>
            </div>

            <section className="mb-16">
              <h1 className="text-4xl font-light text-neutral-900 mb-4 tracking-tight">
                API Reference
              </h1>
              <p className="text-lg text-stitch-on-surface-variant max-w-2xl leading-relaxed">
                A comprehensive guide to the WinScript system primitives,
                permission models, and error handling protocols for enterprise
                automation.
              </p>
            </section>

            {/* API Primitives Table Section */}
            <section className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-stitch-primary">
                  layers
                </span>
                <h2 className="text-xl font-semibold tracking-tight">
                  System Primitives
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-stitch-surface-container-low text-xs font-bold uppercase tracking-wider text-neutral-900">
                      <th className="p-4 border-b border-stitch-outline-variant">
                        Primitive
                      </th>
                      <th className="p-4 border-b border-stitch-outline-variant">
                        Namespace
                      </th>
                      <th className="p-4 border-b border-stitch-outline-variant">
                        Description
                      </th>
                      <th className="p-4 border-b border-stitch-outline-variant">
                        Latency Class
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="bg-white hover:bg-stitch-surface-container-low">
                      <td className="p-4 border-b border-stitch-outline-variant font-mono text-stitch-primary">
                        App IPC
                      </td>
                      <td className="p-4 border-b border-stitch-outline-variant text-stitch-secondary">
                        winscript.ipc.*
                      </td>
                      <td className="p-4 border-b border-stitch-outline-variant">
                        Low-level inter-process communication for Windows native
                        applications.
                      </td>
                      <td className="p-4 border-b border-stitch-outline-variant">
                        <span className="px-2 py-0.5 bg-stitch-tertiary text-white text-[10px] font-bold">
                          REAL-TIME
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-stitch-surface-container-low hover:bg-stitch-surface-container">
                      <td className="p-4 border-b border-stitch-outline-variant font-mono text-stitch-primary">
                        UI Access
                      </td>
                      <td className="p-4 border-b border-stitch-outline-variant text-stitch-secondary">
                        winscript.ui.anchor.*
                      </td>
                      <td className="p-4 border-b border-stitch-outline-variant">
                        Access to accessibility trees, window handles, and visual
                        element querying.
                      </td>
                      <td className="p-4 border-b border-stitch-outline-variant">
                        <span className="px-2 py-0.5 bg-stitch-secondary-container text-stitch-on-secondary-container text-[10px] font-bold">
                          ASYNC
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-stitch-surface-container-low">
                      <td className="p-4 border-b border-stitch-outline-variant font-mono text-stitch-primary">
                        Scripting
                      </td>
                      <td className="p-4 border-b border-stitch-outline-variant text-stitch-secondary">
                        winscript.core.eval.*
                      </td>
                      <td className="p-4 border-b border-stitch-outline-variant">
                        Dynamic execution of automation logic with V8-powered
                        runtime isolation.
                      </td>
                      <td className="p-4 border-b border-stitch-outline-variant">
                        <span className="px-2 py-0.5 bg-stitch-secondary-container text-stitch-on-secondary-container text-[10px] font-bold">
                          ASYNC
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Bento Layout for Concepts */}
            <div className="grid grid-cols-12 gap-6 mb-16">
              {/* Permission Model */}
              <div className="col-span-12 lg:col-span-7 bg-stitch-surface-container p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-xs font-bold text-stitch-primary mb-2 uppercase tracking-widest">
                      Security Architecture
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Open by Default Model
                    </h3>
                  </div>
                  <Lock className="w-8 h-8 text-stitch-primary opacity-20" />
                </div>
                <p className="text-sm text-stitch-on-surface-variant leading-relaxed mb-6">
                  WinScript utilizes an 'Open by default' permission model within
                  the defined automation workspace. Unlike restrictive sandboxes,
                  this model assumes the script has primary visual access to any
                  application context registered in the{" "}
                  <code className="bg-white px-1">manifest.json</code>.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 border-l-4 border-stitch-tertiary">
                    <div className="text-xs font-bold mb-1">Implicit Trust</div>
                    <div className="text-[11px] text-stitch-secondary">
                      Standard operations bypass UAC prompts.
                    </div>
                  </div>
                  <div className="bg-white p-4 border-l-4 border-stitch-primary">
                    <div className="text-xs font-bold mb-1">Scope Bound</div>
                    <div className="text-[11px] text-stitch-secondary">
                      Locked to the active user session.
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Handling */}
              <div className="col-span-12 lg:col-span-5 bg-stitch-error bg-opacity-10 p-8 border border-stitch-error border-opacity-20">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-5 h-5 text-stitch-error" />
                  <h3 className="text-xl font-bold text-stitch-error">
                    Error Handling
                  </h3>
                </div>
                <h4 className="text-sm font-mono font-bold mb-3 text-stitch-error">
                  WinScriptMaxRetriesError
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed mb-6">
                  This critical exception is thrown when a system primitive fails
                  to stabilize after the default (5) or custom retry limit. It
                  signifies an unrecoverable UI state or a blocked IPC channel.
                </p>
                <div className="bg-stitch-on-background p-4 text-white font-mono text-[11px] leading-relaxed">
                  <pre>{`try {
  await app.launch();
} catch (e) {
  if (e instanceof WinScriptMaxRetriesError) {
    // Implement fail-over logic
    console.error("Critical Failure");
  }
}`}</pre>
                </div>
              </div>
            </div>

            {/* Detailed Technical Breakdown */}
            <section className="border-t border-stitch-outline-variant pt-12">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                  <h3 className="text-lg font-semibold mb-4">
                    Implementation Strategy
                  </h3>
                  <p className="text-sm text-stitch-secondary leading-relaxed">
                    When designing automation workflows, always prioritize IPC
                    over UI Access primitives to ensure maximum stability and
                    minimum visual interference.
                  </p>
                  <div className="mt-6 w-full h-48 bg-neutral-200 rounded-none"></div>
                </div>
                <div className="md:w-2/3 space-y-8">
                  <div>
                    <h4 className="text-sm font-bold mb-2">
                      1. Requesting Handles
                    </h4>
                    <p className="text-sm text-stitch-on-surface-variant leading-relaxed">
                      Use the <code className="font-mono text-stitch-primary">
                        getHandle()
                      </code>{" "}
                      method to acquire a persistent pointer to target windows.
                      In the Open by Default model, these handles remain valid for
                      the duration of the process lifecycle.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2">
                      2. Exception Bubbling
                    </h4>
                    <p className="text-sm text-stitch-on-surface-variant leading-relaxed">
                      The{" "}
                      <code className="font-mono text-stitch-primary">
                        WinScriptMaxRetriesError
                      </code>{" "}
                      bubbles up from the lowest primitive layer. If an IPC call
                      fails, the UI layer will NOT automatically attempt to fall
                      back unless explicitly programmed.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="w-full bg-neutral-100 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center p-8 gap-4 font-sans text-xs text-neutral-500">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-neutral-900">
                winscript Enterprise
              </span>
              <span>© 2024 winscript Enterprise. Built for high-performance Windows automation.</span>
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
