import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import StartPage from './pages/StartPage'
import Rides from './pages/Rides'
import Games from './pages/Games'


function App() {
    
    return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<StartPage />} />
                <Route path='/rides' element={<Rides />} />
                <Route path='/games' element={<Games />} />
            </Routes>
        </BrowserRouter>
      </>
  )
}

export default App