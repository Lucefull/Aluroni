import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import styles from './NavBar.module.scss';

export default function NavBar() {
  const rotas = [
    {
      label: 'Inicio',
      to: '/',
    },
    { label: 'Cardápio', to: '/cardapio' },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ];
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map((route, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
