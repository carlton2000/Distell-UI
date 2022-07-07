import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HomeTest from './components/HomeTest';
import RewardedVideo2 from './components/RewardedVideo2';


function App() {

  return (
<Router>

{/* <div className='App'>
    <HomeTest />
    
</div> */}

<Routes>

<Route exact path="/" element={<HomeTest />} />
  <Route exact path="/voucher" element={<RewardedVideo2 />} />
</Routes>

</Router>
    
  );
}

export default App;
