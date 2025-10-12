import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import Note from './pages/Note.jsx'
import Create from './pages/Create.jsx'
import toast from 'react-hot-toast'

const App = () => {
  return (
    < div data-theme="cupcake">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/note/:id' element={<Note />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  )
}

export default App
