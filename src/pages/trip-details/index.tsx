import { Calendar, MapPin, Settings2 } from "lucide-react";

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
    </div>
  )
}