import { Outlet } from 'react-router-dom'

import './App.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from './components/Header'
import Footer from './components/Footer'

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
