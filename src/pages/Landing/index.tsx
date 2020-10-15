import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/img/Logo.svg';

function Landing(){
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas criancas.</p>
        </main>

        <div className="location">
          <strong>Santa Terezinha de Itaipu</strong>
          <span>Parana</span>
        </div>
        <Link to="/app" className="entre-app"><FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" /></Link>
      </div>
    </div>
  );
}

export default Landing;