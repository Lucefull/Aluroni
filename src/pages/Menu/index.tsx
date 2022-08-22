import styles from './Menu.module.scss';
import SearchEngine from './SearchEngine';
import { useState } from 'react';
import Filters from './Filters';
import Ordenador from './Ordenador';
import Itens from './Itens';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
  return (
    <section className={styles.cardapio}>
      <h3 className={styles.cardapio__titulo}>Cardapio</h3>
      <SearchEngine search={search} setSearch={setSearch} />
      <div className={styles.cardapio__filtros}>
        <Filters filter={filter} setFilter={setFilter} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens search={search} filter={filter} ordenador={ordenador} />
    </section>
  );
}
