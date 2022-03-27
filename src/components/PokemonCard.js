import axios from 'axios';
import React, { useState, useEffect } from 'react';

const typeEsLang = {
  normal: 'Normal',
  fighting: 'Lucha',
  flying: 'Volador',
  poison: 'Veneno',
  ground: 'Tierra',
  rock: 'Roca',
  bug: 'Bicho',
  ghost: 'Fantasma',
  steel: 'Acero',
  fire: 'Fuego',
  water: 'Agua',
  grass: 'Planta',
  electric: 'Eléctrico',
  psychic: 'Psíquico',
  ice: 'Hielo',
  dragon: 'Dragón',
  dark: 'Siniestro',
  fairy: 'Hada',
};

export default function PokemonCard({ item }) {
  //   console.dir(item);
  const [type, setType] = useState(null);
  const [stats, setStats] = useState(null);
  const [sprite, setSprite] = useState(null);

  useEffect(() => {
    if (item?.name) {
      axios.get(item.url).then((res) => {
        // console.dir(res.data);
        setType(res.data.types);
        setStats(res.data.stats);
        setSprite(res.data.sprites.other['official-artwork'].front_default);
      });
    } else if (item?.pokemon?.name) {
      axios.get(item.pokemon.url).then((res) => {
        // console.dir(res.data);
        setType(res.data.types);
        setStats(res.data.stats);
        setSprite(res.data.sprites.other['official-artwork'].front_default);
      });
    }
  }, []);

  return (
    <div>
      {sprite && <img src={sprite} alt='' />}
      <h1>{item?.name || item?.pokemon?.name}</h1>
      <h2>
        {type &&
          type.map((e, i, arr) => {
            let typesStr = '';
            if (i !== arr.length - 1) {
              typesStr += typeEsLang[e?.type?.name] + '/';
            } else {
              typesStr += typeEsLang[e?.type?.name];
            }
            return typesStr;
          })}
      </h2>
      <span>Tipo</span>
      <hr />
      <div className='stats'>
        {stats &&
          stats.map((e) => {
            if (
              e.stat.name === 'hp' ||
              e.stat.name === 'attack' ||
              e.stat.name === 'defense' ||
              e.stat.name === 'speed'
            ) {
              return (
                <div className={`stat`}>
                  <h3>{e.stat.name}</h3>
                  <span>{e.base_stat}</span>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
