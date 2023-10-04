import { Headphones, MapPin } from '@phosphor-icons/react'
import { Login } from './Login'

export function Header() {
  return (
    <>
      <header className="bg-gradient-to-r from-[#FF8A29] to-[#CF5D00] to-70%">
        <div className="xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] m-auto flex justify-between items-center text-zinc-50 h-28 md:h-14">
          <p className="text-sm md:text-base">Loja de Calçados e Moda Online</p>
          <div className="flex gap-12">
            <button className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm md:text-base">
              <Headphones size={24} color="#ffffff" />
              Fale Conosco
            </button>
            <button className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm md:text-base">
              <MapPin size={24} color="#fcfcfc" />
              Encontrar uma loja física
            </button>
          </div>
        </div>
      </header>
      <Login />
    </>
  )
}
