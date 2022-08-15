import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
  const [open, setOpen] = useState(false);
  const nomeOrdenador =
    ordenador && opcoes.find((e) => e.value === ordenador)?.nome;
  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}>
      <span>{nomeOrdenador || 'Ordenar por'}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles['ordenador__options--ativo']]: open,
        })}>
        {opcoes.map((e) => (
          <div
            className={styles.ordenador__option}
            key={e.value}
            onClick={() => setOrdenador(e.value)}>
            {e.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
