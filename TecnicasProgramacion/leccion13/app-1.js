import React, { useEffect, useState } from "react";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3000); // mínimo 3 segundos
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: '#fff' }}>
      {!ready ? (
        <div style={{ width: 220, height: 220, position: 'relative' }}>
          <style>{`
            .pulse { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); }

            /* Circle: expands and fades */
            .circle { r:26; animation: circleAnim 3000ms cubic-bezier(.2,.8,.2,1) forwards; fill: none; stroke: #60a5fa; stroke-width:6 }
            @keyframes circleAnim {
              0% { transform: scale(0.3); opacity:1 }
              70% { transform: scale(1.05); opacity:0.7 }
              100% { transform: scale(1.6); opacity:0 }
            }

            /* Triangle: spins in */
            .tri { transform-origin: center; animation: triAnim 3000ms cubic-bezier(.2,.9,.3,1) forwards; fill:#f97316; }
            @keyframes triAnim { 0%{ transform:rotate(-180deg) scale(0.2); opacity:0 } 60%{ transform:rotate(20deg) scale(1.05); opacity:1 } 100%{ transform:rotate(0deg) scale(1); opacity:1 } }

            /* Square: bounces from bottom */
            .sq { transform-origin:center; animation: sqAnim 3000ms cubic-bezier(.25,.8,.25,1) forwards; fill:#34d399 }
            @keyframes sqAnim { 0%{ transform:translateY(80px) scale(.6); opacity:0 } 50%{ transform:translateY(-12px) scale(1.05); opacity:1 } 100%{ transform:translateY(0) scale(1); opacity:1 } }

            /* Star: shimmer scale */
            .star { transform-origin:center; animation: starAnim 3000ms cubic-bezier(.3,.9,.2,1) forwards; fill:#eab308 }
            @keyframes starAnim { 0%{ transform:scale(.4) rotate(-30deg); opacity:0 } 70%{ transform:scale(1.12) rotate(10deg); opacity:1 } 100%{ transform:scale(1) rotate(0deg); opacity:1 } }
          `}</style>

          <svg className="pulse" width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
            <g>
              <circle className="circle" cx="110" cy="110" r="26" />

              <g transform="translate(110 60)">
                <polygon className="tri" points="0,-34 30,20 -30,20" />
              </g>

              <rect className="sq" x="75" y="120" width="40" height="40" rx="6" />

              <g transform="translate(150 90)">
                <path className="star" d="M0 -18 L4 -6 H16 L6 2 L10 14 L0 7 L-10 14 L-6 2 L-16 -6 H-4 Z" />
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <h1 style={{ fontSize: 32, fontWeight: 700 }}>dashboard</h1>
      )}
    </div>
  );
}
