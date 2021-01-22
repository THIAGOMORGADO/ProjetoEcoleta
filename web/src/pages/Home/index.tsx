import React from 'react';

import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.svg';

import './styles.css'

const Home = () => {
  return(
    <div id="page-home">
  <div className="content">
     <header>
        <img src={Logo} alt="Ecoleta"/>
     </header>
     <main>
       <h1>Seu marktplace de coleta de residuos.</h1>
       <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>
     
     <Link to="/create-points">
       <span>
          <FiLogIn />
       </span>
       <strong>Cadastre um ponto de coleta</strong>
     </Link>
     </main>
  </div>
</div>
  )  
}

export default Home;