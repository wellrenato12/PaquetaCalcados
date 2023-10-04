import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ShoesContextProvider } from './context/ShoesContext'
import { ToastContainer } from 'react-toastify'

import './styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function App() {
  return (
    <BrowserRouter>
      <ShoesContextProvider>
        <Router />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </ShoesContextProvider>
    </BrowserRouter>
  )
}
