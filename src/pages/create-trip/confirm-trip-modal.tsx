import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps{
  closeConfirmTripModal: ()=>void
  createTrip: (event: FormEvent<HTMLFormElement>)=>void
}
export function ConfirmTripModal({
  closeConfirmTripModal, 
  createTrip
}: ConfirmTripModalProps){
  return(
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5'>

        <div className='space-y-2'>     
          <div className='flex items-center justify-between'>
            <h2 className='text-white text-lg font-semibold'>Confirmar criação da viagem</h2>
            <button type='button' onClick={closeConfirmTripModal}>
              <X className='size-5 text-zinc-400'/>
            </button>
          </div>

          <p className='text-sm text-zinc-400'>
            Para concluir a criação da viagem para <span className='text-zinc-100 font-bold'>Florianópolis, Brasil</span> nas datas de <span className='text-zinc-100 font-bold'>16 a <br/> 27 de Agosto de 2024</span> preencha seus dados abaixo:
          </p>
        </div>

        <form
          onSubmit={createTrip}
          className='space-y-3' 
        >
          <div className='flex h-14 px-5 gap-2 bg-zinc-950 items-center flex-1 rounded-lg'>
            <User className='size-5 text-zinc-400'/>
            <input
              className='flex-1 bg-transparent placeholder-zinc-400 border-zinc-800 outline-none  ' 
              name='name'
              placeholder='Seu nome completo' 
            />
          </div>

          <div className='flex h-14 px-5 gap-2 bg-zinc-950 items-center flex-1 rounded-lg'>
            <Mail className='size-5 text-zinc-400'/>
            <input
              className='flex-1 bg-transparent placeholder-zinc-400 border-zinc-800 outline-none  ' 
              type="email"
              name='email'
              placeholder='Seu e-mail pessoal' 
            />
          </div>

          <button
            type='submit' 
            className='w-full justify-center items-center bg-lime-300 text-lime-950 h-11 px-5 rounded-lg hover:bg-lime-400'
          >
            Confirmar criação de viagem
          </button>
        </form>
      </div>
    </div>
  )
}