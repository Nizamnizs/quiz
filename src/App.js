import React from 'react'
import Home from './Home'
import Quiz from './Quiz'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'

function App() {
  return (
    <div>
    <Header></Header>
    
    <Routes>

    <Route path='' element={ <Home></Home>}/>
    <Route path='/quiz' element={<Quiz></Quiz>}/>

    </Routes>
    </div>

  )
}

export default App