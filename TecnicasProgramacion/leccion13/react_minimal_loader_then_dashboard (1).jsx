import React, { useEffect, useState } from "react";

export default function App() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3000); // mínimo 3s
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ minHeight: '100vh', overflow: 'hidden', position: 'relative', background: '#081228', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <style>{`
        .layer { position: absolute; left:0; right:0; top:0; bottom:0; pointer-events:none }
        .l0{ background: linear-gradient(180deg, rgba(2,6,23,1), rgba(6,10,30,1)); z-index:0 }
        .l1{ background: radial-gradient(circle at 20% 30%, rgba(99,102,241,0.08), transparent 30%); transform: translateZ(0); animation: move1 3000ms linear forwards; z-index:1 }
        .l2{ background: radial-gradient(circle at 80% 70%, rgba(16,185,129,0.06), transparent 28%); animation: move2 3000ms linear forwards; z-index:2 }
        .l3{ background-image: linear-gradient(120deg, rgba(99,102,241,0.04) 0%, rgba(124,58,237,0.02) 50%, rgba(99,102,241,0.03) 100%); animation: move3 3000ms linear forwards; z-index:3 }
        .l4{ background: radial-gradient(circle at 50% 50%, rgba(96,165,250,0.06), transparent 35%); animation: move4 3000ms linear forwards; z-index:4 }

        /* subtle different translations to create parallax depth */
        @keyframes move1 { 0% { transform: translateY(0) translateX(0) } 100% { transform: translateY(-18px) translateX(-8px) } }
        @keyframes move2 { 0% { transform: translateY(0) translateX(0) } 100% { transform: translateY(-36px) translateX(12px) } }
        @keyframes move3 { 0% { transform: translateY(0) translateX(0) } 100% { transform: translateY(-60px) translateX(-24px) } }
        @keyframes move4 { 0% { transform: translateY(0) translateX(0) } 100% { transform: translateY(-90px) translateX(40px) } }

        /* small decorative shapes moving at different speeds */
        .shapes{ position:absolute; inset:0; z-index:5; display:flex; align-items:center; justify-content:center; }
        .shape{ width:80px; height:80px; border-radius:12px; opacity:0.08; transform-origin:center; }
        .s1{ background:linear-gradient(135deg,#60a5fa,#7c3aed); animation: s1 3000ms ease-out forwards }
        .s2{ background:linear-gradient(135deg,#34d399,#f59e0b); animation: s2 3000ms ease-out forwards }
        .s3{ background:linear-gradient(135deg,#fb7185,#f97316); animation: s3 3000ms ease-out forwards }
        @keyframes s1 { 0%{ transform: translate(-120px,60px) scale(.6) rotate(0); opacity:0 } 60%{ opacity:0.18 } 100%{ transform: translate(-40px,-10px) scale(1) rotate(12deg); opacity:0.08 } }
        @keyframes s2 { 0%{ transform: translate(20px,120px) scale(.5) rotate(-10deg); opacity:0 } 60%{ opacity:0.16 } 100%{ transform: translate(80px,0px) scale(1) rotate(6deg); opacity:0.08 } }
        @keyframes s3 { 0%{ transform: translate(140px,-40px) scale(.4) rotate(0); opacity:0 } 60%{ opacity:0.18 } 100%{ transform: translate(40px,30px) scale(1) rotate(-8deg); opacity:0.07 } }

        .dashboard{ font-size:34px; font-weight:700; color:#e6f7ff; z-index:10 }
      `}</style>

      {/* Layers that move slightly at different speeds to simulate parallax */}
      <div className={"layer l0"} />
      <div className={"layer l1"} />
      <div className={"layer l2"} />
      <div className={"layer l3"} />
      <div className={"layer l4"} />

      <div className="shapes" aria-hidden>
        <div className="shape s1" style={{ marginRight: 48 }} />
        <div className="shape s2" style={{ marginRight: 48 }} />
        <div className="shape s3" />
      </div>

      {!ready ? (
        <div aria-hidden style={{ width:260, height:260, display:'flex', alignItems:'center', justifyContent:'center' }}>
          {/* small center indicator while parallax runs */}
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="28" fill="#60a5fa" opacity="0.14" />
            <circle cx="60" cy="60" r="14" fill="#7c3aed" opacity="0.14" />
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
