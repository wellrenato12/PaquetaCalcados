import {
  CaretRight,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'
import { CardShoe } from '../CardShoe'
import * as Dialog from '@radix-ui/react-dialog'

import { ShoeSize } from '../ShoeSize'
import { Link, useNavigate } from 'react-router-dom'
import { CartProps, ShoesContext } from '../../context/ShoesContext'
import { useContext } from 'react'
import { ModalShoeSizes } from './ModalShoeSizes'
import { toast } from 'react-toastify'

interface ProductAppProps extends CartProps {
  product?: CartProps
}

export function ProductApp({
  id,
  image,
  name,
  price,
  description,
  product,
}: ProductAppProps) {
  const {
    isDisabled,
    TogglePurchaseButton,
    AddShoeToCart,
    cart,
    sizeSelected,
    GetSizeShoe,
    AddShoeSizeWhenPurchasing,
    data,
  } = useContext(ShoesContext)

  const navigate = useNavigate()
  const sizes = [34, 35, 36, 37, 38, 39, 40]
  const firstSpaceIndex = name?.indexOf(' ')
  const firtsName = name?.substring(0, firstSpaceIndex)
  const discountValue = (price?.discount || 0) * 100
  const discount = price?.discount || 0
  const value = price?.value || 0

  function handleAddShoeToCart() {
    const hasShoe = cart?.find((shoe) => shoe.name === product?.name)
    if (product && product.name !== hasShoe?.name && sizeSelected) {
      AddShoeToCart(product)
      AddShoeSizeWhenPurchasing(sizeSelected)
      toast('Produto adicionado ao carrinho.')
    } else {
      toast('Produto já adicionado ao carrinho.')
    }
    setTimeout(() => {
      GetSizeShoe(undefined)
      navigate('/cart')
    }, 2000)
  }

  return (
    <>
      <main className="flex flex-col xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] mx-auto my-8">
        <div className="flex items-center gap-4">
          <Link to="/">Paquetá</Link>
          <CaretRight size={20} color="#000000" />
          <span>{firtsName}</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div className="flex flex-col justify-between items-center md:items-start">
            <img
              className="object-cover w-[350px] h-[350px] md:w-[400px] md:h-[220px] lg:w-[470px] lg:h-[320px] xl:w-[600px] xl:h-[520px] md:my-20"
              src={image}
              alt="Sapato Selecionado"
            />
            <div className="flex flex-col gap-2">
              <p className="text-center md:text-start">Compartilhe</p>
              <div className="flex items-center gap-4">
                <a href="#">
                  <InstagramLogo size={24} color="#000000" />
                </a>
                <a href="#">
                  <FacebookLogo size={24} color="#000000" />
                </a>
                <a href="#">
                  <TwitterLogo size={24} color="#000000" />
                </a>
                <a href="#">
                  <YoutubeLogo size={24} color="#000000" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between px-4 md:px-0">
            <h1 className="font-semibold text-[30px] xl:text-[40px]">{name}</h1>
            <p className="text-[18px] text-[#383838]">
              Código do produto: {id}
            </p>
            <div className="flex flex-col mt-4">
              {discount > 0 && (
                <div className="flex items-center gap-6 mb-4">
                  <s>R$ {value.toFixed(2)}</s>
                  <span className="bg-green-500 rounded px-4">
                    {discountValue}% DE DESCONTO
                  </span>
                </div>
              )}
              <span className="text-[40px] font-bold">
                R${' '}
                {(discount
                  ? value - (value * discountValue) / 100
                  : value
                ).toFixed(2)}
              </span>
              <span className="text-[20px] text-[#383838] font-medium">
                ou 10x de R$ {(value / 10).toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4 mt-8">
              <span>Escolha a numeração:</span>
              <div className="flex items-center gap-4">
                {sizes.map((size) => {
                  return <ShoeSize key={size} size={size} paddingValue={4} />
                })}
              </div>
            </div>
            <Dialog.Root>
              <Dialog.Trigger
                asChild
                className="mt-4 w-[150px] hover:text-blue-400 underline mx-auto md:mx-0"
              >
                <button>Guia de tamanhos</button>
              </Dialog.Trigger>
              <ModalShoeSizes />
            </Dialog.Root>

            <button
              disabled={!sizeSelected}
              onClick={handleAddShoeToCart}
              className="mx-auto md:mx-0 w-[400px] rounded px-4 py-2 mt-16 font-bold text-[#ffffff] bg-gradient-to-r from-[#F99500] to-[#FFCD29] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              COMPRAR
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-20 mb-10 text-center md:text-start p-4 md:p-0">
          <h2 className="text-[30px] xl:text-[40px] font-semibold">
            DESCRIÇÃO DO PRODUTO
          </h2>
          <p className="font-light opacity-[.6]">{description}</p>
          <hr className="h-px my-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-[30px] font-bold">TALVEZ POSSA LHE INTERESSAR</h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center">
            {data.map((shoe, index) => {
              if (index < 4) {
                return (
                  <CardShoe
                    key={shoe.id}
                    name={shoe.name}
                    soldout={shoe.soldout}
                    price={shoe.price}
                    image={shoe.image}
                    id={shoe.id}
                    description={shoe.description}
                    isDisabled={isDisabled}
                    TogglePurchaseButton={TogglePurchaseButton}
                  />
                )
              }
              return null
            })}
          </div>
        </div>
      </main>
    </>
  )
}
