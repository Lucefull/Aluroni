import styles from './Dish.module.scss';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import cardapio from '../../data/cardapio.json';
import TagsDishs from '../../components/TagsDishs';
import NotFound from '../NotFound';
import PaginaPadrao from '../../components/PaginaPadrao';

export default function Dish() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = cardapio.find((e) => e.id === Number(id));
  if (!dish) {
    return <NotFound />;
  }
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <>
              <button className={styles.voltar} onClick={() => navigate(-1)}>
                {'< Voltar'}
              </button>
              <section className={styles.container}>
                <h1 className={styles.title}>{dish.title}</h1>
                <div className={styles.imagem}>
                  <img src={dish.photo} alt={dish.title} />
                </div>
                <div className={styles.conteudo}>
                  <p className={styles.conteudo__descricao}>
                    {dish.description}
                  </p>
                  <TagsDishs {...dish} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
