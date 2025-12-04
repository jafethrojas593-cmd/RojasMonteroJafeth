import React, { useEffect, useState } from "react";

export default function App() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3000); // mínimo 3s
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg,#071029 0%, #071a2a 60%)' }}>
      <style>{`
        /* Bubbles background */
        .bwrap{ position:fixed; inset:0; z-index:-1; overflow:hidden }
        .bubble{ position:absolute; bottom:-120px; border-radius:50%; opacity:.75; filter:blur(.4px); animation-timing-function:cubic-bezier(.2,.9,.2,1); }

        .b1{ left:8%; width:30px; height:30px; background:rgba(96,165,250,0.25); animation: rise1 3800ms forwards }
        .b2{ left:22%; width:48px; height:48px; background:rgba(124,58,237,0.18); animation: rise2 4200ms forwards }
        .b3{ left:38%; width:20px; height:20px; background:rgba(99,102,241,0.22); animation: rise3 3400ms forwards }
        .b4{ left:56%; width:64px; height:64px; background:rgba(34,197,94,0.16); animation: rise4 4600ms forwards }
        .b5{ left:72%; width:40px; height:40px; background:rgba(251,113,133,0.2); animation: rise5 4000ms forwards }
        .b6{ left:86%; width:26px; height:26px; background:rgba(99,102,241,0.2); animation: rise6 3600ms forwards }

        @keyframes rise1 { 0%{ transform: translateY(0) scale(.6) rotate(0); opacity:0 } 30%{ opacity:1 } 100%{ transform: translateY(-120vh) scale(1.1) rotate(380deg); opacity:0.02 } }
        @keyframes rise2 { 0%{ transform: translateY(0) scale(.5) rotate(0); opacity:0 } 25%{ opacity:1 } 100%{ transform: translateY(-115vh) scale(1.15) rotate(-420deg); opacity:0 } }
        @keyframes rise3 { 0%{ transform: translateY(0) scale(.6) rotate(0); opacity:0 } 35%{ opacity:1 } 100%{ transform: translateY(-125vh) scale(.95) rotate(300deg); opacity:0 } }
        @keyframes rise4 { 0%{ transform: translateY(0) scale(.4) rotate(0); opacity:0 } 20%{ opacity:1 } 100%{ transform: translateY(-118vh) scale(1.2) rotate(520deg); opacity:0 } }
        @keyframes rise5 { 0%{ transform: translateY(0) scale(.5) rotate(0); opacity:0 } 28%{ opacity:1 } 100%{ transform: translateY(-122vh) scale(1.05) rotate(-360deg); opacity:0 } }
        @keyframes rise6 { 0%{ transform: translateY(0) scale(.6) rotate(0); opacity:0 } 32%{ opacity:1 } 100%{ transform: translateY(-120vh) scale(1) rotate(260deg); opacity:0 } }

        /* gentle spotlight in center */
        .spot{ position:fixed; left:50%; top:40%; width:520px; height:520px; transform:translate(-50%,-50%); border-radius:50%; background: radial-gradient(circle at 40% 40%, rgba(255,255,255,0.04), transparent 40%); z-index:-1 }

        .dashboard{ font-size:34px; font-weight:700; color:#e6f0ff }
      `}</style>

      {/* Bubbles container */}
      <div className="bwrap" aria-hidden>
        <div className="bubble b1" />
        <div className="bubble b2" />
        <div className="bubble b3" />
        <div className="bubble b4" />
        <div className="bubble b5" />
        <div className="bubble b6" />
        <div className="spot" />
      </div>

      {!ready ? (
        <div aria-hidden style={{ width:220, height:220, display:'flex', alignItems:'center', justifyContent:'center' }}>
          {/* Center graphic to complement bubbles */}
          <svg width="140" height="140" viewBox="0 0 140 140">
            <defs>
              <filter id="g" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feBlend in="SourceGraphic" in2="b" />
              </filter>
            </defs>
            <g filter="url(#g)">
              <circle cx="70" cy="70" r="36" fill="#60a5fa" opacity="0.18" />
              <circle cx="70" cy="70" r="22" fill="#7c3aed" opacity="0.16" />
              <circle cx="70" cy="70" r="10" fill="#34d399" opacity="0.18" />
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
