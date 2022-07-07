import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Title from '../images/free-wifi (4).png';
import street4 from '../images/4street-logo.png';
import hashno from '../images/hash-no.png';


function App() {


  return (
<div className='spinner-id'>
      <div className='App '>
      <section id="page">
        <header>
            <img src={Title} className="head-title" alt="logo" />
        </header>
        <main>
        <div className="spinner-container">
            <div className="loading-spinner"></div>
        </div>
        </main>
        <nav>
            
        </nav>
        <footer>
            <div className="container ">
                <div className="row ">
                <div className="col">
                    <img src={hashno} className="footer-logo" alt="logo" />
                </div>
                <div className="col tees-cees">
                    <p>T's & C's apply</p>
                </div>
                <div className="col">
                <img src={street4} className="footer-logo" alt="logo" />
                </div>
                </div>
              </div>
        </footer>
      </section>
      </div>
    </div>
     
  );
}

export default App;
