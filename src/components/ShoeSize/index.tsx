import { useContext } from 'react'
import { ShoesContext } from '../../context/ShoesContext'

interface ShoeSizeProps {
  size: number
  paddingValue: number
}

export function ShoeSize({ size, paddingValue }: ShoeSizeProps) {
  const { GetSizeShoe, sizeSelected } = useContext(ShoesContext)

  function handleGetSizeShoe() {
    GetSizeShoe(size)
  }

  return (
    <button
      onClick={handleGetSizeShoe}
      className={`p-${paddingValue} ${
        sizeSelected === size
          ? 'bg-gradient-to-r from-[#F99500] to-[#FFCD29]'
          : 'bg-white'
      } border border-[#383838] rounded hover:bg-zinc-200 transition`}
    >
      {size}
    </button>
  )
}
