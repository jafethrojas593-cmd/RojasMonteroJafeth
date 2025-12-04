import React, { useEffect, useState } from "react";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3000); // mínimo 3 segundos
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <style>{`
        /* Background transition: from dark-blue to purple -> teal over 3s */
        .bgWrap { width:100%; height:100vh; position:fixed; left:0; top:0; z-index:-1; overflow:hidden }
        .bgInitial { background: radial-gradient(circle at 20% 20%, #0f172a 0%, #0b1220 30%, #071029 60%); width:100%; height:100%; }
        .bgTransition { animation: bgAnim 3000ms ease-in-out forwards; }
        @keyframes bgAnim {
          0% { background: radial-gradient(circle at 20% 20%, #0f172a 0%, #0b1220 30%, #071029 60%); }
          50% { background: radial-gradient(circle at 70% 30%, #4f46e5 0%, #d946ef 40%, #f97316 70%); }
          100% { background: radial-gradient(circle at 50% 60%, #06b6d4 0%, #10b981 40%, #60a5fa 80%); }
        }

        /* Loader container centers the animated shapes */
        .loader { width:260px; height:260px; display:flex; align-items:center; justify-content:center; }

        /* Shapes animations — all synced to 3s and run once */
        .shape { transform-origin:center; }
        .ring { animation: ringAnim 3000ms cubic-bezier(.2,.9,.3,1) forwards; stroke:#7dd3fc; stroke-width:6; fill:none }
        @keyframes ringAnim { 0%{ transform:scale(.4); opacity:1 } 80%{ transform:scale(1.02); opacity:.8 } 100%{ transform:scale(1.6); opacity:0 } }

        .hex { animation: hexAnim 3000ms cubic-bezier(.25,.85,.3,1) forwards; fill:#f472b6 }
        @keyframes hexAnim { 0%{ transform:translateY(60px) scale(.3) rotate(40deg); opacity:0 } 65%{ transform:translateY(-8px) scale(1.05) rotate(-10deg); opacity:1 } 100%{ transform:translateY(0) scale(1) rotate(0); opacity:1 } }

        .wave { animation: waveAnim 3000ms cubic-bezier(.3,.9,.2,1) forwards; fill:#60a5fa }
        @keyframes waveAnim { 0%{ transform:translateX(-80px) scale(.6); opacity:0 } 70%{ transform:translateX(6px) scale(1.06); opacity:1 } 100%{ transform:translateX(0) scale(1); opacity:1 } }

        .diamond { animation: diamondAnim 3000ms cubic-bezier(.2,.8,.25,1) forwards; fill:#34d399 }
        @keyframes diamondAnim { 0%{ transform:scale(.2) rotate(45deg); opacity:0 } 60%{ transform:scale(1.08) rotate(-10deg); opacity:1 } 100%{ transform:scale(1) rotate(0); opacity:1 } }

        /* Dashboard text style */
        .dashboard { font-size:36px; font-weight:700; color:#071029 }
      `}</style>

      {/* Background layers: initial plus transition class while loader runs */}
      <div className="bgWrap">
        <div className={"bgInitial " + (ready ? "" : "bgTransition")} />
      </div>

      {!ready ? (
        <div className="loader" aria-hidden>
          <svg width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(130 130)">
              {/* Ring */}
              <circle className="shape ring" cx="0" cy="0" r="44" />

              {/* Hexagon */}
              <g className="shape hex" transform="translate(-70 -10)">
                <polygon points="-28,0 -14,-24 14,-24 28,0 14,24 -14,24" />
              </g>

              {/* Wave-like blob */}
              <g className="shape wave" transform="translate(40 10)">
                <path d="M-30 10 C -10 -20, 30 -20, 50 10 C 30 40, -10 40, -30 10 Z" />
              </g>

              {/* Diamond */}
              <g className="shape diamond" transform="translate(0 58)">
                <rect x="-16" y="-16" width="32" height="32" transform="rotate(45)" />
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', width:'100%' }}>
          <h1 className="dashboard">dashboard</h1>
        </div>
      )}
    </div>
  );
}
