export interface Project {
  id: string;
  title: string;
  category: 'genai' | 'ml' | 'backend' | 'vision' | 'nlp';
  categoryLabel: string;
  subtitle: string;
  headline: string;
  impactStat: string;
  description: string;
  fullStory: string;
  architecturePoints: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  liveDemoType?: 'rag-sim' | 'price-calc' | 'agent-loop' | 'tumor-scan' | 'resume-parse';
  githubUrl: string;
  demoUrl: string;
}

export interface SkillItem {
  name: string;
  category: 'GenAI & Agents' | 'Machine Learning & DL' | 'Backend & Data' | 'Design & Workflows';
  proficiency: number; // 0-100
  experience: string;
  description: string;
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId: string;
  category: 'AI/ML' | 'Data Science' | 'UI/UX';
  skills: string[];
  summary: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Fazeel",
    title: "AI/ML Engineer & Systems Architect",
    tagline: "AI/ML Engineer & UI/UX Designer",
    bio: "I build intelligent GenAI systems, robust FastAPI backends, and sleek visual interfaces.",
    location: "Hyderabad, India",
    status: "Available for High-Impact Roles & Consulting",
    email: "mdfazeel93@gmail.com",
    github: "https://github.com/Fazeel2003-md",
    linkedin: "https://linkedin.com/in/fazeelullaa",
    xTwitter: "https://x.com/fazeelullaa",
    instagram: "https://instagram.com",
    metrics: [
      { label: "Model Sensitivity", value: "99.2%" },
      { label: "Vector Retrieval Latency", value: "<120ms" },
      { label: "Production AI Pipelines", value: "7+" },
      { label: "End-to-End Stack Ownership", value: "100%" }
    ]
  },

  projects: [
    {
      id: "doc-rag-assistant",
      title: "Document RAG Assistant",
      category: "genai",
      categoryLabel: "Generative AI · RAG",
      subtitle: "Enterprise Vector Knowledge Retrieval & Context Synthesis",
      headline: "Sub-120ms contextual query resolution over dense unstructured corpus with grounded citation verification.",
      impactStat: "99.4% factual grounding with sub-120ms vector query latency",
      description: "Production-grade Retrieval-Augmented Generation system designed for complex multi-format technical documents. Combines ChromaDB vector storage with dense embeddings, hybrid BM25 lexical re-ranking, and high-speed Groq and local Ollama inference to eliminate hallucinations.",
      fullStory: "Standard RAG frequently fails on complex tabular data, multi-column PDFs, and cross-document reasoning. This system implements hierarchical recursive chunking, multi-query expansion via LangChain, cross-encoder re-ranking with Cohere/BGE, and strict attribution checks where every generated sentence cites its exact bounding box and page reference.",
      architecturePoints: [
        "Hierarchical token-aware chunking preserving tables and code blocks",
        "ChromaDB persistent vector store with cosine similarity filtering",
        "Dual-engine inference supporting ultra-low latency Groq (Llama-3.3-70B) and offline Ollama",
        "Hallucination guardrail validating generated claims against source vector embeddings"
      ],
      technologies: ["ChromaDB", "LangChain", "Groq", "Ollama", "Python", "FastAPI", "Transformers", "Docker"],
      metrics: [
        { label: "Retrieval Latency", value: "112ms" },
        { label: "Faithfulness Score", value: "0.96" },
        { label: "Corpus Capacity", value: "100k+ Pages" }
      ],
      liveDemoType: "rag-sim",
      githubUrl: "https://github.com/Fazeel2003-md/document-rag-assistant",
      demoUrl: "#rag-demo"
    },
    {
      id: "agentic-research-system",
      title: "Research & Report Generation Agent",
      category: "genai",
      categoryLabel: "Agentic AI · Multi-Agent",
      subtitle: "Autonomous Multi-Agent Web Synthesis & Executive Dossier Engine",
      headline: "Distributed autonomous reasoning loops generating publication-grade executive intelligence briefs in minutes.",
      impactStat: "Reduced 6 hours of manual research to a 90-second autonomous cycle",
      description: "An agentic AI workflow orchestrating specialized LLM agents for deep research. Uses n8n and Python to orchestrate query decomposition, multi-source web scraping, fact verification, and Markdown/PDF synthesis with zero human intervention.",
      fullStory: "Built to solve the cognitive bottleneck of market and technical due diligence. A Planner Agent breaks high-level research questions into atomic search trajectories; Searcher Agents query live web endpoints; a Critic Agent validates source authority; and an Editor Agent synthesizes citations and executive summaries.",
      architecturePoints: [
        "Stateful agent execution graphs built with Python and n8n webhook nodes",
        "Dynamic tool use: Tavily search, headless web scrapers, and arXiv query APIs",
        "Iterative self-reflection loops filtering out marketing fluff and low-credibility blogs",
        "Automated output generation in structured Markdown, JSON schemas, and formatted PDF"
      ],
      technologies: ["Agentic AI", "Python", "n8n", "LLMs", "Groq", "REST API", "Docker", "Git/GitHub"],
      metrics: [
        { label: "Research Cycle", value: "85s" },
        { label: "Source Cross-Validation", value: "5+ Ref" },
        { label: "Agent Tool Calls", value: "18 / run" }
      ],
      liveDemoType: "agent-loop",
      githubUrl: "https://github.com/Fazeel2003-md/research-agentic-dossier",
      demoUrl: "#agent-demo"
    },
    {
      id: "tumor-detection-cnn",
      title: "Tumor Detection & MRI Segmentation",
      category: "vision",
      categoryLabel: "Deep Learning · Medical AI",
      subtitle: "Convolutional Neural Network for Clinical MRI Neuropathology",
      headline: "Clinical-grade brain tumor detection and segmentation with visual Grad-CAM interpretability for neuro-radiologists.",
      impactStat: "99.2% classification accuracy with 0.985 sensitivity",
      description: "Deep learning computer vision architecture capable of detecting and localizing gliomas, meningiomas, and pituitary tumors from high-resolution T1/T2-weighted brain MRI scans. Features Grad-CAM explainability heatmaps for clinical validation.",
      fullStory: "Trained on multi-institutional public datasets with extensive radiological data augmentations (elastic deformations, intensity shifts). Implemented custom ResNet-50 and EfficientNet backbones with attention gates to isolate subtle early-stage lesions, coupled with visual heatmap overlays to give radiologists immediate confidence in decision boundaries.",
      architecturePoints: [
        "Custom transfer learning pipeline with focal loss to counter severe class imbalance",
        "Grad-CAM (Gradient-weighted Class Activation Mapping) for spatial localization",
        "DICOM and NIfTI medical image preprocessing and skull-stripping routines",
        "Inference pipeline optimized with ONNX Runtime for under 200ms edge execution"
      ],
      technologies: ["PyTorch", "TensorFlow", "Scikit-learn", "Python", "NumPy", "Docker", "REST API"],
      metrics: [
        { label: "Validation Accuracy", value: "99.2%" },
        { label: "Sensitivity", value: "98.5%" },
        { label: "Inference Speed", value: "185ms" }
      ],
      liveDemoType: "tumor-scan",
      githubUrl: "https://github.com/Fazeel2003-md/brain-tumor-detection-dl",
      demoUrl: "#tumor-demo"
    },
    {
      id: "house-price-prediction",
      title: "House Price Prediction Engine",
      category: "ml",
      categoryLabel: "Machine Learning · Ensembles",
      subtitle: "High-Performance Gradient Boosted Valuation Architecture",
      headline: "Ensemble regression combining XGBoost, LightGBM, and Scikit-learn to forecast residential valuations with 94.8% R².",
      impactStat: "32% RMSE reduction over baseline ridge and lasso models",
      description: "Production machine learning system estimating property valuations based on 70+ continuous and categorical features. Incorporates automated feature engineering, spatial proximity geocoding, target encoding, and hyperparameter tuning via Bayesian optimization.",
      fullStory: "Real estate datasets suffer from spatial autocorrelation, missing data, and heavy-tailed distributions. Developed an end-to-end scikit-learn preprocessing pipeline with Yeo-Johnson power transformations, combined stacking of XGBoost and LightGBM models, and SHAP value explainability for each pricing dimension.",
      architecturePoints: [
        "Robust pipeline with automated handling of high-cardinality neighborhood categoricals",
        "Bayesian optimization with 5-fold cross-validation avoiding data leakage",
        "SHAP summary plots integrated into interactive prediction dashboards",
        "Real-time REST API microservice delivering sub-20ms pricing inference"
      ],
      technologies: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "Pandas", "NumPy", "FastAPI"],
      metrics: [
        { label: "R² Score", value: "0.948" },
        { label: "Mean Absolute Error", value: "$4,210" },
        { label: "Inference Latency", value: "18ms" }
      ],
      liveDemoType: "price-calc",
      githubUrl: "https://github.com/Fazeel2003-md/house-price-prediction-ml",
      demoUrl: "#price-demo"
    },
    {
      id: "ai-hotel-menu-recs",
      title: "AI Hotel & Menu Recommendation",
      category: "nlp",
      categoryLabel: "Recommendation Systems · NLP",
      subtitle: "Hybrid Collaborative & Semantic Dietary Matching Engine",
      headline: "Contextual personalization engine matching guest tastes and allergen constraints to culinary menus at scale.",
      impactStat: "3.4x lift in curated menu order conversions and zero allergen incidents",
      description: "Dual-layer recommendation engine coupling vector semantic search over menu ingredient embeddings with matrix factorization for guest behavioral preferences. Powers sub-second dish recommendations based on dietary preferences, taste affinities, and dining history.",
      fullStory: "Developed to bridge the gap between static hotel food menus and modern diner dietary needs (keto, vegan, halal, allergen-sensitive). Embeds ingredient metadata using Sentence-Transformers, calculates cosine affinity against user preference vectors, and queries PostgreSQL with pgvector for real-time menu tailoring.",
      architecturePoints: [
        "FastAPI asynchronous microservice handling high-concurrency diner queries",
        "PostgreSQL and SQLAlchemy with pgvector for low-latency similarity ranking",
        "Hybrid scoring function combining collaborative filtering and semantic vector alignment",
        "Strict allergen exclusion constraint filters operating as non-negotiable hard priors"
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Scikit-learn", "NLP", "Docker"],
      metrics: [
        { label: "Conversion Lift", value: "+340%" },
        { label: "Query Response", value: "45ms" },
        { label: "Allergen Accuracy", value: "100%" }
      ],
      githubUrl: "https://github.com/Fazeel2003-md/hotel-menu-ai-recommender",
      demoUrl: "#hotel-demo"
    },
    {
      id: "intelligent-resume-parser",
      title: "Intelligent Resume Parser & Matcher",
      category: "nlp",
      categoryLabel: "NLP · Information Extraction",
      subtitle: "Transformer-Driven Candidate Profiling & Schema Extraction",
      headline: "Converting raw unformatted resumes into normalized JSON schemas and skill-fit embeddings with 98% entity recall.",
      impactStat: "Over 50,000 applicant profiles parsed with 98% named entity extraction recall",
      description: "High-throughput document extraction pipeline utilizing modern NLP Transformers and structured LLM outputs to parse PDFs/DOCX resumes. Extracts work history, tech stacks, educational credentials, and calculates role similarity scores.",
      fullStory: "Recruiters waste hundreds of hours screening non-standardized resumes. This system uses custom SpaCy pipelines and LLM structured function calling to transform messy PDF layouts into validated Pydantic schemas, feeding into a vector matching layer that ranks candidate suitability against specific job requisitions.",
      architecturePoints: [
        "Dual-pass parsing: regex/OCR structural segmentation followed by LLM schema extraction",
        "Pydantic strict schema validation ensuring clean PostgreSQL insertion",
        "Vectorized candidate competency profiling comparing skills against target JDs",
        "FastAPI batch upload endpoint with asynchronous worker processing"
      ],
      technologies: ["Transformers", "NLP", "LLMs", "Python", "FastAPI", "PostgreSQL", "ChromaDB"],
      metrics: [
        { label: "Entity Recall", value: "98.1%" },
        { label: "Parsing Speed", value: "1.2s / doc" },
        { label: "JSON Schema Validity", value: "99.9%" }
      ],
      liveDemoType: "resume-parse",
      githubUrl: "https://github.com/Fazeel2003-md/intelligent-resume-parser",
      demoUrl: "#resume-demo"
    },
    {
      id: "heart-disease-prediction",
      title: "Heart Disease Diagnostic Classifier",
      category: "ml",
      categoryLabel: "Healthcare ML · Clinical Diagnostics",
      subtitle: "Cardiovascular Risk Stratification with SHAP Attribution",
      headline: "Machine learning diagnostic model achieving 94.6% AUC-ROC with transparent clinical feature attribution.",
      impactStat: "0.946 AUC-ROC validated against multi-cohort cardiology datasets",
      description: "Supervised machine learning model trained on cardiovascular clinical parameters (resting BP, cholesterol, ECG abnormalities, thallium stress test) to predict patient coronary artery disease risk with transparent feature importances.",
      fullStory: "Black-box AI is unacceptable in cardiology. This project prioritizes explainability: every prediction provides a waterfall SHAP decomposition revealing exactly how each biomarker contributed to the elevated risk score, empowering clinicians to verify model reasoning in seconds.",
      architecturePoints: [
        "Ensemble classification comparing Random Forests, LightGBM, and Logistic Regression",
        "Extensive clinical data validation and missing-value imputation strategy",
        "SHAP (SHapley Additive exPlanations) dashboard for patient-specific attribution",
        "FastAPI service containerized with Docker and tested with PyTest"
      ],
      technologies: ["Scikit-learn", "XGBoost", "Pandas", "NumPy", "Python", "FastAPI", "Docker"],
      metrics: [
        { label: "AUC-ROC", value: "0.946" },
        { label: "Precision", value: "93.8%" },
        { label: "Explainability", value: "100% SHAP" }
      ],
      githubUrl: "https://github.com/Fazeel2003-md/heart-disease-prediction-ml",
      demoUrl: "#heart-demo"
    }
  ] as Project[],

  skills: [
    // Generative AI & Agents
    { name: "LLMs & Prompt Engineering", category: "GenAI & Agents", proficiency: 96, experience: "Production", description: "Llama-3, DeepSeek, Claude, GPT-4, fine-tuning, system prompts, structured JSON output", tags: ["Reasoning", "Structured Output", "System Prompts"] },
    { name: "RAG & Vector Retrieval", category: "GenAI & Agents", proficiency: 95, experience: "Production", description: "Multi-stage retrieval, hybrid search, semantic chunking, re-ranking, attribution", tags: ["Vector Search", "Hybrid Retrieval", "Evaluation"] },
    { name: "Agentic AI & Workflows", category: "GenAI & Agents", proficiency: 92, experience: "Production", description: "Autonomous multi-agent loops, tool calling, state machines, self-reflection", tags: ["Multi-Agent", "Tool Calling", "Autonomous Loops"] },
    { name: "ChromaDB", category: "GenAI & Agents", proficiency: 94, experience: "Advanced", description: "Persistent vector collections, HNSW indexing, cosine similarity, metadata filtering", tags: ["Vector DB", "Embeddings", "HNSW"] },
    { name: "Groq", category: "GenAI & Agents", proficiency: 95, experience: "Advanced", description: "Ultra-low-latency LPU inference, high-throughput streaming completions", tags: ["LPU Inference", "Sub-100ms", "Streaming"] },
    { name: "Ollama", category: "GenAI & Agents", proficiency: 93, experience: "Advanced", description: "Local model hosting, quantized GGUF weights, offline privacy-preserving inference", tags: ["Local AI", "Quantization", "Offline Execution"] },
    { name: "Transformers & HuggingFace", category: "GenAI & Agents", proficiency: 90, experience: "Advanced", description: "Sentence-transformers, cross-encoders, tokenizers, BERT & T5 pipelines", tags: ["Embeddings", "Cross-Encoders", "HuggingFace"] },

    // Machine Learning & Deep Learning
    { name: "Python", category: "Machine Learning & DL", proficiency: 98, experience: "Core Expertise", description: "Modern idiomatic Python 3.11+, async IO, type hints, high-performance data processing", tags: ["Language", "Async IO", "Architecture"] },
    { name: "PyTorch", category: "Machine Learning & DL", proficiency: 90, experience: "Advanced", description: "Custom neural network layers, loss functions, CUDA acceleration, transfer learning", tags: ["Deep Learning", "CNNs", "Tensors"] },
    { name: "TensorFlow", category: "Machine Learning & DL", proficiency: 88, experience: "Advanced", description: "Keras pipelines, model export, ONNX cross-compilation, deployment", tags: ["Deep Learning", "Keras", "Model Deployment"] },
    { name: "Scikit-learn", category: "Machine Learning & DL", proficiency: 96, experience: "Core Expertise", description: "Pipelines, ColumnTransformers, ensemble classification, clustering, metrics", tags: ["Classical ML", "Pipelines", "Cross-Validation"] },
    { name: "XGBoost", category: "Machine Learning & DL", proficiency: 95, experience: "Advanced", description: "Gradient boosted trees, bayesian tuning, GPU-accelerated histogram training", tags: ["Ensemble", "Gradient Boosting", "Tabular ML"] },
    { name: "LightGBM", category: "Machine Learning & DL", proficiency: 94, experience: "Advanced", description: "Fast leaf-wise tree growth, categorical feature support, memory-optimized training", tags: ["Gradient Boosting", "High-Throughput", "Tabular"] },
    { name: "NumPy & Pandas", category: "Machine Learning & DL", proficiency: 96, experience: "Core Expertise", description: "Vectorized array calculations, multi-index aggregations, data normalization", tags: ["Data Wrangling", "Vectorization", "ETL"] },
    { name: "NLP & Entity Extraction", category: "Machine Learning & DL", proficiency: 92, experience: "Advanced", description: "Named entity recognition, token classification, dependency parsing, text normalization", tags: ["NER", "Text Mining", "Information Extraction"] },

    // Backend & Systems
    { name: "FastAPI", category: "Backend & Data", proficiency: 96, experience: "Core Expertise", description: "Asynchronous REST endpoints, Pydantic validation, background tasks, OpenAPI specs", tags: ["API Framework", "Async", "Pydantic"] },
    { name: "REST API Design", category: "Backend & Data", proficiency: 95, experience: "Core Expertise", description: "Clean API contract design, rate-limiting, error schemas, idempotent mutations", tags: ["Architecture", "Contracts", "HTTP Specs"] },
    { name: "PostgreSQL", category: "Backend & Data", proficiency: 90, experience: "Advanced", description: "Relational modeling, indexing strategies, jsonb documents, pgvector extensions", tags: ["Relational DB", "pgvector", "ACID"] },
    { name: "SQLAlchemy", category: "Backend & Data", proficiency: 91, experience: "Advanced", description: "Async ORM models, session lifecycle, migrations with Alembic, complex joins", tags: ["ORM", "Async DB", "Alembic"] },
    { name: "Docker", category: "Backend & Data", proficiency: 90, experience: "Advanced", description: "Multi-stage production Dockerfiles, container isolation, compose configurations", tags: ["DevOps", "Containers", "Deployment"] },
    { name: "Git & GitHub", category: "Backend & Data", proficiency: 94, experience: "Core Expertise", description: "Git workflows, branch protection, CI/CD actions, open-source repositories", tags: ["Version Control", "CI/CD", "Collaboration"] },
    { name: "n8n", category: "Backend & Data", proficiency: 91, experience: "Advanced", description: "Low-code workflow automation, webhook routing, multi-system integration bridges", tags: ["Automation", "Webhooks", "Pipelines"] },

    // UI/UX & Design
    { name: "Figma", category: "Design & Workflows", proficiency: 92, experience: "Advanced", description: "Design systems, auto-layout, interactive prototypes, token-based component libraries", tags: ["UI/UX", "Design Systems", "Prototyping"] },
    { name: "Framer", category: "Design & Workflows", proficiency: 88, experience: "Advanced", description: "High-fidelity interactive websites, micro-interactions, responsive publishing", tags: ["Web Design", "Micro-Interactions", "Production Sites"] },
    { name: "Design Systems & Tailwind", category: "Design & Workflows", proficiency: 95, experience: "Core Expertise", description: "Accessible color scales, typography hierarchies, tokenized design systems", tags: ["Tailwind CSS", "Accessibility", "Design Systems"] }
  ] as SkillItem[],

  education: {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "Guru Nanak Institute of Technology (GNIT)",
    graduationYear: "2025",
    focus: "Signal Processing, Embedded Hardware, Data Structures, Applied Mathematics & Neural Computation",
    summary: "Rigorous engineering foundation bridging hardware signals, microprocessors, digital signal processing, and mathematical optimization with modern artificial intelligence."
  },

  certifications: [
    {
      id: "cert-genai",
      title: "Generative AI & LLMs in Production",
      issuer: "DeepLearning.AI",
      year: "2024",
      credentialId: "DLAI-LLM-8921",
      category: "AI/ML",
      skills: ["RAG", "Fine-Tuning", "ChromaDB", "LangChain", "Evaluation"],
      summary: "Specialized certification covering transformer attention mechanisms, RLHF, parameter-efficient fine-tuning (PEFT/LoRA), and enterprise RAG architecture."
    },
    {
      id: "cert-ml-spec",
      title: "Advanced Machine Learning Specialization",
      issuer: "Stanford Online / Coursera",
      year: "2024",
      credentialId: "STAN-AML-4412",
      category: "AI/ML",
      skills: ["Supervised ML", "XGBoost", "Deep Learning", "Anomaly Detection"],
      summary: "Rigorous algorithmic mastery over tree-based ensembles, neural architectures, cost optimization functions, and bias-variance tradeoff diagnostics."
    },
    {
      id: "cert-data-science",
      title: "Applied Data Science with Python",
      issuer: "University of Michigan / Kaggle",
      year: "2023",
      credentialId: "UMICH-ADS-6019",
      category: "Data Science",
      skills: ["Pandas", "NumPy", "Statistical Inference", "Feature Engineering"],
      summary: "Comprehensive training in statistical data manipulation, exploratory data analysis, hypothesis testing, and scalable pipeline development."
    },
    {
      id: "cert-uiux",
      title: "Professional UI/UX & Design Systems",
      issuer: "Interaction Design Foundation",
      year: "2023",
      credentialId: "IXDF-UX-3108",
      category: "UI/UX",
      skills: ["Figma", "Framer", "Information Architecture", "Heuristic Evaluation"],
      summary: "Accredited specialization in human-computer interaction, cognitive load reduction, design system tokens, and accessible responsive web interfaces."
    }
  ] as Certification[]
};
