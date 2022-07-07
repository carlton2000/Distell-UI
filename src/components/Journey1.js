import React, { useState, useEffect } from 'react';

import Rewarded from './RewardedVideo';

import Spinner from './Spinner';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import Title from '../images/free-wifi (4).png';
import street4 from '../images/4street-logo.png';
import hashno from '../images/hash-no.png';

function App () {
  const [loading, setLoading] = useState(true);
  const [isToggled, setIsToggled] = useState({visible:true});

  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    setLoading(true);
    setTimeout(() => {
            setLoading(false);
          }, 1000);
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
  <div className='journey-id'>
      <div className='App '>
      {isToggled ?
      <section id="page">
        <header>
            <img src={Title} className="head-title" alt="logo" />
        </header>
        <main>
        <p className='yellow-broad pb-2'>Two steps to go.<br/>
            First answer these few questions</p>
            <div className='pt-2 date-border'>
            <p className='date-title'>Do you prefer:</p>
            <div className="container pb-2">
                <div className="row">
                    <div className="col-6">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                            <label className="form-check-label questions-radio">
                                RED 
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                            <label className="form-check-label questions-radio">
                                WHITE
                            </label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                            <label className="form-check-label questions-radio">
                            Rosé Wine 
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                            <label className="form-check-label questions-radio">
                                Sweet Late Harvest
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='voucher-button'>
              <button className='continue text-uppercase ' onClick={() => setIsToggled(!isToggled)} >Continue
              </button>
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
        : <div className='App app-align'>
      < Rewarded /></div>}
      </div>
    </div>
  );
}

export default App;