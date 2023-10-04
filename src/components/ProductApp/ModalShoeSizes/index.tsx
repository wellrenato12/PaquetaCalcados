import * as Dialog from '@radix-ui/react-dialog'
import ShoeSizes from '../../../assets/guia-de-tamanhos.png'

export function ModalShoeSizes() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-black bg-opacity-80" />
      <Dialog.Content className="bg-zinc-50 rounded fixed top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
        <img src={ShoeSizes} alt="Guia de tamanhos de sapatos" />
      </Dialog.Content>
    </Dialog.Portal>
  )
}
