import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { toast } from 'react-toastify'

interface ShoesProviderProps {
  children: ReactNode
}

export interface FavoriteShoes {
  name: string
  price: {
    value: number
    discount: number
  }
  soldout: boolean
  image: string
  hasFavorite: boolean
  id: string
  description: string
  isDisabled: boolean
  TogglePurchaseButton: () => void
}

export interface ShoesProps {
  id: string
  name: string
  price: {
    value: number
    discount: number
  }
  soldout: boolean
  image: string
  description: string
}

export interface CartProps {
  image?: string
  name?: string
  id?: string
  price?: {
    value: number
    discount: number
  }
  soldout?: boolean
  description?: string
}

interface ShoesContextProviderProps {
  data: Array<ShoesProps>
  favoriteShoesList: Array<FavoriteShoes>
  product: CartProps | undefined
  isDisabled: boolean
  cart: CartProps[] | undefined
  sizeSelected: number | undefined
  sizes: number[]
  amount: number
  Increment: () => void
  Decrement: () => void
  handleRemoveFromCart: (index: number) => void
  AddShoeSizeWhenPurchasing: (number: number) => void
  GetSizeShoe: (size: number | undefined) => void
  HasShoeAlreadyExist: (shoeId: string, CallBack: () => void) => void
  TogglePurchaseButton: () => void
  ProductShow: (shoe: CartProps) => void
  AddFavoriteShoe: (ShoeFavorite: FavoriteShoes) => void
  RemoveFavoriteShoe: (shoeName: string) => void
  AddShoeToCart: (shoe: CartProps) => void
}

export const ShoesContext = createContext({} as ShoesContextProviderProps)

export function ShoesContextProvider({ children }: ShoesProviderProps) {
  const [data, setData] = useState<ShoesProps[]>([])
  const [favoriteShoesList, setFavoriteShoesList] = useState<FavoriteShoes[]>(
    [],
  )
  const [cart, setCart] = useState<CartProps[] | undefined>(undefined)
  const [product, setproduct] = useState<CartProps | undefined>(undefined)
  const [isDisabled, setIsDisabled] = useState(false)
  const [sizeSelected, setSizeSelected] = useState<number | undefined>(
    undefined,
  )
  const [sizes, setSizes] = useState<number[]>([])
  const [amount, setAmount] = useState(0)

  const Increment = useCallback(() => {
    if (cart && cart.length > 0) {
      const totalAmount = cart.reduce((acc, { price }) => {
        if (price?.discount) {
          const discountValue = price.discount * 100
          return acc + price.value - (price.value * discountValue) / 100
        } else if (price?.value) {
          return acc + price?.value
        }
        return acc
      }, 0)
      setAmount(totalAmount)
    }
  }, [cart])

  function Decrement() {
    if (cart && cart.length > 0) {
      const totalAmount = cart.reduce((acc, { price }) => {
        if (price?.discount) {
          const discountValue = price.discount * 100
          return acc + price.value - (price.value * discountValue) / 100
        } else if (price?.value) {
          return acc + price?.value
        }
        return acc
      }, 0)
      setAmount((prevState) => prevState - totalAmount)
    }
  }

  function handleRemoveFromCart(index: number) {
    setCart((prevCart) => prevCart?.filter((_, i) => i !== index))
    setSizes((prevSizes) => prevSizes.filter((_, i) => i !== index))
  }

  function AddShoeSizeWhenPurchasing(number: number) {
    setSizes((state) => [...state, number])
  }

  function GetSizeShoe(size: number | undefined) {
    setSizeSelected(size)
  }

  function TogglePurchaseButton() {
    setIsDisabled((prevState) => !prevState)
  }

  function AddFavoriteShoe(FavoriteShoe: FavoriteShoes) {
    setFavoriteShoesList((state) => [...state, FavoriteShoe])
  }

  function RemoveFavoriteShoe(shoeName: string) {
    const updateFavoriteShoesList = favoriteShoesList.filter(
      (shoe) => shoe.name !== shoeName,
    )
    setFavoriteShoesList(updateFavoriteShoesList)
  }

  function ProductShow(shoe: CartProps) {
    setproduct(shoe)
  }

  function AddShoeToCart(shoe: CartProps) {
    setCart((state) => {
      if (state === undefined) {
        return [shoe]
      }
      return [...state, shoe]
    })
  }

  function HasShoeAlreadyExist(shoeId: string, CallBack: () => void) {
    const hasShoe = cart?.find((shoe) => shoe.id === shoeId)
    if (hasShoe) {
      toast('Sapato Já adicionado!')
    } else {
      return CallBack()
    }
  }

  async function fetchData() {
    const response = await api.get('')

    setData(response.data)
  }

  useEffect(() => {
    Increment()
  }, [Increment])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ShoesContext.Provider
      value={{
        data,
        AddFavoriteShoe,
        favoriteShoesList,
        RemoveFavoriteShoe,
        product,
        ProductShow,
        TogglePurchaseButton,
        isDisabled,
        AddShoeToCart,
        cart,
        HasShoeAlreadyExist,
        GetSizeShoe,
        sizeSelected,
        AddShoeSizeWhenPurchasing,
        sizes,
        handleRemoveFromCart,
        amount,
        Increment,
        Decrement,
      }}
    >
      {children}
    </ShoesContext.Provider>
  )
}
