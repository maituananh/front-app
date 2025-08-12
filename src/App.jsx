import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NotFound from './pages/not-found'
import Home from './pages/home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" /*element={<Layout />}*/>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
