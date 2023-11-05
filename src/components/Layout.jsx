import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <main>
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout