import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header.jsx'


function App() {

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
