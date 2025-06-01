import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/profile';
import Settings from './pages/settings';
import Curso1 from './pages/Curso1';
import Leccion1 from './pages/Leccion1';
import ButtomNav from './components/BottonNav'
import Leccion from './pages/leccion';
function App() {

  return (
    <Router>
      <div className='min-h-screen bg-gradient-to-b from-[#47B4E2] to-[#544197] flex flex-col items-center'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curso_1" element={<Curso1/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/leccion_1" element={<Leccion1/>} />
            <Route path="/leccion" element={<Leccion/>} />
          </Routes>
          <ButtomNav/>
      </div>
    </Router>
  )
}

export default App
