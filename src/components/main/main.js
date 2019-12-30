import React from 'react';
import './main.css';
// import Logo from '../../images/logo.png';
import Shirt1 from '../../images/shirt1.png';
import Shirt2 from '../../images/shirt2.png';
import Shirt3 from '../../images/shirt3.png';


function Main() {
  return (
    <div className="main">
      <h1><b>Л</b>учшее</h1>
    <div className="shirts">
    <div className="shirt shirtGreen">
     <img src={Shirt1} alt="shirt"></img>
     </div>
       <div className="shirt shirtBlue">
      <img src={Shirt2} alt="shirt"></img>
      </div>
        <div className="shirt shirtViolet">
       <img src={Shirt3} alt="shirt"></img>
       </div>
     </div>
     <div className="btn">
       <button>Каталог</button>
     </div>
     </div>

  );
}

export default Main;
