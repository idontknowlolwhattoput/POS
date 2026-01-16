import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router"
import { Theme } from '@radix-ui/themes'
import Login from './pages/home/login'

function App() {
  return (
    <BrowserRouter>
    <Theme>
      <Routes>
        <Route path="/" element={<Login />}/>
      </Routes>
    </Theme>
    </BrowserRouter>
  )
}

export default App
