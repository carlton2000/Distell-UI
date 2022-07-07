import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import Spinner from './Spinner';

import Title from '../images/free-wifi (4).png';
import Four from '../images/four-boxes.png';
import street4 from '../images/4street-logo.png';
import hashno from '../images/hash-no.png';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

setLoading(true);
setTimeout(() => {
  setLoading(false);
}, 3000);
  }, [])

  if (loading) {
      return <div>
              < Spinner />
      </div>
  }
    
  else
  return (
   <div className='continue-id'>
      <div className='App '>
      <section id="page">
        <header>
            <img src={Title} className="head-title" alt="logo" />
        </header>
        <main>
            <div className='date-border'>
                <p className='yellow-broad'>S/O to you for watching.<br /> Its time to Go 4th and connect</p>
            </div>
            <div className='pt-3 pb-5'>
                <button className='continue text-uppercase'>Click Here</button>
            </div>
                <img src={Four} className="four-boxes" alt="logo" />
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
