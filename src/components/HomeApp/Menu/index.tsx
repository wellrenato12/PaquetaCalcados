import { Link } from 'react-scroll'
import LogoMenu from '../../../assets/Logo-menu.png'

export function Menu() {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap p-4 gap-8 justify-between xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] m-auto mb-4 font-medium text-[#383838]">
        <a className="pointer-events-none" href="#">
          Novidades
        </a>
        <a className="pointer-events-none" href="#">
          Feminino
        </a>
        <a className="pointer-events-none" href="#">
          Masculino
        </a>
        <a className="pointer-events-none" href="#">
          Paquetá Esportes
        </a>
        <a className="pointer-events-none" href="#">
          Outlet
        </a>
        <a className="pointer-events-none" href="#">
          Cashback
        </a>
      </div>
      <div className="flex items-center relative">
        <img
          className="sm:object-cover h-48 sm:h-auto w-full"
          src={LogoMenu}
          alt="Logo do menu"
        />
        <div className="flex flex-col absolute right-0 w-[110px] 2xl:w-[450px] xl:w-[410px] lg:w-[300px] md:w-[250px] sm:w-[170px]">
          <h1 className="2xl:text-[60px] xl:text-[50px] lg:text-[40px] md:text-[30px] text-[#383838] font-semibold">
            Tênis Casual
          </h1>
          <h2 className="text-[#CF5D00] 2xl:text-[50px] xl:text-[40px] lg:text-[30px] md:text-[20px] leading-3">
            Masculino
          </h2>
          <div className="flex flex-col mt-8 xl:mt-16">
            <p className="text-[#383838] font-medium">A partir de</p>
            <span className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-[#383838] font-bold">
              R$ 79,99
            </span>
          </div>
          <Link to="/shoes" spy={true} smooth={true} offset={0} duration={1000}>
            <button className="mt-4 text-[#ffffff] bg-gradient-to-r from-[#F99500] to-[#FFCD29] text-[10px] md:text-[18px] px-2 py-1 rounded w-[80px] md:w-40">
              Aproveite
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
