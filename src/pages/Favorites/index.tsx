import { CaretRight, Heart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { ShoesContext } from '../../context/ShoesContext'
import { CardShoe } from '../../components/CardShoe'
import { Link } from 'react-router-dom'

export function Favorites() {
  const { favoriteShoesList } = useContext(ShoesContext)

  return (
    <main className="flex flex-col xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] mx-auto my-8">
      <div className="flex items-center gap-4 pl-4">
        <Link to="/">Paquetá</Link>
        <CaretRight size={20} color="#000000" />
        <span>Favoritos</span>
      </div>
      <h1 className="mt-20 mb-12 text-[30px] xl:text-[40px] font-bold pl-4">
        Lista de favoritos
      </h1>
      {favoriteShoesList.length > 0 ? (
        <>
          <div className="flex justify-center flex-wrap gap-4">
            {favoriteShoesList.map((favoriteShoe) => {
              return (
                <CardShoe
                  key={favoriteShoe.name}
                  name={favoriteShoe.name}
                  price={favoriteShoe.price}
                  soldout={favoriteShoe.soldout}
                  image={favoriteShoe.image}
                  id={favoriteShoe.id}
                  description={favoriteShoe.description}
                  isDisabled={favoriteShoe.isDisabled}
                  TogglePurchaseButton={favoriteShoe.TogglePurchaseButton}
                />
              )
            })}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center gap-4 mt-8">
          <p className="text-[24px]">Lista de favoritos vazia</p>
          <Heart size={32} />
        </div>
      )}
    </main>
  )
}
