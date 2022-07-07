import React, {useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SelectDatePicker from "@netojose/react-select-datepicker";
import {Link} from 'react-router-dom';

// import DatePicker from 'react-date-picker';
// import Spinner from './Spinner';
import CellPhone from './CellPhone';
// import Voucher from './components/Voucher';
import Title from '../images/free-wifi (4).png';
import Bottled from '../images/bottle-3.png';
import street4 from '../images/4street-logo.png';
import hashno from '../images/hash-no.png';

function App() {
  // const [loading, setLoading] = useState(true);
  const [isToggled, setIsToggled] = useState({visible:true});
  // const [value, onChange] = useState(new Date());

  // const [date, setDate] = useState(new Date(2000, 0, 1));
  // const handleChange = value => setDate(value);
  
  const handleClick = e => {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);

    
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff); 
    
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);

    const errorElement = document.getElementById('error')

    var messages = []

    if(age < 18)
    {
      //  alert("You need to be older than 18 to continue");
       messages.push('You need to be older than 18 to continue')
    }

      if(age > 18)
      {
        //  alert("Click Continue");
         messages.push('You over 18')
      }
      if(age.value === "" || age.value == null)
      {
        messages.push('Year is Required')
      }
  
    if(messages.length > 0){
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
    else 
    {
      //  alert("Click Continue");
       messages.push('Click Continue')
    }
    
    //display the calculated age
    return document.getElementById("result").innerHTML =  
            "Age is " +  age ;
}

  return (
    <div className='hometest-id'>
      <div className='App '>
      {isToggled ?
      <section id="page">
        {/* Display of the header logo */}
        <header>
            <img src={Title} className="head-title" alt="logo" />
        </header>
        <main>
            <div className='head-image'>
                <img src={Bottled} className="App-logo" alt="logo" />
            </div>
            {/* <div className='date-border'>
              <p className='date-title'>Please enter your date of birth:</p>
              <SelectDatePicker
                value={date}
                onDateChange={handleChange}
                className="date-picker"
                maxDate={new Date()}
              />
              <p className="info">Chosen date: {date ? date.toString() : "---"}</p>
            </div> */}

            {/* Input fields that user inserts */}
            {/* If user is older than 18 they can continue, if not error alert popsup*/}
            
            <div className='date-border'>
            <p className='date-title'>Please enter the year you were born:</p>
            <div>
              <input className="input-year" type='text' placeholder='MM'/>
              <input className="input-year" type='text' required id="DOB" placeholder='YY'/>
            </div>
                {/* <select name="day" id="DOB">
                  <option value="mon">2000</option>
                  <option value="tue">2012</option>
                  <option value="wed">1994</option>
                  <option value="thu">2010</option>
              </select> */}
                <button className='continue text-uppercase d-none' onClick={handleClick}>Submit</button>
                <p className='display-age' id="result" ></p>
                <div id="error"></div>
            </div>
            <div className=''>
                <p className='yellow-broad pb-2'>You need to be older than<br /> 18 to continue</p>
                {/* User Allowed to continue depending on the users age */}
                <button className='continue text-uppercase'  onClick={() => setIsToggled(!isToggled)}>
                  Continue
                </button>
                <br/>
                <br/>
                
             <div className='voucher-button'>
             <button className='continue text-uppercase'><Link to="/voucher">Voucher</Link></button>
             </div>
                {/* Once user clicks continue, the tenory function displays the next component */}
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
              < CellPhone /></div>}
      </div>
    </div>
     
  );
}

export default App;
