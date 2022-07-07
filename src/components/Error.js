import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useEffect, useState} from "react";
import Spinner from './Spinner';
import Title from '../images/free-wifi (3).png';
import street4 from '../images/4street-logo.png';
import hashno from '../images/hash-no.png';


  const App = () => {

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Loading function to load data or 
      // fake it using setTimeout;
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
    }, [])
      
    // If page is in loading state, display 
    // loading message. Modify it as per your 
    // requirement.
    if (loading) {
        return <div>
                < Spinner />
        </div>
    }
      
    // If page is not in loading state, display page.
    else

  return (
<div className='error-id'>
      <div className='App '>
      <section id="page">
        <header>
            <img src={Title} className="head-title" alt="logo" />
        </header>
        <main>
        <div className='error-content'> 
            <p className='common'>Opps...</p>
            <p className='not-found'>Something went wrong</p>
            <div className='pt-3 pb-5'>
                <button className='continue text-uppercase'>Back to Home</button>
            </div>
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
