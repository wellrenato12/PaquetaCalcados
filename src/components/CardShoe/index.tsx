import { Heart } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'
import { ShoesContext } from '../../context/ShoesContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

interface FavoriteShoesProps {
  name: string
  price: {
    value: number
    discount: number
  }
  soldout: boolean
  image: string
  id: string
  description: string
  isDisabled: boolean
  TogglePurchaseButton: () => void
}

export function CardShoe({
  name,
  price,
  soldout,
  image,
  id,
  description,
  isDisabled,
  TogglePurchaseButton,
}: FavoriteShoesProps) {
  const [hasFavorite, setHasFavorite] = useState(false)
  const [isReloading, setIsReloading] = useState(false)
  const navigate = useNavigate()
  const {
    AddFavoriteShoe,
    RemoveFavoriteShoe,
    ProductShow,
    HasShoeAlreadyExist,
  } = useContext(ShoesContext)

  const shoe = {
    name,
    price,
    soldout,
    image,
    hasFavorite,
    id,
    description,
    isDisabled,
    TogglePurchaseButton,
  }

  useEffect(() => {
    const storedNameString = localStorage.getItem('favoriteShoes')
    const storedName = storedNameString ? JSON.parse(storedNameString) : []
    if (storedName.includes(name)) {
      setHasFavorite(true)
    }
  }, [name])

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      setIsReloading(true)
      localStorage.clear()
    })
    return () => {
      setIsReloading(false)
    }
  }, [isReloading])

  function handleToggleFavoriteShoe() {
    setHasFavorite((prevState) => !prevState)

    const storedNameString = localStorage.getItem('favoriteShoes')
    const storedName = storedNameString ? JSON.parse(storedNameString) : []

    if (hasFavorite) {
      RemoveFavoriteShoe(name)
      toast('Item removido dos favoritos!')
      const updatedFavorites = storedName.filter(
        (name: string) => name !== shoe.name,
      )
      localStorage.setItem('favoriteShoes', JSON.stringify(updatedFavorites))
    } else {
      AddFavoriteShoe(shoe)
      toast('Item adicionado aos favoritos!')
      storedName.push(name)
      localStorage.setItem('favoriteShoes', JSON.stringify(storedName))
    }
  }

  function RedirectToProduct() {
    toast('Redirecionando ...')
    ProductShow(shoe)
    TogglePurchaseButton()
    setTimeout(() => {
      navigate('/product')
      window.scrollTo({ top: 0, behavior: 'instant' })
      TogglePurchaseButton()
    }, 2000)
  }

  function HandleShoeAlreadyExist() {
    HasShoeAlreadyExist(id, RedirectToProduct)
  }

  function NotifyProduct() {
    toast('Notificação programada!')
  }

  return (
    <div className="flex justify-center mb-8">
      {soldout ? (
        <div className="w-[307px] h-[412px] shadow rounded my-6">
          <div className="bg-[#CF5D00] flex items-center justify-center text-[#ffffff] font-bold h-[32px] rounded-tl rounded-tr">
            Produto Esgotado
          </div>
          <div className="flex flex-col gap-4 px-[26px] my-2">
            <div className="relative">
              <button
                onClick={handleToggleFavoriteShoe}
                className="absolute right-0"
              >
                {shoe.hasFavorite === true ? (
                  <Heart className="" size={32} color="#CF5D00" weight="fill" />
                ) : (
                  <Heart className="" size={32} color="#CF5D00" />
                )}
              </button>
              <img
                className="w-[210px] h-[149px] hover:scale-125 transition"
                src={image}
                alt="Imagem do Sapato"
              />
            </div>
            <p className="h-[40px] font-medium text-[14px]">{name}</p>
            <span className="font-bold text-[20px]">
              R$ {price.value.toFixed(2)}
            </span>
            <span className="text-[#383838] text-[12px]">
              OU 10x R$ {(price.value / 10).toFixed(2)}
            </span>
            <button
              onClick={NotifyProduct}
              className="flex items-center justify-center rounded bg-[#CF5D00] text-[#ffffff] font-semibold text-center w-[257px] h-[46px]"
            >
              ME AVISE QUANDO CHEGAR
            </button>
          </div>
        </div>
      ) : (
        <div className="w-[307px] h-[412px] shadow rounded my-6">
          <div className="bg-[#ffffff] flex items-center justify-center text-[#ffffff] font-bold h-[32px] rounded-tl rounded-tr"></div>
          <div className="flex flex-col gap-4 px-[26px] my-2">
            <div className="relative">
              <button
                onClick={handleToggleFavoriteShoe}
                className="absolute right-0 group-hover:fill-[#CF5D00] transition"
              >
                {shoe.hasFavorite === true ? (
                  <Heart className="" size={32} color="#CF5D00" weight="fill" />
                ) : (
                  <Heart className="" size={32} color="#CF5D00" />
                )}
              </button>
              <img
                className="w-[210px] h-[149px] hover:scale-125 transition"
                src={image}
                alt="Imagem do Sapato"
              />
            </div>
            <p className="h-[40px] font-medium text-[14px]">{name}</p>
            <span className="font-bold text-[20px]">
              R$ {price.value.toFixed(2)}
            </span>
            <span className="text-[#383838] text-[12px]">
              OU 10x R$ {(price.value / 10).toFixed(2)}
            </span>
            <button
              disabled={isDisabled}
              onClick={HandleShoeAlreadyExist}
              className={`flex items-center justify-center rounded text-[#ffffff] bg-gradient-to-r from-[#F99500] to-[#FFCD29] text-center w-[257px] h-[46px] ${
                !isDisabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
              }`}
            >
              COMPRAR
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
