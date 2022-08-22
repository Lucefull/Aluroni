import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from '../../assets/not_found.svg';
import classNames from 'classnames';
import stylesTemas from '../../styles/Tema.module.scss';

export default function NotFound() {
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTemas.container]:true,
      })}>
      <NotFoundImage />
    </div>
  );
}
