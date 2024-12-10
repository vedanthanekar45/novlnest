import './App.css'
import GenrePage from './pages/genres'
import Homepage from './pages/homepage'
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/genre' element={<GenrePage />} />
      </Routes>
      {/* <Homepage /> */}
    </div>
  )
}

export default App
