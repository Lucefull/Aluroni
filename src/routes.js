import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PaginaPadrao from './components/PaginaPadrao';
import Inicio from './pages/Inicio';
import Menu from './pages/Menu';
import Sobre from './pages/Sobre';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
