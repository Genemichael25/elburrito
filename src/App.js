import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { Contacto } from './pages/Contacto';
import { Eventos } from './pages/Eventos';
import { Historia } from './pages/Historia';
import { Main } from './pages/Main';
import { Menu } from './pages/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Menu />
      <Contacto />
      <Historia />
      <Eventos />
      <Footer />
    </div>
  );
}

export default App;
