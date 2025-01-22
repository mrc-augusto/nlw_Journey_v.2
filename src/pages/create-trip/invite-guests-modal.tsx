import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"

interface InviteGuestsModalProps{
  closeGuestsModal: ()=>void
  emailsToInvite: string[]
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>)=>void
  removeEmailFromInvite: (email: string)=>void
}

export function InviteGuestsModal({
  closeGuestsModal,
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailFromInvite
}: InviteGuestsModalProps){
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5'>

        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-white text-lg font-semibold'>Selecionar convidados</h2>
            <button type='button' onClick={closeGuestsModal}>
              <X className='size-5 text-zinc-400'/>
            </button>
          </div>

          <p className='text-sm text-zinc-400'>Os convidados irão receber e-mails para confirmar a participação na viagem</p>
        </div>

        <div className='flex flex-wrap gap-2'>
          {emailsToInvite.map(email => {
            return(
              <div key={email} className='flex gap-2  bg-zinc-800 py-1.5 px-2.5 rounded-md'>
                <span className='text-zinc-300'>{email}</span>
                <button type='button' onClick={()=>removeEmailFromInvite(email)}>
                  <X className='size-4 text-zinc-400'/>
                </button>
              </div>
            )
          })}
        </div>

        <div className='w-full h-px bg-zinc-800'/>

        <form onSubmit={addNewEmailToInvite} className='bg-zinc-950 p-2.5 flex gap-2 items-center rounded-lg border-zinc-800'>
          <div className='flex items-center flex-1 gap-2'>
            <AtSign className='size-5 text-zinc-400'/>
            <input
              className='bg-transparent placeholder-zinc-400 outline-none flex-1' 
              type="email"
              name='email'
              placeholder='Digite o email do convidado' 
            />
          </div>
          <button type='submit' className='flex items-center gap-2 bg-lime-300 text-lime-950 py-2 px-5 rounded-lg hover:bg-lime-400'>
            Convidar
            <Plus className='size-5'/>
          </button>
        </form>
      </div>
    </div>
  )
}