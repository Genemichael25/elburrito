import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { Contacto } from './pages/Contacto';
import { Main } from './pages/Main';
import { Menu } from './pages/Menu';
import { Eventos } from './pages/Eventos';
import { Historia } from './pages/Historia';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/historia" element={<Historia />} />
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
