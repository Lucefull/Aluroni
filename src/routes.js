import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import PaginaPadrao from './components/PaginaPadrao';
import Dish from './pages/Dish';
import Inicio from './pages/Inicio';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';
import Sobre from './pages/Sobre';

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="prato/:id" element={<Dish />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
