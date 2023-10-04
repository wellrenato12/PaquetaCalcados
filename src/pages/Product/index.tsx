import { useContext } from 'react'
import { ProductApp } from '../../components/ProductApp'
import { ShoesContext } from '../../context/ShoesContext'

export function Product() {
  const { product } = useContext(ShoesContext)

  return (
    <>
      <ProductApp
        key={product?.id}
        name={product?.name}
        id={product?.id}
        price={product?.price}
        soldout={product?.soldout}
        image={product?.image}
        description={product?.description}
        product={product || undefined}
      />
    </>
  )
}
