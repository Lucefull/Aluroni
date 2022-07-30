import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
export default function Ordenador() {
  return (
    <button className={styles.ordenador}>
      <span>Ordenar por</span>
      <div className={styles.ordenador__options}>
        {opcoes.map((e) => (
          <div className={styles.ordenador__option} key={e.value}>
            {e.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
