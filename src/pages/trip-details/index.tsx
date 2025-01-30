import { Calendar, CircleCheck, CircleDashed, Clock, Link2, Mail, MapPin, Plus, Settings2, Tag, User, UserCog, X } from "lucide-react";
import { useState } from "react";

export function TripDetailsPage(){
  const [isCreateActivityModalOpen, setIsCreateActiviyModalOpen] = useState(false)
  const [isRegisterLinkModalOpen, setIsRegisterLinkModalOpen] = useState(false)
  const [isGuestsManagerModalOpen, setIsGuestsManagerModalOpen] = useState(false)

  function openCreateActivyModal(){
    setIsCreateActiviyModalOpen(true)
  }

  function closeCreateActivyModal(){
    setIsCreateActiviyModalOpen(false)
  }

  function openRegisterLinkModal(){
    setIsRegisterLinkModalOpen(true)
  }

  function closeRegisterLinkModal(){
    setIsRegisterLinkModalOpen(false)
  }

  function openGuestsManagerModal(){
    setIsGuestsManagerModalOpen(true)
  }

  function closeGuestsManagerModal(){
    setIsGuestsManagerModalOpen(false)
  }

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

          <button 
            className=' flex items-center gap-2 bg-zinc-800 text-zinc-200 py-2 px-5 font-medium rounded-lg hover:bg-zinc-700'>
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
            <button
              onClick={openCreateActivyModal} 
              className="bg-lime-300 flex items-center gap-2 py-2 px-5 font-medium text-lime-950 rounded-lg hover:bg-lime-400"
            >
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

        <div className="w-80 space-y-6">

          <div className="space-y-6">
            <h2 className="text-zinc-50 text-xl font-semibold">Links importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="text-zinc-100 block font-medium">Reserva do AirBnB</span>
                  <a href='#' className="text-zinc-400 text-xs block font-medium truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/10470001145646878456165</a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0"/>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="text-zinc-100 block font-medium">Reserva do AirBnB</span>
                  <a href='#' className="text-zinc-400 text-xs block font-medium truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/10470001145646878456165</a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0"/>
              </div>
            </div>
              
            <button 
              type="button"
              onClick={openRegisterLinkModal}
              className="w-full bg-zinc-800 flex justify-center items-center gap-2 px-5 py-2 text-zinc-200 font-semibold rounded-lg hover:bg-zinc-700"
            >
              <Plus className="size-5 text-zinc-200"/>
              Cadastrar novo link
            </button>
          </div>
          
          <div  className="w-full h-px bg-zinc-800"/>

          <div className="space-y-6">
            <h2 className="text-zinc-50 text-xl font-semibold">Convidados</h2>
            <div className="space-y-5">
              <div className="flex gap-5 items-center justify-between ">
                <div className="space-y-1.5">
                  <span className="text-zinc-100 font-semibold block">Maurício Augusto</span>
                  <span className="text-zinc-400 text-sm block">mrc_augusto@hotmail.com</span>
                </div>
                <CircleDashed className="text-zinc-400 size-5"/>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex gap-5 items-center justify-between ">
                <div className="space-y-1.5">
                  <span className="text-zinc-100 font-semibold block">Maurício Augusto</span>
                  <span className="text-zinc-400 text-sm block">mrc_augusto@hotmail.com</span>
                </div>
                <CircleDashed className="text-zinc-400 size-5"/>
              </div>
            </div>
          </div>
          
          
          <button
            onClick={openGuestsManagerModal} 
            className="w-full px-5 py-2 bg-zinc-800 flex items-center justify-center gap-2 text-zinc-200 font-semibold rounded-lg hover:bg-zinc-700"
          >
            <UserCog className="size-5 text-zinc-200"/>
            Gerenciar convidados
          </button>

        </div>
      </main>

      {/* Modais */}

      {/* MOdal Criar Atividade */}
      {isCreateActivityModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[540px] bg-zinc-900 px-6 py-5 flex flex-col space-y-5 rounded-xl shadow-shape">

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-white text-lg font-bold">Cadastrar atividade</h2>
                <button type="button" onClick={closeCreateActivyModal}>
                  <X className="size-5 text-zinc-400"/>
                </button>
              </div>

              <p className="text-sm text-zinc-400">
                Todos os convidados podem visualizar as atividades
              </p>
            </div>

            <form className="space-y-3">
              <div className="flex items-center flex-1 gap-2.5 px-4 py-2.5 bg-zinc-950 rounded-lg">
                <Tag className="size-5 text-zinc-400"/>
                <input 
                  type="text" 
                  className="flex-1 bg-transparent placeholder-zinc-400 outline-none"
                  placeholder="Qual a atividade?"
                />
              </div>

              <div className="flex justify-between gap-2">
                <div className="flex-1 flex items-center  gap-2.5 px-4 py-2.5 bg-zinc-950 rounded-lg">
                  <Calendar className="size-5 text-zinc-400"/>
                  <input 
                    type="text"
                    className="bg-transparent placeholder-zinc-400 border-zinc-800 outlne-none"
                    placeholder="20 de agosto" 
                  />
                </div>
                <div className="w-[140px] flex justify-center items-center gap-2.5 bg-zinc-950 px-4 py-2.5 rounded-lg">
                  <Clock className="size-5 text-zinc-400"/>
                  <input 
                    type="text" 
                    className=" flex-1 bg-transparent placeholder-zinc-400 border-zinc-800 outlne-none"
                    placeholder="Horário"
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-lime-300 px-5 py-2 font-semibold rounded-lg hover:bg-lime-400"
              >
                Salvar atividade
              </button>
            </form>

          </div>
        </div>
      )}
      {/* Fim Modal Criar Atividade */}

      {/* Modal Cadastrar Link */}
        {isRegisterLinkModalOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[540px] bg-zinc-900 px-6 py-5 space-y-5 shadow-shape rounded-xl">
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-white text-lg font-semibold">Cadastrar link</h2>
                  <button type="button" onClick={closeRegisterLinkModal}>
                    <X className="size-5 text-zinc-400"/>
                  </button>
                </div>
                <p className="text-sm text-zinc-400">
                  Todos convidados podem visualizar os links importantes
                </p>
              </div>

              <form className="space-y-3">
                <div className="flex-1 flex items-center gap-2.5 px-4 py-2.5 bg-zinc-950 rounded-lg text-zinc-100">
                  <Tag className="size-5 text-zinc-400"/>
                  <input 
                    type="text"
                    className="flex-1 bg-transparent placeholder-zinc-400 border-zinc-800 outline-none"
                    placeholder="Título do link" 
                  />
                </div>
                <div className="flex-1 flex items-center gap-2.5 px-4 py-2.5 bg-zinc-950 rounded-lg text-zinc-100">
                  <Link2 className="size-5 text-zinc-400"/>
                  <input 
                    type="text"
                    className="flex-1 bg-transparent placeholder-zinc-400 border-zinc-800 outline-none"
                    placeholder="URL" 
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-11 bg-lime-300 px-5 py-2 text-lime-950 font-semibold rounded-lg hover:bg-lime-400"
                >
                  Salvar Link
                </button>
              </form>

            </div>
          </div>
        )}
      {/* Fim Modal Cadastrar Link */}

      {/* Modal Gerenciar Usuarios */}

      {isGuestsManagerModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[540px] bg-zinc-900 px-6 py-5 shadow-shape rounded-xl space-y-5">

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-white text-lg font-semibold">Confirmar participação</h2>
                <button
                  onClick={closeGuestsManagerModal}
                  type="button"
                  >
                  <X className="size-5 text-zinc-400"/>
                </button>
              </div>

              <p className="text-zinc-400 text-sm">
                Você foi convidado(a) para participar de uma viagem para <span className="text-zinc-100 font-bold">Florianópolis</span>, Brasil nas datas de <span className="text-zinc-100 font-bold">16 a 27 de Agosto de 2024</span>.
              </p>
              <br />
              <p className="text-zinc-400 text-sm">
                Para confirmar sua presença na viagem, preencha os dados abaixo:
              </p>
            </div>

            <form className="space-y-3">
              <div className="flex-1 flex gap-2 h-14 items-center px-4 py-2.5 bg-zinc-950 rounded-lg">
                <User className="size-5 text-zinc-400"/>
                <input 
                  type="text" 
                  className="bg-transparent flex-1 placeholder-zinc-400 text-zinc-100 border-zinc-800 outline-none"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="flex-1 flex gap-2 h-14 items-center px-4 py-2.5 bg-zinc-950 rounded-lg">
                <Mail className="size-5 text-zinc-400"/>
                <input 
                  type="email" 
                  className="bg-transparent flex-1 placeholder-zinc-400 text-zinc-100 border-zinc-800 outline-none"
                  placeholder="Seu email"
                />
              </div>

              <button
                type="submit"
                className="w-full justify-center items-center bg-lime-300 h-11 px-5 py-2 rounded-lg text-lime-950 hover:bg-lime-400"
              >
                Confirmar minha presença
              </button>
            </form>

          </div>
          
        </div>
      )}

      {/* Fim Modal Gerenciar Usuaários */}

      {/* Fim Modais */}

    </div>
  )
}