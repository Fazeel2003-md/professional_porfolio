import React from 'react';

export const Skills: React.FC = () => {
  // SVG Canvas dimensions
  const size = 900;
  const cx = 450;
  const cy = 450;

  // Concentric circle radii
  const rInner = 145;
  const rMiddle = 255;
  const rOuter = 365;

  return (
    <section id="skills" className="scroll-mt-20 pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-24 border-t border-white/5 relative overflow-hidden bg-[#060608]">
      {/* Background ambient lighting matching the neon diagram */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center">

        {/* Neon AI Skills Ecosystem Diagram */}
        <div className="w-full max-w-[650px] md:max-w-[690px] lg:max-w-[720px] aspect-square relative select-none -mt-4 sm:-mt-8 lg:-mt-10">
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="w-full h-full skills-ecosystem-svg"
            style={{ filter: 'drop-shadow(0 0 25px rgba(255, 31, 72, 0.15))' }}
          >
            <defs>
              {/* Neon Glow Filter */}
              <filter id="neon-glow" x="-60%" y="-60%" width="220%" height="220%">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#FF1F48" floodOpacity="0.8" />
                <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#FF1F48" floodOpacity="0.4" />
              </filter>

              {/* Ring Line Glow */}
              <filter id="ring-glow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#FF1F48" floodOpacity="0.9" />
              </filter>

              {/* Arrow Marker */}
              <marker
                id="neon-arrow"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#FF1F48" filter="url(#ring-glow)" />
              </marker>

              {/* Center Circle Gradient */}
              <radialGradient id="centerRadial" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1B050B" />
                <stop offset="85%" stopColor="#0B0306" />
                <stop offset="100%" stopColor="#050103" />
              </radialGradient>
            </defs>

            {/* 3 Concentric Orbital Neon Rings */}
            <circle
              cx={cx}
              cy={cy}
              r={rInner}
              fill="none"
              stroke="#FF1F48"
              strokeWidth="2.5"
              filter="url(#ring-glow)"
              opacity="0.95"
            />
            <circle
              cx={cx}
              cy={cy}
              r={rMiddle}
              fill="none"
              stroke="#FF1F48"
              strokeWidth="2.5"
              filter="url(#ring-glow)"
              opacity="0.95"
            />
            <circle
              cx={cx}
              cy={cy}
              r={rOuter}
              fill="none"
              stroke="#FF1F48"
              strokeWidth="2.5"
              filter="url(#ring-glow)"
              opacity="0.95"
            />

            {/* Central Glowing Skills Hub */}
            <g filter="url(#neon-glow)">
              <circle
                cx={cx}
                cy={cy}
                r={72}
                fill="url(#centerRadial)"
                stroke="#FF1F48"
                strokeWidth="3.5"
              />
              {/* </> Code Symbol */}
              <text
                x={cx}
                y={cy - 12}
                textAnchor="middle"
                fill="#FF3B56"
                fontSize="18"
                fontWeight="800"
                fontFamily="monospace"
              >
                &lt;/&gt;
              </text>
              {/* Skills Text with gradient/duo color */}
              <text
                x={cx}
                y={cy + 26}
                textAnchor="middle"
                fontSize="34"
                fontWeight="800"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                letterSpacing="-0.5px"
              >
                <tspan fill="#FFFFFF">Sk</tspan>
                <tspan fill="#FF1F48">ills</tspan>
              </text>
            </g>

            {/* Inner Ring Badges */}
            <g className="orbit-track-inner" style={{ transformOrigin: '450px 450px', transformBox: 'view-box' }}>
              {/* 1. NumPy */}
              <g transform={`translate(${cx}, ${cy - 145})`}>
                <g className="orbit-counter-inner skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-56" y="-20" width="112" height="40" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* 3D Cube Icon */}
                  <g transform="translate(-40, -10)" stroke="#FF1F48" strokeWidth="2" fill="none">
                    <path d="M10 2L18 6V14L10 18L2 14V6L10 2Z" />
                    <path d="M10 2V18" />
                    <path d="M2 6L10 10L18 6" />
                  </g>
                  <text x="10" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    NumPy
                  </text>
                </g>
              </g>

              {/* 2. Python */}
              <g transform={`translate(${cx + 145 * Math.cos(-Math.PI / 6)}, ${cy + 145 * Math.sin(-Math.PI / 6)})`}>
                <g className="orbit-counter-inner skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-56" y="-20" width="112" height="40" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Python Double Snake Logo */}
                  <g transform="translate(-42, -9)" fill="#FF1F48">
                    <path d="M9 1C5.1 1 5.3 2.7 5.3 2.7L5.3 4.4L9.1 4.4L9.1 4.9L3.7 4.9C3.7 4.9 1 4.6 1 8.5C1 12.4 3.4 12.2 3.4 12.2L4.8 12.2L4.8 10.2C4.8 7.9 6.8 7.9 6.8 7.9L10.6 7.9C10.6 7.9 12.5 7.9 12.5 6.1L12.5 2.8C12.5 2.8 12.9 1 9 1ZM7.3 2.3C7.8 2.3 8.2 2.7 8.2 3.2C8.2 3.7 7.8 4.1 7.3 4.1C6.8 4.1 6.4 3.7 6.4 3.2C6.4 2.7 6.8 2.3 7.3 2.3Z" />
                    <path d="M10.9 16.9C14.8 16.9 14.6 15.2 14.6 15.2L14.6 13.5L10.8 13.5L10.8 13L16.2 13C16.2 13 18.9 13.3 18.9 9.4C18.9 5.5 16.5 5.7 16.5 5.7L15.1 5.7L15.1 7.7C15.1 10 13.1 10 13.1 10L9.3 10C9.3 10 7.4 10 7.4 11.8L7.4 15.1C7.4 15.1 7 16.9 10.9 16.9ZM12.6 15.6C12.1 15.6 11.7 15.2 11.7 14.7C11.7 14.2 12.1 13.8 12.6 13.8C13.1 13.8 13.5 14.2 13.5 14.7C13.5 15.2 13.1 15.6 12.6 15.6Z" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    Python
                  </text>
                </g>
              </g>

              {/* 3. Matplotlib */}
              <g transform={`translate(${cx + 145 * Math.cos(Math.PI / 6)}, ${cy + 145 * Math.sin(Math.PI / 6)})`}>
                <g className="orbit-counter-inner skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-65" y="-20" width="130" height="40" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Line Chart Icon */}
                  <g transform="translate(-52, -9)" stroke="#FF1F48" strokeWidth="2" fill="none" strokeLinecap="round">
                    <path d="M2 14L7 9L11 12L17 4" />
                    <path d="M2 17H18" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    Matplotlib
                  </text>
                </g>
              </g>

              {/* 4. Pandas */}
              <g transform={`translate(${cx}, ${cy + 145})`}>
                <g className="orbit-counter-inner skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-56" y="-20" width="112" height="40" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Bar Chart Icon */}
                  <g transform="translate(-42, -9)" fill="#FF1F48">
                    <rect x="2" y="10" width="3.5" height="7" rx="1" />
                    <rect x="7.5" y="4" width="3.5" height="13" rx="1" />
                    <rect x="13" y="7" width="3.5" height="10" rx="1" />
                  </g>
                  <text x="10" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    Pandas
                  </text>
                </g>
              </g>

              {/* 5. NLP */}
              <g transform={`translate(${cx - 145 * Math.cos(Math.PI / 6)}, ${cy + 145 * Math.sin(Math.PI / 6)})`}>
                <g className="orbit-counter-inner skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-50" y="-20" width="100" height="40" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Speech bubble icon */}
                  <g transform="translate(-38, -9)" stroke="#FF1F48" strokeWidth="2" fill="none">
                    <path d="M16 10C16 14 12 16 8 16L3 18L4.5 13.5C2.5 11.5 2 9 3 6C4.5 3 8 2 11 3C14 4 16 7 16 10Z" />
                    <circle cx="7" cy="9.5" r="0.8" fill="#FF1F48" />
                    <circle cx="9.5" cy="9.5" r="0.8" fill="#FF1F48" />
                    <circle cx="12" cy="9.5" r="0.8" fill="#FF1F48" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    NLP
                  </text>
                </g>
              </g>

              {/* 6. Seaborn */}
              <g transform={`translate(${cx - 145 * Math.cos(-Math.PI / 6)}, ${cy + 145 * Math.sin(-Math.PI / 6)})`}>
                <g className="orbit-counter-inner skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-56" y="-20" width="112" height="40" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Pulse waveform icon */}
                  <g transform="translate(-44, -9)" stroke="#FF1F48" strokeWidth="2" fill="none" strokeLinecap="round">
                    <path d="M2 10H5L8 4L11 16L14 8L16 10H18" />
                  </g>
                  <text x="10" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    Seaborn
                  </text>
                </g>
              </g>
            </g>

            {/* Middle Ring Badges */}
            <g className="orbit-track-middle" style={{ transformOrigin: '450px 450px', transformBox: 'view-box' }}>
              {/* 7. LangChain */}
              <g transform={`translate(${cx}, ${cy - 255})`}>
                <g className="orbit-counter-middle skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-66" y="-20" width="132" height="40" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Chain Links */}
                  <g transform="translate(-52, -9)" stroke="#FF1F48" strokeWidth="2" fill="none">
                    <path d="M8 12L12 8" />
                    <path d="M10 6L12.5 3.5C14 2 16.5 2 18 3.5C19.5 5 19.5 7.5 18 9L15.5 11.5" />
                    <path d="M9 13.5L6.5 16C5 17.5 2.5 17.5 1 16C-0.5 14.5 -0.5 12 1 10.5L3.5 8" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    LangChain
                  </text>
                </g>
              </g>

              {/* 8. MCP */}
              <g transform={`translate(${cx + 255 * Math.cos(-Math.PI / 5)}, ${cy + 255 * Math.sin(-Math.PI / 5)})`}>
                <g className="orbit-counter-middle skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-50" y="-19" width="100" height="38" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  <g transform="translate(-36, -9)" stroke="#FF1F48" strokeWidth="2" fill="none">
                    <path d="M9 2L16 6V13L9 17L2 13V6L9 2Z" />
                    <path d="M9 2V17" />
                    <path d="M2 6L9 9.5L16 6" />
                  </g>
                  <text x="10" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    MCP
                  </text>
                </g>
              </g>

              {/* 9. Agentic AI */}
              <g transform={`translate(${cx + 255 * Math.cos(Math.PI / 18)}, ${cy + 255 * Math.sin(Math.PI / 18)})`}>
                <g className="orbit-counter-middle skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-65" y="-20" width="130" height="40" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Bot icon */}
                  <g transform="translate(-52, -9)" stroke="#FF1F48" strokeWidth="2" fill="none">
                    <rect x="2" y="6" width="15" height="11" rx="3" />
                    <line x1="9.5" y1="2" x2="9.5" y2="6" />
                    <circle cx="6" cy="11.5" r="1.2" fill="#FF1F48" />
                    <circle cx="13" cy="11.5" r="1.2" fill="#FF1F48" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    Agentic AI
                  </text>
                </g>
              </g>

              {/* 10. GenAI */}
              <g transform={`translate(${cx + 255 * Math.cos(Math.PI / 4.2)}, ${cy + 255 * Math.sin(Math.PI / 4.2)})`}>
                <g className="orbit-counter-middle skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-52" y="-19" width="104" height="38" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Sparkle icon */}
                  <g transform="translate(-38, -9)" fill="#FF1F48">
                    <path d="M9 1L11.2 6.8L17 9L11.2 11.2L9 17L6.8 11.2L1 9L6.8 6.8L9 1Z" />
                  </g>
                  <text x="10" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    GenAI
                  </text>
                </g>
              </g>

              {/* 11. ML */}
              <g transform={`translate(${cx + 255 * Math.cos(Math.PI / 2.6)}, ${cy + 255 * Math.sin(Math.PI / 2.6)})`}>
                <g className="orbit-counter-middle skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-48" y="-19" width="96" height="38" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Connected node cluster */}
                  <g transform="translate(-36, -9)" stroke="#FF1F48" strokeWidth="1.8" fill="none">
                    <circle cx="5" cy="5" r="2.2" fill="#FF1F48" />
                    <circle cx="14" cy="5" r="2.2" fill="#FF1F48" />
                    <circle cx="9.5" cy="13" r="2.2" fill="#FF1F48" />
                    <line x1="5" y1="5" x2="14" y2="5" />
                    <line x1="5" y1="5" x2="9.5" y2="13" />
                    <line x1="14" y1="5" x2="9.5" y2="13" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    ML
                  </text>
                </g>
              </g>

              {/* 12. RAG */}
              <g transform={`translate(${cx}, ${cy + 255})`}>
                <g className="orbit-counter-middle skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-56" y="-20" width="112" height="40" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Document + Magnifier icon */}
                  <g transform="translate(-42, -9)" stroke="#FF1F48" strokeWidth="2" fill="none">
                    <path d="M3 2H11L14 5V15H3V2Z" />
                    <circle cx="13" cy="13" r="3" />
                    <line x1="15" y1="15" x2="17.5" y2="17.5" />
                  </g>
                  <text x="10" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    RAG
                  </text>
                </g>
              </g>

              {/* 13. DL */}
              <g transform={`translate(${cx - 255 * Math.cos(Math.PI / 4.5)}, ${cy + 255 * Math.sin(Math.PI / 4.5)})`}>
                <g className="orbit-counter-middle skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-50" y="-19" width="100" height="38" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Deep Neural Network mesh */}
                  <g transform="translate(-38, -9)" stroke="#FF1F48" strokeWidth="1.6" fill="none">
                    <circle cx="4" cy="5" r="2" fill="#FF1F48" />
                    <circle cx="4" cy="13" r="2" fill="#FF1F48" />
                    <circle cx="13" cy="3" r="2" fill="#FF1F48" />
                    <circle cx="13" cy="9" r="2" fill="#FF1F48" />
                    <circle cx="13" cy="15" r="2" fill="#FF1F48" />
                    <line x1="4" y1="5" x2="13" y2="3" />
                    <line x1="4" y1="5" x2="13" y2="9" />
                    <line x1="4" y1="13" x2="13" y2="9" />
                    <line x1="4" y1="13" x2="13" y2="15" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    DL
                  </text>
                </g>
              </g>

              {/* 14. LLM */}
              <g transform={`translate(${cx - 255 * Math.cos(-Math.PI / 6)}, ${cy + 255 * Math.sin(-Math.PI / 6)})`}>
                <g className="orbit-counter-middle skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-52" y="-19" width="104" height="38" rx="10" ry="10" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Brain icon */}
                  <g transform="translate(-40, -9)" stroke="#FF1F48" strokeWidth="2" fill="none">
                    <path d="M7 3C5 3 3 5 3 7C2 9 3 11 4 12C3 14 5 16 7 16" />
                    <path d="M11 3C13 3 15 5 15 7C16 9 15 11 14 12C15 14 13 16 11 16" />
                    <path d="M7 6H11M7 10H11M7 13H11" />
                  </g>
                  <text x="10" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    LLM
                  </text>
                </g>
              </g>
            </g>

            {/* Outer Ring Badges */}
            <g className="orbit-track-outer" style={{ transformOrigin: '450px 450px', transformBox: 'view-box' }}>
              {/* 15. FastAPI */}
              <g transform={`translate(${cx}, ${cy - 365})`}>
                <g className="orbit-counter-outer skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-64" y="-21" width="128" height="42" rx="11" ry="11" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Lightning Bolt */}
                  <g transform="translate(-48, -10)" fill="#FF1F48">
                    <polygon points="9 1 2 11 8 11 7 19 14 9 8 9" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    FastAPI
                  </text>
                </g>
              </g>

              {/* 16. Gemini AI */}
              <g transform={`translate(${cx + 365 * Math.cos(-Math.PI / 6)}, ${cy + 365 * Math.sin(-Math.PI / 6)})`}>
                <g className="orbit-counter-outer skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-68" y="-21" width="136" height="42" rx="11" ry="11" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* 4-point Sparkle */}
                  <g transform="translate(-54, -10)" fill="#FF1F48">
                    <path d="M9 1C9 5.5 13 9 17 9C13 9 9 12.5 9 17C9 12.5 5 9 1 9C5 9 9 5.5 9 1Z" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    Gemini AI
                  </text>
                </g>
              </g>

              {/* 17. OpenAI */}
              <g transform={`translate(${cx + 365 * Math.cos(Math.PI / 18)}, ${cy + 365 * Math.sin(Math.PI / 18)})`}>
                <g className="orbit-counter-outer skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-62" y="-21" width="124" height="42" rx="11" ry="11" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* OpenAI Spiral Flower */}
                  <g transform="translate(-48, -10)" stroke="#FF1F48" strokeWidth="1.8" fill="none">
                    <path d="M9 2C13 2 16 5 16 9C16 13 13 16 9 16" />
                    <path d="M9 4C6 4 4 6.5 4 9C4 11.5 6 14 9 14" />
                    <path d="M6 7L12 11M6 11L12 7" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    OpenAI
                  </text>
                </g>
              </g>

              {/* 18. SQL */}
              <g transform={`translate(${cx + 365 * Math.cos(Math.PI / 4.2)}, ${cy + 365 * Math.sin(Math.PI / 4.2)})`}>
                <g className="orbit-counter-outer skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-52" y="-21" width="104" height="42" rx="11" ry="11" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Database Discs */}
                  <g transform="translate(-40, -10)" stroke="#FF1F48" strokeWidth="2" fill="none">
                    <ellipse cx="8.5" cy="4" rx="6.5" ry="2.5" />
                    <path d="M2 4V9C2 10.5 5 11.5 8.5 11.5C12 11.5 15 10.5 15 9V4" />
                    <path d="M2 9V14C2 15.5 5 16.5 8.5 16.5C12 16.5 15 15.5 15 14V9" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    SQL
                  </text>
                </g>
              </g>

              {/* 19. Ollama */}
              <g transform={`translate(${cx}, ${cy + 365})`}>
                <g className="orbit-counter-outer skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-60" y="-21" width="120" height="42" rx="11" ry="11" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Llama creature silhouette */}
                  <g transform="translate(-46, -10)" stroke="#FF1F48" strokeWidth="2" fill="none">
                    <path d="M4 17V8C4 5 6 3 9 3C12 3 14 5 14 8V17" />
                    <path d="M4 5L2 2" />
                    <path d="M14 5L16 2" />
                    <circle cx="7" cy="8" r="1" fill="#FF1F48" />
                    <circle cx="11" cy="8" r="1" fill="#FF1F48" />
                    <path d="M7 12C8 13 10 13 11 12" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    Ollama
                  </text>
                </g>
              </g>

              {/* 20. Groq */}
              <g transform={`translate(${cx - 365 * Math.cos(Math.PI / 4.5)}, ${cy + 365 * Math.sin(Math.PI / 4.5)})`}>
                <g className="orbit-counter-outer skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-56" y="-21" width="112" height="42" rx="11" ry="11" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Groq 'g' letter */}
                  <g transform="translate(-42, -10)" fill="#FF1F48">
                    <text x="8" y="15" fontSize="20" fontWeight="900" fontFamily="'Plus Jakarta Sans', sans-serif" fill="#FF1F48">
                      g
                    </text>
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    Groq
                  </text>
                </g>
              </g>

              {/* 21. GitHub */}
              <g transform={`translate(${cx - 365 * Math.cos(Math.PI / 32)}, ${cy + 365 * Math.sin(Math.PI / 32)})`}>
                <g className="orbit-counter-outer skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-62" y="-21" width="124" height="42" rx="11" ry="11" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* GitHub Cat Icon */}
                  <g transform="translate(-48, -10)" fill="#FF1F48">
                    <path d="M9 1C4.6 1 1 4.6 1 9C1 12.5 3.3 15.5 6.5 16.6C6.9 16.7 7 16.4 7 16.2V14.8C4.8 15.3 4.3 13.8 4.3 13.8C3.9 12.9 3.4 12.6 3.4 12.6C2.7 12.1 3.5 12.1 3.5 12.1C4.3 12.2 4.7 12.9 4.7 12.9C5.4 14.1 6.6 13.8 7 13.6C7.1 13.1 7.3 12.7 7.5 12.5C5.7 12.3 3.9 11.6 3.9 8.5C3.9 7.6 4.2 6.9 4.7 6.4C4.6 6.2 4.3 5.4 4.8 4.3C4.8 4.3 5.5 4.1 7.1 5.2C7.8 5 8.5 4.9 9.2 4.9C9.9 4.9 10.6 5 11.3 5.2C12.9 4.1 13.6 4.3 13.6 4.3C14.1 5.4 13.8 6.2 13.7 6.4C14.2 6.9 14.5 7.6 14.5 8.5C14.5 11.6 12.6 12.3 10.9 12.5C11.2 12.7 11.5 13.3 11.5 14.2V16.2C11.5 16.4 11.6 16.7 12 16.6C15.2 15.5 17.5 12.5 17.5 9C17.5 4.6 13.7 1 9 1Z" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    GitHub
                  </text>
                </g>
              </g>

              {/* 22. UI/UX */}
              <g transform={`translate(${cx - 365 * Math.cos(-Math.PI / 7.5)}, ${cy + 365 * Math.sin(-Math.PI / 7.5)})`}>
                <g className="orbit-counter-outer skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-56" y="-21" width="112" height="42" rx="11" ry="11" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Brush / Nib icon */}
                  <g transform="translate(-44, -10)" stroke="#FF1F48" strokeWidth="2" fill="none">
                    <path d="M12 2L16 6L6 16H2V12L12 2Z" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    UI/UX
                  </text>
                </g>
              </g>

              {/* 23. Figma */}
              <g transform={`translate(${cx - 365 * Math.cos(-Math.PI / 3.8)}, ${cy + 365 * Math.sin(-Math.PI / 3.8)})`}>
                <g className="orbit-counter-outer skill-badge-node" filter="url(#neon-glow)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <rect x="-56" y="-21" width="112" height="42" rx="11" ry="11" fill="#08080E" stroke="#FF1F48" strokeWidth="2.2" />
                  {/* Figma Logo icon */}
                  <g transform="translate(-42, -9)" fill="#FF1F48">
                    <path d="M4 1C2.3 1 1 2.3 1 4C1 5.7 2.3 7 4 7H7V1H4Z" />
                    <path d="M10 1C8.3 1 7 2.3 7 4C7 5.7 8.3 7 10 7C11.7 7 13 5.7 13 4C13 2.3 11.7 1 10 1Z" />
                    <path d="M4 7C2.3 7 1 8.3 1 10C1 11.7 2.3 13 4 13H7V7H4Z" />
                    <path d="M10 7C8.3 7 7 8.3 7 10C7 11.7 8.3 13 10 13C11.7 13 13 11.7 13 10C13 8.3 11.7 7 10 7Z" />
                    <path d="M4 13C2.3 13 1 14.3 1 16C1 17.7 2.3 19 4 19C5.7 19 7 17.7 7 16V13H4Z" />
                  </g>
                  <text x="12" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                    Figma
                  </text>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};
