import React from 'react'
import Header from './Header'
import Home from '../Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'

function Content() {
  return (
    <div className='content'>
      <Header />
      <div className='content-inner'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default Content