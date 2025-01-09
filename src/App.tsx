import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename="/ntsweb">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;