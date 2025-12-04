import React, { useEffect, useState } from "react";

export default function App() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3000); // mínimo 3s
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020617' }}>
      <style>{`
        .stage{ width:320px; height:320px; display:flex; align-items:center; justify-content:center }
        svg { overflow: visible }
        .frag { transform-origin: center; animation: fractal 3000ms cubic-bezier(.2,.9,.3,1) forwards; }
        .frag:nth-child(2){ animation-delay:120ms }
        .frag:nth-child(3){ animation-delay:240ms }
        .frag:nth-child(4){ animation-delay:360ms }
        .frag:nth-child(5){ animation-delay:480ms }

        @keyframes fractal {
          0%{ transform: scale(.25) rotate(0deg); opacity:0 }
          60%{ transform: scale(1.08) rotate(220deg); opacity:1 }
          100%{ transform: scale(1) rotate(360deg); opacity:1 }
        }

        .dashboard{ font-size:34px; font-weight:700; color:#ffffff }
      `}</style>

      {!ready ? (
        <div className="stage" aria-hidden>
          <svg width="220" height="220" viewBox="-110 -110 220 220">
            <g>
              {/* Create nested rotated squares to suggest a fractal */}
              <g className="frag" transform="scale(1)">
                <rect x="-48" y="-48" width="96" height="96" rx="8" fill="#60a5fa" opacity="0.85" />
              </g>

              <g className="frag" transform="scale(.7)">
                <rect x="-48" y="-48" width="96" height="96" rx="10" fill="#7c3aed" opacity="0.75" />
              </g>

              <g className="frag" transform="scale(.49)">
                <rect x="-48" y="-48" width="96" height="96" rx="12" fill="#fb7185" opacity="0.7" />
              </g>

              <g className="frag" transform="scale(.34)">
                <rect x="-48" y="-48" width="96" height="96" rx="14" fill="#34d399" opacity="0.65" />
              </g>

              <g className="frag" transform="scale(.24)">
                <rect x="-48" y="-48" width="96" height="96" rx="16" fill="#f59e0b" opacity="0.6" />
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <h1 className="dashboard">dashboard</h1>
        </div>
      )}
    </div>
  );
}
