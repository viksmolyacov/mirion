import React from 'react';
import './main.css';
// import Logo from '../../images/logo.png';
import Shirt1 from '../../images/shirt1.png';
import Shirt2 from '../../images/shirt2.png';
import Shirt3 from '../../images/shirt3.png';


function Main() {
  return (
    <div className="main">
    <div className="shirts">
    <div className="shirt shirtGreen">
     <img src={Shirt1}></img>
     </div>
       <div className="shirt shirtBlue">
      <img src={Shirt2}></img>
      </div>
        <div className="shirt shirtViolet">
       <img src={Shirt3}></img>
       </div>
     </div>
     </div>

  );
}

export default Main;
