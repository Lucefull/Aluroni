import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Menu from './pages/Menu';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/cardapio' element={<Menu/>}/>
      </Routes>
    </Router>
  );
}
