import './App.css'
import Login from './components/authentication/Login'
import Register from './components/authentication/Register'
import GenrePage from './pages/genres'
import Homepage from './pages/homepage'
import {Routes, Route} from "react-router-dom"
// import isAuthenticated from './auth/checkTokenValidity'
// import { Navigate } from 'react-router-dom';
import Otpverify from './components/authentication/OtpVerify'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/genre' element={<GenrePage />} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/signup' element={<Register />} />
        <Route path='/otp'  element={<Otpverify />} />
      </Routes>
      {/* <Homepage /> */}
    </div>
  )
}

export default App
