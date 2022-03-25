import React, { useState } from 'react';
import styles from './Login.module.css';
import logo from '../../assets/login/logo.svg';
import banner from '../../assets/login/banner.svg';

import { useDispatch } from 'react-redux';
import { userAdded } from './loginSlice';

import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [userName, setUserName] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleStart = () => {
    if (userName) {
      dispatch(userAdded(userName));
      navigate('/pokedex');
    }
  };

  return (
    <div className={styles.login}>
      <img src={logo} alt='' />
      <h1>¡Hola Entrenador!</h1>
      <h2>Para poder comenzar, dame tu nombre</h2>
      <div>
        <input
          type='text'
          placeholder='Tu nombre...'
          onChange={handleChange}
          value={userName}
        />
        <button onClick={handleStart}>Comenzar</button>
      </div>
      <footer>
        <img src={banner} alt='' />
      </footer>
    </div>
  );
}
