import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Body from './Body'
import Body2 from './Body2'
import Signin from './Signin'
import Payments from './Payments'
import Footer from './Footer'

function Router1() {
  return (
    <div>
     
     <BrowserRouter>
     <Routes>

    <Route path='/' element={<><Header/><Body/><Body2/><Footer/></>}></Route>
    <Route path='signin' element={<><Header/><Signin/></>}></Route>
   

     </Routes>
     </BrowserRouter>

    </div>
  )
}

export default Router1