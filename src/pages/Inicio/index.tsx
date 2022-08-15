import cardapio from '../../data/cardapio.json';
import styles from './Inicio.module.scss';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

  return (
    <section>
      <h3 className={styles.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(e=>(
          <div key={e.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={e.photo} alt={e.title} />
            </div>
            <button className={styles.recomendado__botao}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
