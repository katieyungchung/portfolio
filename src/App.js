import './App.css';
// import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Works from './Works';
import Footer from './Footer';
import Home from './Home';

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        {/* <Route path="/art" element={<ExternalRedirect />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App;
