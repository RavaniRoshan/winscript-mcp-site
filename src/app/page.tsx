import Navbar from "@/components/Navbar";
import {
  Monitor,
  Zap,
  Shield,
  Code2,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Bot,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "UI Automation",
    description:
      "Control any Windows application through UI Automation (UIA) - click buttons, fill forms, read text.",
  },
  {
    icon: Code2,
    title: "COM/OLE Support",
    description:
      "Native integration with COM objects for Office automation and other Windows applications.",
  },
  {
    icon: Terminal,
    title: "PowerShell Execution",
    description:
      "Run PowerShell commands directly from your AI agent with full system access.",
  },
  {
    icon: Shield,
    title: "Error Recovery",
    description:
      "Smart error handling with automatic retries and clear error messages for agent self-correction.",
  },
  {
    icon: Zap,
    title: "Fast & Lightweight",
    description:
      "Built with FastMCP for low-latency communication between your AI agent and Windows.",
  },
  {
    icon: Bot,
    title: "Agent-First Design",
    description:
      "Purpose-built for AI agents with structured responses and screenshot capabilities.",
  },
];

const capabilities = [
  "Click buttons, menus, and UI elements",
  "Fill forms and input fields",
  "Read text from any application window",
  "Take screenshots for visual context",
  "Execute PowerShell scripts",
  "Automate Microsoft Office via COM",
  "Launch and manage applications",
  "Handle multi-window workflows",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now Available on GitHub
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6">
              AppleScript for Windows
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                as an MCP Server
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              A Windows-native automation API that gives AI agents the same
              system-level desktop control that AppleScript gives on macOS.
              Exposed through the Model Context Protocol.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/RavaniRoshan/winscript-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
              >
                View on GitHub
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/getting-started"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-50 transition-colors border border-slate-200"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Code Preview */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-sm text-slate-400">
                  claude_config.json
                </span>
              </div>
              <pre className="p-6 text-sm text-slate-300 overflow-x-auto">
                <code>{`{
  "mcpServers": {
    "winscript": {
      "command": "python",
      "args": ["-m", "winscript.server"],
      "env": {
        "WINSCRIPT_PERMISSIONS": "open"
      }
    }
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* The Gap Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The Windows Automation Gap
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              macOS has AppleScript. Windows has 4 fragmented primitives.
              WinScript unifies them into one clean API.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                need: "App IPC",
                primitive: "COM / OLE Automation",
                problem: "Only works well for Office",
              },
              {
                need: "UI element access",
                primitive: "UI Automation (UIA)",
                problem: "Official but verbose",
              },
              {
                need: "Scripting",
                primitive: "PowerShell",
                problem: "Not agent-friendly",
              },
              {
                need: "Python wrappers",
                primitive: "pywinauto, uiautomation",
                problem: "Good primitives, no MCP layer",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="text-sm font-semibold text-blue-600 mb-2">
                  {item.need}
                </div>
                <div className="text-lg font-bold text-slate-900 mb-2">
                  {item.primitive}
                </div>
                <div className="text-sm text-slate-500">{item.problem}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="text-lg font-semibold text-slate-900">
                WinScript is the MCP layer on top of all of them.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Architecture
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple, clean architecture designed for AI agent integration.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <div className="flex flex-col items-center space-y-6">
                <div className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold shadow-lg">
                  AI Agent (Claude / local LLM)
                </div>
                <div className="w-0.5 h-8 bg-slate-300"></div>
                <div className="text-center text-slate-500 text-sm">
                  MCP protocol (stdio)
                </div>
                <div className="w-0.5 h-8 bg-slate-300"></div>
                <div className="px-8 py-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white font-semibold shadow-lg text-center">
                  <div className="text-lg">WinScript MCP Server</div>
                  <div className="text-sm opacity-80 mt-1">
                    winscript/server.py
                  </div>
                  <div className="text-sm opacity-80">FastMCP + Python</div>
                </div>
                <div className="w-0.5 h-8 bg-slate-300"></div>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="px-4 py-3 bg-slate-100 rounded-lg text-slate-700 font-medium">
                    pywinauto
                    <div className="text-xs text-slate-500">UI control</div>
                  </div>
                  <div className="px-4 py-3 bg-slate-100 rounded-lg text-slate-700 font-medium">
                    win32com
                    <div className="text-xs text-slate-500">COM/Office</div>
                  </div>
                  <div className="px-4 py-3 bg-slate-100 rounded-lg text-slate-700 font-medium">
                    subprocess
                    <div className="text-xs text-slate-500">PowerShell</div>
                  </div>
                </div>
                <div className="w-0.5 h-8 bg-slate-300"></div>
                <div className="px-6 py-4 bg-slate-800 rounded-xl text-white font-semibold">
                  Any Windows App / System
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything your AI agent needs to control Windows desktop
              applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                  <feature.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                What Your Agent Can Do
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                WinScript exposes a comprehensive set of tools that let AI
                agents interact with Windows just like a human would.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="h-5 w-5 text-green-400" />
                <span className="text-sm text-slate-400">Agent Output</span>
              </div>
              <pre className="text-sm text-slate-300 overflow-x-auto">
                <code>{`Agent: I'll help you fill out that form.

→ Clicking "File" menu...
→ Selecting "Open"...
→ Typing filename in dialog...
→ Clicking "OK"...

✓ Document opened successfully!`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Windows?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get started with WinScript in minutes. Open by default, no
            complicated setup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/RavaniRoshan/winscript-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Star on GitHub
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/docs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-colors"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-white">WinScript</span>
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <a
                href="https://github.com/RavaniRoshan/winscript-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a href="/docs" className="hover:text-white transition-colors">
                Documentation
              </a>
              <a
                href="/architecture"
                className="hover:text-white transition-colors"
              >
                Architecture
              </a>
            </div>
            <div className="text-slate-500 text-sm">
              Built with FastMCP + Python
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}