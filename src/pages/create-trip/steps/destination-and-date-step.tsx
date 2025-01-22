import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps{
  isGuestsInputOpen: boolean
  openGuestsInput: ()=>void
  closeGuestsInput: ()=>void
}
export function DestinationAndDateStep({
  isGuestsInputOpen,
  openGuestsInput,
  closeGuestsInput
}: DestinationAndDateStepProps){
  return(
    <div className="h-16 px-4 bg-zinc-900 flex items-center shadow-shape rounded-xl p-5 gap-3">
      <div className='flex items-center gap-2 flex-1'>
        <MapPin className='size-5 text-zinc-400'/>
        <input
          disabled={isGuestsInputOpen}
          className="placeholder-zinc-400 text-zinc-300 text-lg bg-transparent outline-none flex-1" 
          type="text" 
          placeholder="Para onde você vai?" 
        />
      </div>

      <div className='flex items-center gap-2'>
        <Calendar className='size-5 text-zinc-400'/>
        <input
          disabled={isGuestsInputOpen}
          className="placeholder-zinc-400 text-zinc-300 text-lg bg-transparent w-40 outline-none" 
          type="text" 
          placeholder="Quando?" 
        />
      </div>

      <div className='w-px h-6 bg-zinc-800'/>

      {isGuestsInputOpen ? (
        <button 
          onClick={closeGuestsInput}
          className=' flex items-center gap-2 bg-zinc-800 text-zinc-200 py-2 px-5 font-medium rounded-lg hover:bg-zinc-700'
        >
          Alterar local/data
          <Settings2 className='size-5'/>
        </button>
      ) : (
        <button 
        onClick={openGuestsInput}
        className=" flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
        >
          Continuar
          <ArrowRight className='size-5 '/>
        </button>
      )}

    </div>
  )
}