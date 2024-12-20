import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Footer from './Footer';
import Home from './Home';

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
