import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/profile';
import Settings from './pages/settings';
import Curso1 from './pages/Curso1';
import Leccion1 from './pages/Leccion1';
import ButtomNav from './components/BottonNav'

function App() {

  return (
    <Router>
      <div className='min-h-screen bg-gradient-to-b from-sky-300 via-blue-500 to-purple-800 flex flex-col items-center'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curso_1" element={<Curso1/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/leccion_1" element={<Leccion1/>} />
          </Routes>
          <ButtomNav/>
      </div>
    </Router>
  )
}

export default App
