import React from 'react';
import styles from './Pokedex.module.css';
import banner from '../../assets/pokedex/pokedex_banner.png';

export default function Pokedex() {
  return (
    <div className={styles.pokedex}>
      <img src={banner} alt='' />
      <div>
        <span>
          <b>Bienvenido Nombre,</b> aquí podrás encontrar tu pokemón favorito
        </span>
      </div>
    </div>
  );
}
