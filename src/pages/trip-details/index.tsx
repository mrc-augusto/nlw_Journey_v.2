import { Calendar, CircleCheck, MapPin, Plus, Settings2 } from "lucide-react";

export function TripDetailsPage(){
  return(
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="h-16 flex items-center justify-between gap-5 px-4 bg-zinc-900 shadow-shape rounded-xl">
        <div className="flex items-center gap-2 ">
          <MapPin className="size-5 text-zinc-400"/>
          <span className="text-zinc-100">Florianópolis, Brasil</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 ">
            <Calendar className="size-5 text-zinc-400"/>
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>
          
          <div className="w-px h-6 bg-zinc-800"></div>

          <button className=' flex items-center gap-2 bg-zinc-800 text-zinc-200 py-2 px-5 font-medium rounded-lg hover:bg-zinc-700'>
            Alterar local/data
            <Settings2 className='size-5'/>
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">

          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-zinc-50 font-semibold text-3xl">Atividades</h2>
            <button className="bg-lime-300 flex items-center gap-2 py-2 px-5 font-medium text-lime-950 rounded-lg hover:bg-lime-400">
              <Plus className="size-5"/>
              Cadastrar atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex gap-2 items-baseline">
                <span className="text-zinc-300 text-xl font-semibold">Dia 17</span>
                <span className="text-zinc-500 text-xs">Sábado</span>
              </div>
              <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data</p>
            </div>
            <div className="space-y-3">
              <div className="flex gap-2 items-baseline">
                <span className="text-zinc-300 text-xl font-semibold">Dia 18</span>
                <span className="text-zinc-500 text-xs">Domingo</span>
              </div>
              <div className="space-y-3">
                <div className="bg-zinc-900 flex gap-3 justify-between items-center px-4 py-2.5 shadow-shape rounded-xl">
                  <CircleCheck className="size-5 text-lime-300"/>
                  <span className="flex-1 text-zinc-100">Corrida de Kart</span>
                  <span className="text-zinc-400 text-sm">14:00h</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-zinc-900 flex gap-3 justify-between items-center px-4 py-2.5 shadow-shape rounded-xl">
                  <CircleCheck className="size-5 text-lime-300"/>
                  <span className="flex-1 text-zinc-100">Corrida de Kart</span>
                  <span className="text-zinc-400 text-sm">14:00h</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="w-80">
          <div>
            <p className="text-zinc-50">Links importantes</p>

          </div>
        </div>
      </main>
    </div>
  )
}