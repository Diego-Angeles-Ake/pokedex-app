import React, { useState, useEffect } from 'react';
import styles from './Pokemon.module.css';
import banner from '../../assets/pokedex/pokedex_banner.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Pokemon() {
  const { id } = useParams();
  const [p, setP] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setP(res.data));
  }, [id]);
  console.log(p);
  return (
    <div className={styles.info}>
      <img src={banner} alt='' />
      {p && (
        <div>
          <div>
            <img
              src={p.sprites?.other['official-artwork'].front_default}
              alt=''
            />
          </div>
          <div>
            <span>#{p.id}</span>
          </div>
          <div>
            <div></div>
            <h1>{p.name}</h1>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
