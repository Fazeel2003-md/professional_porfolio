import React, { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Terminal, Play, Cpu, Sparkles, Layers, Sliders, AlertCircle } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-auto rounded-2xl sm:rounded-3xl bg-[#0F0F16] border border-red-500/30 shadow-2xl shadow-red-950/40 text-white overflow-hidden max-h-[92vh] flex flex-col">
        {/* Top Accent Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-700 shrink-0" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors z-20 cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content Scrollable Area */}
        <div className="p-4 sm:p-10 space-y-6 sm:space-y-8 overflow-y-auto">
          {/* Header Area */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase font-semibold mb-2">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>Case Study & Architecture</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-black/40 border border-white/5">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-[11px] font-mono text-zinc-500 uppercase">{m.label}</span>
                <p className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          {/* Core Problem & Engineering Narrative */}
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-wider font-mono text-zinc-400 font-semibold">
              Engineering Narrative & Architecture
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              {project.fullStory}
            </p>
          </div>

          {/* Interactive Live Simulator Area (Custom per project) */}
          <div className="p-6 rounded-2xl bg-[#08080C] border border-red-500/20 space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400">
                <Terminal className="w-4 h-4" />
                <span>INTERACTIVE LIVE SIMULATION</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">Live Browser Engine</span>
            </div>

            {project.liveDemoType === 'rag-sim' && <RagSimulator />}
            {project.liveDemoType === 'price-calc' && <HousePriceCalculator />}
            {project.liveDemoType === 'agent-loop' && <AgentLoopSimulator />}
            {project.liveDemoType === 'tumor-scan' && <TumorScanSimulator />}
            {project.liveDemoType === 'resume-parse' && <ResumeParseSimulator />}
            {!project.liveDemoType && (
              <div className="py-6 text-center text-xs font-mono text-zinc-400">
                Pipeline containerized and accessible via FastAPI REST microservice endpoints.
              </div>
            )}
          </div>

          {/* Key Architecture Innovations */}
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-wider font-mono text-zinc-400 font-semibold">
              Technical Invariants & Design Principles
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecturePoints.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges (Unboxed typography metadata) */}
          <div>
            <h3 className="text-xs uppercase font-mono text-zinc-500 mb-2">Technologies Used:</h3>
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300 font-mono">
              {project.technologies.map((t, idx) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-[#14141E] border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 1. RAG Assistant Interactive Simulator
const RagSimulator: React.FC = () => {
  const [query, setQuery] = useState('How does Fazeel design vector retrieval to minimize latency?');
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<any | null>(null);

  const sampleQueries = [
    'How does Fazeel design vector retrieval to minimize latency?',
    'What embedding model and vector database does the RAG pipeline use?',
    'How are hallucinations mitigated in technical document QA?'
  ];

  const handleRun = () => {
    setIsRunning(true);
    setResult(null);
    setTimeout(() => {
      setIsRunning(false);
      setResult({
        chunks: [
          { doc: "architecture_spec_v2.md", score: 0.942, text: "Fazeel implements ChromaDB with HNSW index parameter M=32, efConstruction=200 for sub-120ms nearest-neighbor resolution across 100k embedded chunks." },
          { doc: "hybrid_retrieval_pipeline.py", score: 0.915, text: "Reciprocal Rank Fusion (RRF) couples dense sentence-transformers embeddings with sparse BM25 keyword matches, followed by cross-encoder re-ranking." }
        ],
        answer: "Fazeel optimizes retrieval latency by pairing ChromaDB's tuned HNSW indexing with asynchronous FastAPI endpoints and dual-tier inference via Groq's LPU hardware (sub-100ms response) and quantized local Ollama instances.",
        latency: "108ms",
        faithfulness: "99.4%"
      });
    }, 700);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-xs font-mono text-zinc-400">Select or enter query to test RAG retrieval:</label>
        <div className="flex flex-wrap gap-2">
          {sampleQueries.map((q) => (
            <button
              key={q}
              onClick={() => setQuery(q)}
              className="px-2.5 py-1 text-[11px] rounded bg-white/5 hover:bg-white/10 text-zinc-300 font-mono text-left truncate max-w-full"
            >
              "{q.slice(0, 45)}..."
            </button>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-red-500"
          />
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{isRunning ? 'Retrieving...' : 'Execute RAG'}</span>
          </button>
        </div>
      </div>

      {result && (
        <div className="p-4 rounded-xl bg-black/50 border border-red-500/20 space-y-3 font-mono text-xs">
          <div className="flex justify-between items-center text-[11px] text-zinc-400 border-b border-white/5 pb-2">
            <span>Vector Latency: <strong className="text-red-400">{result.latency}</strong></span>
            <span>Grounding Score: <strong className="text-emerald-400">{result.faithfulness}</strong></span>
          </div>

          <div>
            <p className="text-[11px] text-zinc-500 uppercase mb-1">Synthesized Grounded Answer:</p>
            <p className="text-zinc-200 leading-relaxed font-sans">{result.answer}</p>
          </div>

          <div>
            <p className="text-[11px] text-zinc-500 uppercase mb-1">Retrieved Knowledge Chunks:</p>
            <div className="space-y-1.5">
              {result.chunks.map((c: any, i: number) => (
                <div key={i} className="p-2 rounded bg-white/5 text-[11px] text-zinc-300">
                  <span className="text-red-400 font-semibold">[{c.doc} · score: {c.score}]</span> {c.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// 2. House Price Calculator Interactive Simulator
const HousePriceCalculator: React.FC = () => {
  const [sqft, setSqft] = useState(2400);
  const [bedrooms, setBedrooms] = useState(3);
  const [yearBuilt, setYearBuilt] = useState(2018);
  const [tier, setTier] = useState<'Urban Prime' | 'Suburban Growth' | 'Metro Outer'>('Suburban Growth');

  const calculateEstimate = () => {
    const basePrice = 180000;
    const sqftFactor = sqft * 165;
    const bedFactor = bedrooms * 18000;
    const ageFactor = (yearBuilt - 1980) * 1200;
    const tierMultiplier = tier === 'Urban Prime' ? 1.45 : tier === 'Suburban Growth' ? 1.15 : 0.85;

    const total = (basePrice + sqftFactor + bedFactor + ageFactor) * tierMultiplier;
    return Math.round(total / 1000) * 1000;
  };

  const estimate = calculateEstimate();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
        <div>
          <label className="text-zinc-400 flex justify-between">
            <span>Living Area:</span>
            <span className="text-white font-bold">{sqft.toLocaleString()} sq ft</span>
          </label>
          <input
            type="range"
            min="800"
            max="4500"
            step="100"
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            className="w-full mt-2 accent-red-600"
          />
        </div>

        <div>
          <label className="text-zinc-400 flex justify-between">
            <span>Bedrooms:</span>
            <span className="text-white font-bold">{bedrooms} Beds</span>
          </label>
          <input
            type="range"
            min="1"
            max="6"
            value={bedrooms}
            onChange={(e) => setBedrooms(Number(e.target.value))}
            className="w-full mt-2 accent-red-600"
          />
        </div>

        <div>
          <label className="text-zinc-400 flex justify-between">
            <span>Year Built:</span>
            <span className="text-white font-bold">{yearBuilt}</span>
          </label>
          <input
            type="range"
            min="1970"
            max="2025"
            value={yearBuilt}
            onChange={(e) => setYearBuilt(Number(e.target.value))}
            className="w-full mt-2 accent-red-600"
          />
        </div>

        <div>
          <label className="text-zinc-400 block mb-2">Location Zone Tier:</label>
          <div className="flex gap-1.5">
            {(['Urban Prime', 'Suburban Growth', 'Metro Outer'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`flex-1 py-1.5 px-2 rounded text-[11px] transition-colors ${
                  tier === t ? 'bg-red-600 text-white font-bold' : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                {t.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-black/60 border border-red-500/20 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono text-zinc-400 uppercase">XGBoost Ensemble Predicted Valuation</span>
          <p className="font-display text-2xl font-extrabold text-white mt-0.5">
            ${estimate.toLocaleString()}
          </p>
          <p className="text-[11px] text-emerald-400 font-mono mt-0.5">
            Confidence Interval: 95% (±3.2% error tolerance)
          </p>
        </div>
        <div className="text-right text-[11px] font-mono text-zinc-500">
          <p>Model R²: 0.948</p>
          <p>SHAP Feature Importances: Area &gt; Neighborhood &gt; Age</p>
        </div>
      </div>
    </div>
  );
};

// 3. Agent Loop Simulator
const AgentLoopSimulator: React.FC = () => {
  const [status, setStatus] = useState<string>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const runAgent = () => {
    setStatus('running');
    setLogs([]);
    const sequence = [
      "Planner Agent: Decomposing target query into 3 semantic sub-trajectories...",
      "Searcher Agent: Querying Tavily & arXiv endpoints (retrieved 14 primary papers)...",
      "Critic Agent: Cross-referencing citations & filtering low-confidence sources...",
      "Editor Agent: Synthesizing executive intelligence dossier in structured Markdown...",
      "System: Dossier compiled in 84ms with 6 verified institutional references."
    ];

    sequence.forEach((msg, i) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, msg]);
        if (i === sequence.length - 1) setStatus('done');
      }, (i + 1) * 450);
    });
  };

  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-zinc-400">Autonomous Orchestration Graph (n8n + Python)</span>
        <button
          onClick={runAgent}
          disabled={status === 'running'}
          className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5" />
          <span>{status === 'running' ? 'Agents Active...' : 'Simulate Agent Fleet'}</span>
        </button>
      </div>

      <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 min-h-[140px] space-y-1.5 text-zinc-300">
        {logs.length === 0 ? (
          <p className="text-zinc-600 italic">Click 'Simulate Agent Fleet' to trigger autonomous multi-agent execution loop...</p>
        ) : (
          logs.map((log, idx) => (
            <p key={idx} className={idx === logs.length - 1 ? 'text-emerald-400 font-semibold' : 'text-zinc-300'}>
              &gt; {log}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

// 4. Tumor Scan Simulator
const TumorScanSimulator: React.FC = () => {
  const [view, setView] = useState<'raw' | 'heatmap' | 'overlay'>('heatmap');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-zinc-400">Brain MRI T1-Weighted Contrast Segmentation</span>
        <div className="flex gap-1.5">
          {(['raw', 'heatmap', 'overlay'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setView(mode)}
              className={`px-3 py-1 rounded text-[11px] font-mono capitalize transition-colors ${
                view === mode ? 'bg-red-600 text-white font-bold' : 'bg-white/5 text-zinc-400 hover:text-white'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div className="relative aspect-video rounded-xl bg-[#050508] border border-white/10 flex items-center justify-center overflow-hidden">
        {/* Synthetic MRI visual representation */}
        <div className="w-48 h-48 rounded-full border-2 border-zinc-700/60 relative flex items-center justify-center bg-zinc-900/40">
          <div className="w-36 h-36 rounded-full border border-zinc-800 flex items-center justify-center">
            {/* Brain Hemisphere separator */}
            <div className="w-0.5 h-full bg-zinc-800" />
          </div>

          {/* Lesion location */}
          <div
            className={`absolute top-10 right-10 w-12 h-12 rounded-full transition-all duration-500 flex items-center justify-center ${
              view === 'raw'
                ? 'bg-zinc-600/60 border border-zinc-400'
                : view === 'heatmap'
                ? 'bg-gradient-to-tr from-yellow-500 via-red-600 to-rose-700 blur-sm opacity-90'
                : 'border-2 border-red-500 bg-red-600/30'
            }`}
          >
            {view === 'overlay' && (
              <span className="text-[9px] font-mono text-white font-bold">ROI: 99.2%</span>
            )}
          </div>
        </div>

        {/* Diagnostic HUD Overlay */}
        <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-black/80 backdrop-blur-sm border border-white/5 flex justify-between items-center text-[11px] font-mono">
          <span className="text-zinc-300">Finding: <strong className="text-red-400">Glioma Lesion (Parietal Lobe)</strong></span>
          <span className="text-emerald-400 font-bold">Accuracy: 99.2% (p &lt; 0.001)</span>
        </div>
      </div>
    </div>
  );
};

// 5. Resume Parse Simulator
const ResumeParseSimulator: React.FC = () => {
  const [parsed, setParsed] = useState(false);

  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-zinc-400">Unstructured Document NLP Entity Extraction</span>
        <button
          onClick={() => setParsed(!parsed)}
          className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition-colors"
        >
          {parsed ? 'Reset Stream' : 'Extract Pydantic Schema'}
        </button>
      </div>

      <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 text-[11px] text-zinc-300 overflow-x-auto">
        {!parsed ? (
          <p className="text-zinc-500 font-sans">
            "Senior AI Engineer with 3+ years architecting RAG pipelines using ChromaDB, FastAPI, and PyTorch. Deployed models handling 10k daily requests with 99.4% accuracy..."
          </p>
        ) : (
          <pre className="text-emerald-400">
{`{
  "candidate_name": "Fazeel",
  "domain_role": "AI/ML Engineer & Systems Architect",
  "years_experience": 3.5,
  "skills": ["ChromaDB", "FastAPI", "PyTorch", "RAG", "LLMs"],
  "semantic_job_fit_score": 0.982,
  "validation_status": "Pydantic_Schema_Valid"
}`}
          </pre>
        )}
      </div>
    </div>
  );
};
