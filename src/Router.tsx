import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { Cart } from './pages/Cart'
import { Favorites } from './pages/Favorites'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}
