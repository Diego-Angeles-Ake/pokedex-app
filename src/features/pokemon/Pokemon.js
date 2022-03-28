import React, { useState, useEffect } from 'react';
import styles from './Pokemon.module.css';
import banner from '../../assets/pokedex/pokedex_banner.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import pokeball from '../../assets/pokemon/pokeball.svg';

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
          <div>
            <div>
              <h2>Peso</h2>
              <span>{p.weight}</span>
            </div>
            <div>
              <h2>Altura</h2>
              <span>{p.height}</span>
            </div>
          </div>

          <div>
            <div className={styles.type}>
              <h2>Tipo</h2>
              <div>
                {p?.types?.map((e) => {
                  return <div key={uuidv4()}>{e.type.name}</div>;
                })}
              </div>
            </div>
            <div className={styles.abilities}>
              <h2>Habilidades</h2>
              <div>
                {p?.abilities?.map((e) => {
                  return <div key={uuidv4()}>{e.ability.name}</div>;
                })}
              </div>
            </div>
          </div>

          <section>
            <div>
              <h2>Stats</h2>
              <div></div>
              <img src={pokeball} alt='' />
            </div>
            <div>
              <h2>HP</h2>
              <span>{`${p?.stats?.[0]?.base_stat}`}/200</span>
            </div>
            <div>
              <div
                style={{
                  width: `${(p?.stats?.[0]?.base_stat / 200) * 62.29}vw`,
                }}
              ></div>
            </div>
            <div>
              <h2>Ataque</h2>
              <span>{`${p?.stats?.[1]?.base_stat}`}/200</span>
            </div>
            <div>
              <div
                style={{
                  width: `${(p?.stats?.[1]?.base_stat / 200) * 62.29}vw`,
                }}
              ></div>
            </div>
            <div>
              <h2>Defensa</h2>
              <span>{`${p?.stats?.[2]?.base_stat}`}/200</span>
            </div>
            <div>
              <div
                style={{
                  width: `${(p?.stats?.[2]?.base_stat / 200) * 62.29}vw`,
                }}
              ></div>
            </div>
            <div>
              <h2>Velocidad</h2>
              <span>{`${p?.stats?.[5]?.base_stat}`}/200</span>
            </div>
            <div>
              <div
                style={{
                  width: `${(p?.stats?.[5]?.base_stat / 200) * 62.29}vw`,
                }}
              ></div>
            </div>
          </section>
        </div>
      )}
      <section>
        <div>
          <h2>Movements</h2>
          <div></div>
          <img src={pokeball} alt='' />
        </div>
        {/* moves[0].move.name */}
        <div>
          {p?.moves?.map((m) => {
            return <div key={uuidv4()}>{m.move.name}</div>;
          })}
        </div>
      </section>
    </div>
  );
}
