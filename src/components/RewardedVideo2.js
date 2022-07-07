import '../App.css';
import { useEffect, useState } from 'react';

// import Cheers from '../images/cheers.png';

import Continue from './Continue';

import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import Title from '../images/free-wifi (4).png';
import street4 from '../images/4street-logo.png';
import hashno from '../images/hash-no.png';

const useDisplayDfpSlot = ({ path, size, id }) => {

  useEffect(() => {

    const googletag = window.googletag || {};
    googletag.cmd = googletag.cmd || [];

    var rewardedSlot;
    var ad_details;

    googletag.cmd.push(function () {
      googletag.defineSlot(path, size, id)
        .addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    });

    googletag.cmd.push(function () {
      googletag.display(id);
    });

                // This listener will be called when a slot has finished rendering.
                googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                    var slotId = event.slot.getSlotElementId();
      
                    // Record details of the rendered ad.
                    var details = {
                        'Advertiser ID': event.advertiserId,
                        'Campaign ID': event.campaignId,
                        'Creative ID': event.creativeId,
                        'Is empty?': event.isEmpty,
                        'Line Item ID': event.lineItemId,
                        // 'Size': event.size.join('x'),
                        'Source Agnostic Creative ID': event.sourceAgnosticCreativeId,
                        'Source Agnostic Line Item ID': event.sourceAgnosticLineItemId
                    }
                    ad_details_all(details)
                    console.log('Slot has finished rendering.', slotId);
                });

    googletag.cmd.push(function() {
      rewardedSlot = googletag.defineOutOfPageSlot(
        '/21967555500/thinkwifi',
          googletag.enums.OutOfPageFormat.REWARDED);

      // Slot returns null if the page or device does not support rewarded ads.
      if (rewardedSlot) {
        rewardedSlot.addService(googletag.pubads());

        googletag.pubads().addEventListener('rewardedSlotReady', function(event) {
          document.getElementById('watchAdButton').onclick = function() {
            event.makeRewardedVisible();
            displayModal();
          }
          console.log('rewardedSlotReady')

          displayModal('reward');
        });

        // googletag.pubads().addEventListener('rewardedSlotClosed', dismissRewardedAd);
        googletag.pubads().addEventListener('rewardedSlotClosed', function (event) {
            dismissRewardedAd();
            console.log('ad was closed')
          });

        googletag.pubads().addEventListener('rewardedSlotGranted', function(event) {
          // Automatically close the ad by destroying the slot.
          // Remove this to force the user to close the ad themselves.
          dismissRewardedAd();

          var reward = event.payload;
          displayModal('grant', 'You have been rewarded ' + reward.amount + ' '
                                                          + reward.type + '!');
        });

        googletag.enableServices();
        googletag.display(rewardedSlot);
      }
    });

    // function update_state(rewardedSlot_function) {

    //     console.log(rewardedSlot_function)

    // }

    function ad_details_all(ad_details_all) {
        ad_details = ad_details_all
        console.log('this is the ad details', ad_details)
      }

    function dismissRewardedAd() {
      displayModal();
      googletag.destroySlots([rewardedSlot]);
    }

    function displayModal(type, message) {
      var modal = document.getElementById('modal');
      modal.removeAttribute('data-type');

      if (type) {
        document.getElementById('modalMessage').textContent = message;
        modal.setAttribute('data-type', type);
      }
    }

  }, [path, size, id]);

};

const App = () => {
    const [isToggled, setIsToggled] = useState({visible:true});
    const [data, setData] = useState({
        code: ""
  
    })
  
    function submit(e){
      e.preventDefault();
    }
  
    function handle(e){
      const newdata ={ ...data }
      newdata[e.target.id] = e.target.value
      setData(newdata)
      console.log(newdata)
    }
 
  useDisplayDfpSlot({
    path: '/21967555500/thinkwifi/display',
    size: [300, 250],
    id: 'div-gpt-ad-1559997122392-0',
  });

  useDisplayDfpSlot({
    path: '/21967555500/thinkwifi/header',
    size: [140, 78],
    id: 'div-gpt-ad-1559997122392-1',
  });

  return (
<div className='video-id'>
  <div className='App'>
  {isToggled ?
    <section id="page">
        <header>
            <img src={Title} className="head-title" alt="logo" />
        </header>
        <main>

        <p className='yellow-broad pb-2'>Welcome back fam</p>
            <div className='pt-2 date-border'>
              <div className='inline-voucher'>
              <p className='date-title'>Please enter your voucher code:</p>
              <form onSubmit={(e) => submit(e)}>
                <input onChange={(e)=>handle(e)} id="code" value={data.code} placeholder='Voucher:' type='text'></input>

              </form>
              </div>
            </div>

              <div id="modal" className="modal2">
                  <div className="modalDialog">
                      <p id="modalMessage"></p>

                      {/* After video  */}
                      <span className="grantButtons">
                      {/* <input type="button"  value="BROWSE" />
                      <input type="button"  value="EXTEND TO 30 MIN" /> */}
                      <button className='continue text-uppercase' onClick={() => setIsToggled(!isToggled)} >
                        Continue
                      </button>
                      </span>

                      {/* Click to watch specify video */}
                      <span className="rewardButtons">
                      <input type="button" id="watchAdButton" value="CONNECT" />
                      {/* <input type="button" onclick="dismissRewardedAd();" value="No" /> */}
                      </span>
                  </div>
                </div>
           
        </main>
            <nav> 

            </nav>
            <footer >
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
      < Continue /></div>}
  </div>
</div>
  );
};


export default App;
