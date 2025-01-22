import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps{
  openGuestsModal: ()=>void
  openConfirmTripModal: ()=>void
  emailsToInvite: string[]
}
export function InviteGuestsStep({
  openGuestsModal,
  openConfirmTripModal,
  emailsToInvite
}: InviteGuestsStepProps){
  return(
    <div className="h-16 px-4 bg-zinc-900 flex items-center shadow-shape rounded-xl p-5 gap-3">
      <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1'>
        <UserRoundPlus className='size-5 text-zinc-400'/>
        {emailsToInvite.length > 0  ?(
          <span className='text-zinc-100 text-lg flex-1 text-left'>
            {emailsToInvite.length} pessoas(s) consvidada(s)
          </span>  
        ) : (
          <span className='text-zinc-400 text-lg flex-1 text-left'>
            Quem estará na viagem?
          </span>  
        )}
      </button>

      <div className='w-px h-6 bg-zinc-800'/>

      <button
        onClick={openConfirmTripModal} 
        className=" flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
      >
        Confirmar viagem
        <ArrowRight className='size-5 '/>
      </button>
    </div>
  )
}