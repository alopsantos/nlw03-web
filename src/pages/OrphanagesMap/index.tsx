import React from 'react';

import mapMarkerImg from '../../assets/img/map-maker.svg';

function OrphanagesMap(){
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas criancas estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Santa Terezinha de Itaipu</strong>
          <strong>Parana</strong>
        </footer>
      </aside>
    </div>
  );
}

export default OrphanagesMap;