import React from 'react';
import { Link } from 'react-router-dom';

import mapMarkerImg from '../../assets/img/map-maker.svg';
import logo from '../../assets/img/Logo.svg';
import './styles.css';
import { FiPlus } from 'react-icons/fi';

function OrphanagesMap(){
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={logo} alt="Happy"/>
          
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas criancas estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Santa Terezinha de Itaipu</strong>
          <strong>Parana</strong>
        </footer>
      </aside>
      <div></div>

      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>

    </div>
  );
}

export default OrphanagesMap;