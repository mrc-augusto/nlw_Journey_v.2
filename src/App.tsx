import {MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus} from 'lucide-react'
import { FormEvent, useState } from 'react'
export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestsModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState([
    'mrc_augusto@hotmail.com',
    'aryaugusto6@gmail.com'
  ])

  function openGuestsInput(){
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput(){
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal(){
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal(){
    setIsGuestsModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if(!email){
      return
    }

    if(emailsToInvite.includes(email)){
      return
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvite(emailToRemove: string){
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
    setEmailsToInvite(newEmailList)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/assets/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className='space-y-4'>
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

          {isGuestsInputOpen && (
            <div className="h-16 px-4 bg-zinc-900 flex items-center shadow-shape rounded-xl p-5 gap-3">
              <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className='size-5 text-zinc-400'/>
                <span className='text-zinc-400 text-lg flex-1 text-left'>Quem estará na viagem?</span>  
              </button>

              <div className='w-px h-6 bg-zinc-800'/>

              <button 
                className=" flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
              >
                Confirmar viagem
                <ArrowRight className='size-5 '/>
              </button>
            </div>
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br/>
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
        </p>      
      </div>

      {isGuestModalOpen && (
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
      )}
    </div>
  )
}

