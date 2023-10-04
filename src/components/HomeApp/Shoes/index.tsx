import { useContext, useState } from 'react'
import PaquetaLogo from '../../../assets/Logo-Paqueta.png'
import { CardShoe } from '../../CardShoe'

import Adidas from '../../../assets/adidas.png'
import Bebece from '../../../assets/bebece.png'
import Viamarte from '../../../assets/viamarte.png'
import Dumond from '../../../assets/dumond.png'
import { ShoesContext } from '../../../context/ShoesContext'
import Slider from 'react-slick'

export function Shoes() {
  const { data, isDisabled, TogglePurchaseButton } = useContext(ShoesContext)
  const [isActive, setIsActive] = useState(false)

  function handleToggleActiveButton() {
    setIsActive((prevState) => !prevState)
  }

  return (
    <div
      id="/shoes"
      className="xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] m-auto"
    >
      <header className="flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="flex flex-col items-end leading-10">
          <img src={PaquetaLogo} alt="Logo Paquetá" />
          <h2 className="font-bold text-[60px] text-[#f57002]">Outlet</h2>
        </div>
        <p className="sm:w-[588px] text-[16px] md:text-[22px] text-center md:text-end">
          Você também pode escolher o seu novo sapato favorito de acordo com a
          sua numeração.
        </p>
      </header>
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center my-16">
        <h2 className="font-semibold text-[34px] text-[#121212]">DESTAQUES</h2>
        <button
          className="border-b-2 border-[#cf5d00] text-[18px] text-[#121212]"
          onClick={handleToggleActiveButton}
        >
          CONFERIR TUDO
        </button>
      </div>
      {isActive ? (
        <div className="flex justify-center flex-wrap gap-4">
          {data.map((shoe) => {
            return (
              <CardShoe
                key={shoe.id}
                image={shoe.image}
                name={shoe.name}
                price={shoe.price}
                soldout={shoe.soldout}
                id={shoe.id}
                description={shoe.description}
                TogglePurchaseButton={TogglePurchaseButton}
                isDisabled={isDisabled}
              />
            )
          })}
        </div>
      ) : (
        <Slider
          className="w-[350px] md:w-auto m-auto"
          dots
          infinite
          autoplay
          speed={500}
          slidesToShow={4} // Define quantos slides serão exibidos de uma vez
          slidesToScroll={4} // Define quantos slides serão movidos ao avançar/retroceder
          responsive={[
            {
              breakpoint: 1280, // Define o ponto de quebra para dispositivos de tela média
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 1024, // Define o ponto de quebra para dispositivos de tela média
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768, // Define o ponto de quebra para dispositivos de tela pequena
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            // {
            //   breakpoint: 640, // Define o ponto de quebra para dispositivos de tela pequena
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1,
            //   },
            // },
          ]}
        >
          {data.map((shoe) => {
            return (
              <CardShoe
                key={shoe.id}
                image={shoe.image}
                name={shoe.name}
                price={shoe.price}
                soldout={shoe.soldout}
                id={shoe.id}
                description={shoe.description}
                TogglePurchaseButton={TogglePurchaseButton}
                isDisabled={isDisabled}
              />
            )
          })}
        </Slider>
      )}
      <div className="my-[150px] flex flex-col text-center sm:text-start m-auto gap-20">
        <p className="font-semibold text-[34px]">
          AS MELHORES MARCAS ESTÃO AQUI!
        </p>
        <div className="flex flex-wrap  gap-16 items-end justify-center sm:justify-between">
          <img className="w-[127px] h-[86px]" src={Adidas} alt="Adidas" />
          <img className="w-[275px] h-[35px]" src={Viamarte} alt="Viamarte" />
          <img className="w-[212px] h-[57px]" src={Bebece} alt="Bebece" />
          <img className="w-[231px] h-[46px]" src={Dumond} alt="Dumond" />
        </div>
      </div>
    </div>
  )
}
