import { Outlet } from 'react-router-dom'
import { Footerdemo } from './ui/footer-section'
import Navbar from './MegaMenuNavbar'
import { useEffect } from 'react'

const Layout = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="">
      <header className="sticky top-0 z-[50] bg-background shadow-md w-full">
        <Navbar />
      </header>
      <section className="select-none">
        <Outlet />
      </section>
      <footer className="">
        <Footerdemo />
      </footer>
    </div>
  )
}

export default Layout
