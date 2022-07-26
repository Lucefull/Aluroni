import cardapio from '../../data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTemas from '../../styles/Tema.module.scss';
import nossaCasa from '../../assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from '../../types/Prato';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();

  function redirectForDetails(dish: Prato) {
    navigate(`/prato/${dish.id}`,{ state:{...dish}, replace:true });
  }
  return (
    <section>
      <h3 className={stylesTemas.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((e) => (
          <div key={e.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={e.photo} alt={e.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirectForDetails(e)}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTemas.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br />
          <br />
          Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
