import { Fashion } from './Fashion'
import { Footer } from './Footer'
import { Header } from './Header'
import { Menu } from './Menu'
import { PurchaseInformation } from './PurchaseInformation'
import { Shoes } from './Shoes'

export function HomeApp() {
  return (
    <>
      <Header />
      <Menu />
      <PurchaseInformation />
      <Fashion />
      <Shoes />
      <Footer />
    </>
  )
}
