import React, { useEffect, useState } from "react";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3000); // mínimo 3 segundos
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {!ready ? (
        <div className="flex flex-col items-center">
          <div
            className="w-24 h-24 rounded-full border-8 border-t-transparent animate-spin"
            style={{ animationDuration: "3s", borderColor: "#3b82f6" }}
          />
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      ) : (
        <h1 className="text-3xl font-semibold">dashboard</h1>
      )}
    </div>
  );
}
