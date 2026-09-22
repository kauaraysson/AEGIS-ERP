import { ShieldAlert } from 'lucide-react'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 p-4">
      <div className="mb-8 text-center flex flex-col items-center">
        <ShieldAlert className="w-16 h-16 text-blue-500 mb-4" />
        <h1 className="text-5xl font-black text-white tracking-widest uppercase">Aegis</h1>
        <p className="text-blue-400 font-bold tracking-widest mt-2 uppercase text-xs">
          Enterprise Security Node
        </p>
      </div>

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-slate-200">
        <form className="flex flex-col gap-5">
          <h3 className="text-lg font-bold text-slate-800 text-center mb-2">
            Acesso Restrito
          </h3>
          
          <input
            type="email"
            placeholder="E-mail corporativo"
            className="w-full border-2 border-slate-200 rounded-lg p-3 text-sm font-bold text-slate-700 outline-none focus:border-blue-500 transition"
          />
          
          <input
            type="password"
            placeholder="Senha"
            className="w-full border-2 border-slate-200 rounded-lg p-3 text-sm font-bold text-slate-700 outline-none focus:border-blue-500 transition"
          />
          
          <button
            type="button"
            className="w-full bg-blue-600 text-white font-black py-3 rounded-lg hover:bg-blue-700 transition shadow-lg mt-2"
          >
            Autenticar
          </button>
        </form>
      </div>
    </div>
  )
}
