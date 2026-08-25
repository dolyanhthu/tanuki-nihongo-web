import { useState, useEffect } from 'react';
import { checkHealth, HealthResponse } from './services/api';

export default function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkHealth()
      .then((data) => {
        setHealth(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API Health Check Error:', err);
        setError('Backend unavailable (Make sure Spring Boot server is running at port 8080)');
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <div className="max-w-md w-full p-8 rounded-2xl bg-slate-800 border border-slate-700 shadow-xl">
        <h1 className="text-3xl font-bold text-amber-400 mb-2">🦝 Tanuki Nihongo</h1>
        <p className="text-slate-400 text-sm mb-6">
          React + Spring Boot Decoupled Architecture
        </p>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-700/50 mb-6 text-left">
          <h2 className="text-xs uppercase font-semibold text-slate-400 mb-2 tracking-wider">
            Backend Connection Status
          </h2>
          {loading ? (
            <p className="text-slate-300 text-sm animate-pulse">Connecting to backend...</p>
          ) : error ? (
            <div className="text-rose-400 text-xs font-mono">{error}</div>
          ) : (
            <div className="space-y-1 text-xs font-mono text-emerald-400">
              <p>✔ Status: {health?.status}</p>
              <p>✔ Service: {health?.service}</p>
              <p className="text-slate-500">Timestamp: {health?.timestamp}</p>
            </div>
          )}
        </div>

        <p className="text-xs text-slate-500">
          Edit <code className="text-amber-300">frontend/src/App.tsx</code> to start building!
        </p>
      </div>
    </div>
  );
}
