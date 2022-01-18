import React from 'react'
import ReactDOM from 'react-dom'
import './utils/style/index.css'
import reportWebVitals from './reportWebVitals'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import User from './pages/Profile'
import Footer from './components/Footer'
import Header from './components/Header'

ReactDOM.render(
    <React.StrictMode>

        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<User />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
