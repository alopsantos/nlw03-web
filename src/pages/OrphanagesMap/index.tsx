import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../../assets/img/map-maker.svg';
import 'leaflet/dist/leaflet.css';
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
      <Map 
        center={[-25.4446519,-54.4011107]}
        zoom={15}
        style={{width:'100%', height:'100%'}}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>

    </div>
  );
}

export default OrphanagesMap;