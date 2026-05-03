import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Database, 
  Map, 
  Zap, 
  ChevronRight, 
  ArrowRight, 
  Layout, 
  Layers, 
  Workflow, 
  Sparkles,
  ExternalLink,
  Github,
  Linkedin
} from 'lucide-react';

const CASE_STUDIES = [
  {
    id: "capability-model",
    title: "Envizi Capability Model",
    subtitle: "Experience Architecture Library — System Model #1",
    role: "Design Lead",
    date: "May 2026",
    summary: "Re-architecting a fragmented platform into a coherent ESG System of Record. Reframing identity around trust, defensibility, and data durability at enterprise scale.",
    icon: <ShieldCheck className="w-6 h-6" />,
    visualPrompt: "A professional architectural diagram for a software platform. A central 'Canonical Core System' circle at the heart, surrounded by six radial capability domains: System of Record, Scope 3 at Scale, Defensible Outcomes, Performance & Risk, Report & Reuse, and Govern & Scale. Clean, enterprise software design style, blueprint aesthetic, radial structure, professional blue and slate color palette.",
    sections: [
      { heading: "Problem", content: "Envizi's surface area had grown organically over a decade, resulting in overlapping modules, inconsistent mental models, and fragmented workflows. Dashboards were no longer differentiators in an AI-accelerated market." },
      { heading: "Key Decision", content: "Anchor the platform around a single identity: 'ESG System of Record'. This reframing cut through years of ambiguity and established a canonical source of truth." }
    ]
  },
  {
    id: "unified-taxonomy",
    title: "Unified Taxonomy / IA",
    subtitle: "Experience Architecture Library — System Model #2",
    role: "Design Lead",
    date: "April 2026",
    summary: "Unifying information architecture into a single, scalable taxonomy organized by the ESG data lifecycle to reduce cognitive load and support AI orchestration.",
    icon: <Layout className="w-6 h-6" />,
    visualPrompt: "A structured hierarchy diagram showing a software information architecture. Six lifecycle stages: Ingest, Normalize, Calculate, Analyze, Report, Reuse. Action-oriented labels, clean tree-structure visualization, semantic groupings, modern SaaS UI documentation style.",
    sections: [
      { heading: "Problem", content: "Years of incremental additions created a patchwork of legacy patterns and product-specific terminology that made the platform hard to learn and scale." },
      { heading: "Key Decision", content: "Introduce a top-level structure organized by purpose (verbs) rather than product modules, aligning the navigation to the actual user workflow." }
    ]
  },
  {
    id: "data-lifecycle",
    title: "ESG Data Lifecycle Architecture",
    subtitle: "Experience Architecture Library — System Model #3",
    role: "Design Lead",
    date: "2026",
    summary: "A conceptual experience model defining how ESG data flows through the system, establishing foundations for explainability and AI-assisted workflows.",
    icon: <Workflow className="w-6 h-6" />,
    visualPrompt: "A vertical stacked layer diagram showing the flow of data. Six conceptual layers: Ingest, Normalize, Govern, Calculate, Analyze, and Report & Reuse. Each layer has icons representing sub-capabilities like validation, audit trails, and models. Smooth gradient transitions between layers, showing upward data transformation flow.",
    sections: [
      { heading: "Problem", content: "Teams lacked a shared understanding of data flow, leading to confusion about 'sources of truth' and barriers to implementing AI explainability." },
      { heading: "Key Decision", content: "Separate 'calculation logic' from 'reporting outputs' to clarify ownership and where explainability must live for regulatory compliance." }
    ]
  },
  {
    id: "ai-interaction",
    title: "AI-First Interaction Principles",
    subtitle: "Experience Architecture Library — System Model #4",
    role: "Design Lead",
    date: "Spring 2026",
    summary: "Designing explainable, governed, human-centered AI for ESG workflows. AI handles friction; humans handle precision.",
    icon: <Sparkles className="w-6 h-6" />,
    visualPrompt: "A layered interaction model diagram. An 'AI Layer' floats above the 'ESG Data Lifecycle', interpreting state and intent. Traditional UI patterns form a solid foundation below. Four circular nodes highlight governed behaviors: Explain, Suggest, Automate, and Validate. Modern AI tech aesthetic, glowing accents, clean typography.",
    sections: [
      { heading: "Problem", content: "High configuration burdens and cognitive overload for new users. AI offered a path to reduce friction, but only if it could be trusted and overridden." },
      { heading: "Key Decision", content: "AI handles friction (summarization, suggestions); humans handle precision (verification, overrides). AI as a governed interpreter, not a black box." }
    ]
  }
];

const OLDER_WORK = [
  { title: "Design Principles", category: "Design Systems", year: "2023" },
  { title: "Core Experiences", category: "UX Design", year: "2022" },
  { title: "Procedural VFX", category: "Architecture", year: "2021" }
];

const ImageWithLoader = ({ prompt, title }) => {
  return (
    <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group">
      <img src="https://via.placeholder.com/800x450/1e293b/64748b?text=Architecture+Diagram" alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
    </div>
  );
};

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">IH</div>
            <div>
              <h1 className="font-bold text-lg leading-none">Ian Hooper</h1>
              <p className="text-slate-500 text-sm">Design Lead & Experience Architect</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#work" className="hover:text-blue-600 transition-colors">Experience Architecture</a>
            <a href="#older" className="hover:text-blue-600 transition-colors">Older Work</a>
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200">
               <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer" />
               <Github className="w-5 h-5 text-slate-400 hover:text-slate-900 cursor-pointer" />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Portfolio Update 2026
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Experience Architecture <br/>
            <span className="text-slate-300">for the ESG System of Record.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
            I build the conceptual frameworks that turn massive data complexity into coherent, 
            defensible, and AI-ready enterprise systems.
          </p>
        </div>
      </section>

      {/* Main Work Grid */}
      <main id="work" className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 border-b border-slate-800 pb-4">
            <Layers className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-xl">Experience Architecture Library</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {CASE_STUDIES.map((study) => (
              <div key={study.id} className="group cursor-pointer">
                <ImageWithLoader prompt={study.visualPrompt} title={study.title} />
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm tracking-wide uppercase">
                    {study.icon}
                    <span>{study.id.replace('-', ' ')}</span>
                  </div>
                  <h4 className="text-3xl font-bold group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h4>
                  <p className="text-slate-500 font-medium">{study.subtitle}</p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {study.summary}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-6 pt-4">
                    {study.sections.map((s, idx) => (
                      <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-2">{s.heading}</span>
                        <p className="text-sm text-slate-300 leading-relaxed italic">"{s.content}"</p>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-slate-900 font-bold group/btn pt-4">
                    View Full Case Study <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Older Work Section */}
      <section id="older" className="bg-slate-800 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-4">Older Work</h3>
            <p className="text-slate-500">A legacy of design systems and user-centered products from 2021—2024.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OLDER_WORK.map((work, i) => (
              <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
                <span className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4 block">{work.category}</span>
                <h4 className="text-xl font-bold mb-8 group-hover:text-blue-600 transition-colors">{work.title}</h4>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-slate-500">{work.year}</span>
                  <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-800 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-4">Let's build a better system.</h3>
          <p className="text-slate-400 mb-8 italic">Available for architecture consultation and design leadership roles.</p>
          <div className="flex items-center justify-center gap-6">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/10">
              Get in Touch
            </button>
          </div>
          <p className="mt-16 text-slate-500 text-sm">© 2026 Ian Hooper. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}