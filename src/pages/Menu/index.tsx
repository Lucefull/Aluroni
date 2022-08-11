import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import SearchEngine from "./SearchEngine";
import { useState } from "react";
import Filters from "./Filters";
import Ordenador from "./Ordenador";
import Itens from "./Itens";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do codigo e da massa</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardapio</h3>
        <SearchEngine search={search} setSearch={setSearch} />
        <div className={styles.cardapio_filtros}>
          <Filters filter={filter} setFilter={setFilter} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
          <Itens search = {search} filter={filter} ordenador = {ordenador}/>
        </div>
      </section>
    </main>
  );
}
