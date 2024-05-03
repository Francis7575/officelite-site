import Home from './pages/Home'
import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/officelite-site" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App