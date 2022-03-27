import React, { useEffect } from 'react';
import styles from './Pokedex.module.css';
import banner from '../../assets/pokedex/pokedex_banner.png';
import PokemonForm from '../../components/PokemonForm';
import PokemonList from '../../components/PokemonList';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pokemonsAdded } from './pokedexSlice';

import axios from 'axios';

export default function Pokedex() {
  const login = useSelector((state) => {
    return state.login;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
      .then((res) => {
        // console.dir(res.data.results);
        dispatch(pokemonsAdded(res.data.results));
      });
  }, [dispatch]);

  return (
    <div className={styles.pokedex}>
      <img src={banner} alt='' />
      <div className={styles.container}>
        <span>
          <b>Bienvenido {login.user},</b> aquí podrás encontrar tu pokemón
          favorito
        </span>
        <PokemonForm />
        <PokemonList itemsPerPage={16} />
      </div>
    </div>
  );
}
