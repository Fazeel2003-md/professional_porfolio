import React, { useState } from 'react';
import { Database, Cpu, Workflow, Server, Shield, Zap, GitBranch, ArrowRight } from 'lucide-react';

export const ArchitectureSpotlight: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rag' | 'backend'>('rag');

  return (
    <section id="architecture" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-red-500 uppercase font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>04. System Blueprint</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              ARCHITECTURE & PRODUCTION BLUEPRINTS.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              Under-the-hood engineering frameworks powering enterprise RAG, agent loops, and asynchronous Python backends.
            </p>
          </div>

          {/* Blueprint Selector */}
          <div className="flex p-1.5 bg-[#0C0C12] rounded-xl border border-white/5 w-fit">
            <button
              onClick={() => setActiveTab('rag')}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'rag'
                  ? 'bg-red-600 text-white shadow-md shadow-red-900/40'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Generative AI & RAG Stack
            </button>
            <button
              onClick={() => setActiveTab('backend')}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'backend'
                  ? 'bg-red-600 text-white shadow-md shadow-red-900/40'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Backend & Microservices
            </button>
          </div>
        </div>

        {/* Dynamic Architecture Display */}
        {activeTab === 'rag' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visual Pipeline Flow (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-[#0D0D14] border border-red-500/20 p-8 space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-red-500 uppercase font-semibold">Multi-Stage RAG Pipeline</span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  Sub-120ms Non-Hallucinating Retrieval Loop
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 leading-relaxed">
                  Enterprise documents require more than naively chunking and dumping into a vector DB. Fazeel's multi-stage approach ensures deterministic accuracy:
                </p>
              </div>

              {/* Step by Step Architecture Pipeline */}
              <div className="space-y-3 font-mono text-xs">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Document Ingestion & Semantic Chunking</h4>
                    <p className="text-zinc-400 text-[11px] mt-0.5">
                      Recursive text splitters with table preserving token boundaries. Embeddings generated via HuggingFace Sentence-Transformers.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">ChromaDB Persistent Vector Store + HNSW</h4>
                    <p className="text-zinc-400 text-[11px] mt-0.5">
                      Tuned Hierarchical Navigable Small World (HNSW) index parameters achieving cosine nearest-neighbor search in under 45ms.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Cross-Encoder Re-Ranking & Lexical Fusion</h4>
                    <p className="text-zinc-400 text-[11px] mt-0.5">
                      Hybrid BM25 sparse scores combined with dense vector cosine similarity via Reciprocal Rank Fusion to surface highest-precision chunks.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Dual Inference: Groq LPU + Local Ollama</h4>
                    <p className="text-zinc-400 text-[11px] mt-0.5">
                      Dynamic routing between high-throughput cloud LPUs (Groq Llama-3.3-70B) and quantized on-premise local Ollama weights for complete data privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Invariants & Benchmarks (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-2xl bg-[#0D0D14] border border-white/5 space-y-4">
                <span className="text-xs font-mono text-zinc-400 uppercase font-semibold">RAG Performance Invariants</span>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-zinc-400">Mean Vector Search:</span>
                    <span className="text-white font-bold tabular-nums">42ms</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-zinc-400">End-to-End Generation:</span>
                    <span className="text-white font-bold tabular-nums">112ms</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-zinc-400">Context Faithfulness:</span>
                    <span className="text-emerald-400 font-bold tabular-nums">99.4%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-zinc-400">Hallucination Rejection:</span>
                    <span className="text-red-400 font-bold tabular-nums">Enforced</span>
                  </div>
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-gradient-to-br from-red-950/20 to-[#0D0D14] border border-red-500/20 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase">
                  <Shield className="w-4 h-4" />
                  <span>Attribution Guardrails</span>
                </div>
                <h4 className="text-base font-bold text-white font-display">
                  Strict Evidence Traceability
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  Every synthesized token must be backed by a cited document UUID, page number, and bounding box coordinate. If context is missing, the model gracefully abstains rather than inventing hallucinated facts.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Backend Stack Flow (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-[#0D0D14] border border-red-500/20 p-8 space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-red-500 uppercase font-semibold">Production Backend Architecture</span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  Asynchronous FastAPI & PostgreSQL Core
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 leading-relaxed">
                  High-throughput, non-blocking APIs designed for concurrent machine learning workloads, background inference queues, and relational data integrity:
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold shrink-0">
                    A
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">FastAPI Async Microservices</h4>
                    <p className="text-zinc-400 text-[11px] mt-0.5">
                      Pydantic v2 strict data validation schemas, OpenAPI auto-generated documentation, and background worker queues for decoupled model execution.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold shrink-0">
                    B
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">PostgreSQL & SQLAlchemy Async Engine</h4>
                    <p className="text-zinc-400 text-[11px] mt-0.5">
                      Async connection pooling, Alembic migration version control, pgvector indexing for hybrid SQL + vector queries.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold shrink-0">
                    C
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Docker Multi-Stage Containerization</h4>
                    <p className="text-zinc-400 text-[11px] mt-0.5">
                      Optimized slim container images reducing image sizes from 2GB down to 180MB, non-root user execution, and pinned dependency hashes.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold shrink-0">
                    D
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">n8n Workflow Automation Nodes</h4>
                    <p className="text-zinc-400 text-[11px] mt-0.5">
                      Reliable event-driven webhooks, scheduled background scraping tasks, and cross-platform notification pipelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Key Metrics (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-2xl bg-[#0D0D14] border border-white/5 space-y-4">
                <span className="text-xs font-mono text-zinc-400 uppercase font-semibold">Backend Invariants</span>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-zinc-400">Endpoint Response P95:</span>
                    <span className="text-white font-bold tabular-nums">28ms</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-zinc-400">Validation Failures:</span>
                    <span className="text-emerald-400 font-bold tabular-nums">0% (Pydantic)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-zinc-400">Async Concurrency:</span>
                    <span className="text-white font-bold tabular-nums">1,200 req/sec</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-zinc-400">Docker Cold Start:</span>
                    <span className="text-red-400 font-bold tabular-nums">&lt;1.8s</span>
                  </div>
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-gradient-to-br from-red-950/20 to-[#0D0D14] border border-red-500/20 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase">
                  <Zap className="w-4 h-4" />
                  <span>Production Ready</span>
                </div>
                <h4 className="text-base font-bold text-white font-display">
                  Strict Type Safety & Schemas
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  Zero untyped Python code. Fully checked with Mypy, Ruff, and PyTest suites ensuring models and APIs operate with deterministic resilience.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
