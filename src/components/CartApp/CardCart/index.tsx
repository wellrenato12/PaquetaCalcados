import { Trash } from '@phosphor-icons/react'
import { useContext } from 'react'
import { ShoesContext } from '../../../context/ShoesContext'

interface CardCartProps {
  id?: string
  name?: string
  image?: string
  price?: {
    value: number
    discount: number
  }
  soldout?: boolean
  description?: string
  sizes: number
  onDelete: () => void
}

export function CardCart({
  id,
  name,
  image,
  price,
  sizes,
  onDelete,
}: CardCartProps) {
  const { Decrement } = useContext(ShoesContext)

  const discountValue = (price?.discount || 0) * 100
  const value = price?.value || 0

  function handleSubtractAmount() {
    Decrement()
    onDelete()
  }

  return (
    <div className="bg-customRgba px-12 pt-12 rounded">
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center md:items-start">
        <img className="w-[200px] h-[180px]" src={image} alt="Sapato" />
        <div className="flex flex-col items-center w-[380px] lg:w-[500px]">
          <h2 className="text-[22px] xl:text-[30px] font-bold">{name}</h2>
          <p className="text-[#999999]">{id}</p>
          <div className="flex flex-col gap-2 mt-8">
            <span>
              <strong>Numeração: </strong>
              {sizes}
            </span>
            <span>
              <strong>Quantidade: </strong>1
            </span>
            <span>
              <strong>Preço: </strong>
              R${' '}
              {price?.discount
                ? (value - (value * discountValue) / 100).toFixed(2)
                : price?.value.toFixed(2)}
            </span>
          </div>
        </div>
        <button
          onClick={handleSubtractAmount}
          className="flex items-center gap-2 mt-8 md:mt-0"
        >
          <Trash size={32} color="#000000" />
          Remover
        </button>
      </div>
      <hr className="h-px mt-14 bg-gray-200 border-0 dark:bg-customRgba2"></hr>
    </div>
  )
}
