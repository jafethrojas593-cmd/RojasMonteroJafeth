import React, { useEffect, useState } from "react";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3000); // mínimo 3 segundos
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
      {!ready ? (
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <style>{`
            .dot { width:48px; height:48px; border-radius:12px; background:linear-gradient(135deg,#3b82f6,#06b6d4); transform-origin:center; }
            .dot:nth-child(1){ animation: float1 900ms cubic-bezier(.2,.9,.3,1) infinite; }
            .dot:nth-child(2){ animation: float2 900ms cubic-bezier(.2,.9,.3,1) infinite; }
            .dot:nth-child(3){ animation: float3 900ms cubic-bezier(.2,.9,.3,1) infinite; }

            @keyframes float1 {
              0% { transform: translateY(0) rotate(0) scale(1); }
              50% { transform: translateY(-22px) rotate(15deg) scale(1.05); }
              100% { transform: translateY(0) rotate(0) scale(1); }
            }
            @keyframes float2 {
              0% { transform: translateY(0) rotate(0) scale(1); }
              50% { transform: translateY(-14px) rotate(-10deg) scale(.98); }
              100% { transform: translateY(0) rotate(0) scale(1); }
            }
            @keyframes float3 {
              0% { transform: translateY(0) rotate(0) scale(1); }
              50% { transform: translateY(-28px) rotate(25deg) scale(1.08); }
              100% { transform: translateY(0) rotate(0) scale(1); }
            }
          `}</style>

          <div className="dot" style={{ borderRadius: 8 }} />
          <div className="dot" style={{ borderRadius: 8, background: 'linear-gradient(135deg,#ef4444,#f97316)' }} />
          <div className="dot" style={{ borderRadius: 8, background: 'linear-gradient(135deg,#10b981,#84cc16)' }} />
        </div>
      ) : (
        <h1 style={{ fontSize: 28, fontWeight: 600 }}>dashboard</h1>
      )}
    </div>
  );
}
