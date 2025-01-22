import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import Favorites from './pages/Favorites.jsx'
import { MovieProvider } from './context/MovieContext.jsx'
import "./css/Home.css"
import './css/Favorites.css'
import './css/MovieCard.css'
import './css/Navbar.css'
import './css/App.css'
function App() {

  return (
    <>
      <MovieProvider>
        <Navbar/>
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  )
}

export default App
