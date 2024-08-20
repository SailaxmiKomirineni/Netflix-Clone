import React from 'react'
import LoginPage from './components/LoginPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './components/SignIn'
import HomePage from './components/HomePage'

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/login" element={<SignIn/>}/>
                <Route path="/home" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App

