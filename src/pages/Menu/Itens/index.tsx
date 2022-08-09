
import Item from './item';
import menu from './itens.json';
import styles from './Itens.module.scss';

export default function Itens(){
    return(
        <div className={styles.itens}>
            {menu.map(e=>(
                <Item key={e.id}
                {...e}
                />
                
            ))}
        </div>
    )
}