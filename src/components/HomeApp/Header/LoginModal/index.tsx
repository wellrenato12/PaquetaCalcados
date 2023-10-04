import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

export function LoginModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-black bg-opacity-80" />
      <Dialog.Content className="bg-zinc-50 rounded p-4 fixed top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center">
          <Dialog.Title className="font-bold">Login</Dialog.Title>
          <Dialog.Close>
            <X size={24} />
          </Dialog.Close>
        </div>
        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-4 w-[350px] ">
              <label className="w-[56px]">E-mail:</label>
              <input className="flex-1 border rounded px-2 py-1" type="email" />
            </div>
            <div className="flex items-center gap-4 w-[350px]">
              <label className="w-[56px]">Senha:</label>
              <input
                className="flex-1 border rounded px-2 py-1"
                type="password"
              />
            </div>
          </div>
          <button className="m-auto px-4 py-2 bg-orange-400 rounded w-36 hover:bg-orange-500 transition">
            Entrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
