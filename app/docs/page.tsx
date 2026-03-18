import React from "react";
import { Terminal, ShieldAlert, Cpu } from "lucide-react";

export default function DocsPage() {
  return (
    <main className="container mx-auto px-4 lg:flex gap-12 max-w-7xl relative z-10">

      {/* Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 pb-12 sticky top-32 h-fit">
        <h3 className="text-gray-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">Getting Started</h3>
        <ul className="space-y-3 mb-8 text-sm">
          <li><a href="#intro" className="text-cosmic-blue font-bold hover:underline">Introduction</a></li>
          <li><a href="#quickstart" className="text-gray-300 hover:text-white transition-colors">Quickstart</a></li>
          <li><a href="#bot-commands" className="text-gray-300 hover:text-white transition-colors">Bot Commands</a></li>
        </ul>
        <h3 className="text-gray-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">Advanced</h3>
        <ul className="space-y-3 text-sm">
          <li><a href="#custom-rules" className="text-gray-300 hover:text-white transition-colors">Custom .cursorrules</a></li>
          <li><a href="#hallucination" className="text-gray-300 hover:text-white transition-colors">Zero Hallucinations Setup</a></li>
        </ul>
      </aside>

      {/* Content */}
      <article className="flex-1 prose prose-invert prose-blue max-w-4xl">
        <div className="mb-8">
          <span className="px-3 py-1 rounded bg-cosmic-blue/10 text-cosmic-blue text-xs font-mono font-bold border border-cosmic-blue/20">v1.2.0</span>
        </div>

        <h1 className="text-4xl font-extrabold mb-4" id="intro">Documentation</h1>
        <p className="text-xl text-gray-400 mb-12 border-b border-white/10 pb-12">
          Learn how to use the Vibe Prompter Telegram bot to generate highly contextual, zero-hallucination prompts for Cursor and Windsurf.
        </p>

        <section id="quickstart" className="mb-16">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
            <Cpu className="w-6 h-6 text-cosmic-violet" /> Quickstart
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The easiest way to get started is by messaging our Telegram Bot. You don&apos;t need any complex setup or local installations. Give the bot natural language requirements and configure your tech stack.
          </p>

          <div className="bg-cosmic-dark border border-white/10 rounded-xl p-6 mb-6 shadow-xl">
            <h4 className="font-mono text-sm text-gray-400 mb-4 border-b border-white/5 pb-2">Telegram Interaction Flow</h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-4">
                <span className="text-cosmic-blue w-20">You:</span>
                <span className="text-gray-300">/start</span>
              </div>
              <div className="flex gap-4">
                <span className="text-cosmic-violet w-20">Bot:</span>
                <span className="text-gray-300 border-l border-cosmic-violet pl-3">Welcome to Vibe Prompter. Send me your startup idea!</span>
              </div>
              <div className="flex gap-4">
                <span className="text-cosmic-blue w-20">You:</span>
                <span className="text-gray-300">A habit tracker using Next.js App Router and Supabase.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-cosmic-violet w-20">Bot:</span>
                <span className="text-gray-300 border-l border-cosmic-violet pl-3">Generating elite prompt...<br /><br />Copy this into Cursor: &quot;Act as a Lead...[Prompt]&quot;</span>
              </div>
            </div>
          </div>
        </section>

        <section id="bot-commands" className="mb-16">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
            <Terminal className="w-6 h-6 text-green-400" /> Bot Commands
          </h2>
          <div className="overflow-x-auto border border-white/10 rounded-xl bg-[#050508]">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="bg-cosmic-dark border-b border-white/10 text-gray-400 font-mono">
                <tr>
                  <th className="px-6 py-4">Command</th>
                  <th className="px-6 py-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-cosmic-blue">/start</td>
                  <td className="px-6 py-4">Initializes the bot and starts the guided prompt builder flow.</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-cosmic-blue">/profile</td>
                  <td className="px-6 py-4">Change your profile settings.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-cosmic-blue">/prompt</td>
                  <td className="px-6 py-4">Generates a highly tuned prompt based on your preferences.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="hallucination" className="mb-16">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
            <ShieldAlert className="w-6 h-6 text-red-400" /> Zero Hallucinations Setup
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            AI coding agents like Cursor act radically different depending on the system prompt they receive. If you don&apos;t explicitly forbid hallucinations and enforce atomic design patterns, the AI will default to creating monolithic, hard-to-debug code across massive files.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our Telegram bot automatically patches these behavioral flaws by wrapping your idea in an engineered context. It enforces <code className="bg-white/5 px-2 py-1 rounded text-red-300">Strict Type Checking</code> and <code className="bg-white/5 px-2 py-1 rounded text-red-300">Modular Separations</code> universally across every generated prompt.
          </p>
        </section>

      </article>

    </main>
  );
}
