import { Bag, Heart, User } from '@phosphor-icons/react'
import Logo from '../../../../assets/Logo-Paqueta.png'
import { Link } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { LoginModal } from '../LoginModal'
import { useContext } from 'react'
import { ShoesContext } from '../../../../context/ShoesContext'
import { Count } from '../Count'

export function Login() {
  const { cart, favoriteShoesList } = useContext(ShoesContext)

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] m-auto mt-4">
      <img
        className="lg:w-[297px] w-[160px] lg:h-[86px] h-[55px]"
        src={Logo}
        alt="Logo"
      />
      <div className="flex gap-8 mt-4">
        <Link
          to="/favorites"
          className="flex flex-col md:flex-row gap-2 items-center"
        >
          {favoriteShoesList.length > 0 ? (
            <div className="relative">
              <Count count={favoriteShoesList.length} />
              <Heart size={32} color="#000000" />
            </div>
          ) : (
            <Heart size={32} color="#000000" />
          )}
          Lista de desejos
        </Link>
        <Link
          to="/cart"
          className="flex flex-col md:flex-row gap-2 items-center"
        >
          {cart && cart?.length > 0 ? (
            <div className="relative">
              <Count count={cart?.length} />
              <Bag size={32} color="#000000" />
            </div>
          ) : (
            <Bag size={32} color="#000000" />
          )}
          Sacola
        </Link>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="flex flex-col md:flex-row p-2 rounded gap-2 items-center hover:bg-orange-500 transition">
              <User size={32} color="#000000" />
              Entrar
            </button>
          </Dialog.Trigger>
          <LoginModal />
        </Dialog.Root>
      </div>
    </div>
  )
}
