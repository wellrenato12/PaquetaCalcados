import { CaretRight, Bag } from '@phosphor-icons/react'
import { CardCart } from './CardCart'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShoesContext } from '../../context/ShoesContext'

export function CartApp() {
  const { cart, sizes, handleRemoveFromCart, amount } = useContext(ShoesContext)

  return (
    <main className="flex flex-col xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] mx-auto my-8">
      <div className="flex items-center gap-4">
        <Link to="/">Paquetá</Link>
        <CaretRight size={20} color="#000000" />
        <span>Sacola</span>
      </div>
      <h1 className="mt-20 text-[30px] xl:text-[40px] font-bold">
        Sacola de compras
      </h1>
      <div className="flex  gap-4 text-[25px] font-bold mt-8 mb-12">
        <h2>Valor Total:</h2>
        <h2 className="text-green-600">R$ {amount.toFixed(2)}</h2>
      </div>

      {cart ? (
        cart.map((item, index) => {
          if (item && sizes[index]) {
            return (
              <CardCart
                key={item?.id}
                name={item?.name}
                id={item?.id}
                image={item?.image}
                price={item?.price}
                soldout={item?.soldout}
                description={item?.description}
                sizes={sizes[index]}
                onDelete={() => handleRemoveFromCart(index)}
              />
            )
          }
          return undefined
        })
      ) : (
        <div className="flex justify-center items-center gap-4 mt-8">
          <p className="text-[24px]">Sacola Vazia</p>
          <Bag size={32} />
        </div>
      )}
    </main>
  )
}
