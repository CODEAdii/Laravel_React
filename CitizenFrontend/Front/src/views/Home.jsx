import React ,{ useEffect, useState }from 'react';
import Digi from '../images/Digi.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';

import SimpleImagesSlider from "react-simple-image-slider";



//images---
import icon1 from '../images/icon1.png';
import house from '../images/house.png';
import Aadhar from '../images/Aadhar.png';
import  land from '../images/land.png';
import complaint from '../images/complaint.png';
import KYC from '../images/KYC.png';
import customer from '../images/customer.png';
import verify  from '../images/verify.png';
import track from '../images/track.png';
import assam1 from '../images/assam1.jpg';
import assam2 from '../images/assam2.jpg';
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.png';
import slider4 from '../images/slider4.png';








function Home() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };



  useEffect(() => {
    // Check if the user is logged in here
    // For example, you can check if there is a valid token in local storage
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    
    <div className="HomeApp">
      <header className="homeHeader"> सेवा पोर्टल
      <br />
        Service Portal

        <div className="homeLogo">
          <img className="homeLogoImg" src={Digi} alt="Logo" />
          {/* <h1 className='navhead'>Citizen Service Portal</h1> */}
        </div>
        <nav className="homeNav">
          {!isLoggedIn && (
            <>
              <Link to='/login'>
                <button className='button-73'>Login</button>
              </Link>
              <Link to='/signup'>
                <button className='button-73'>SignUp</button>
              </Link>
            </>
          )}
         <div className="left-header">
          <div className="dropdown" onClick={toggleDropdown} onMouseLeave={closeDropdown}>
          <span className="text"> {showDropdown ? '▲' : '▼'}</span>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/AdharVerification">Adhar Verification</Link>
              <Link to="/kyc-status">KYC Status</Link>
              {/* Add more dropdown options here */}
            </div>
          )}
          </div>
          </div>
        </nav>
      </header>
      
      <div className='slider'>
        <SimpleImagesSlider
          width={2000}
          height={600}
          style={{ objectFit: "cover",  }}
          images={[
            { url: slider1},
            { url: slider2 },
            { url: slider3 },
            { url: slider4 },

          ]}
          showBullets={true}
          showNavs={true}
        /></div>
      <div className="homeContent">
        
        
        <div className="homeMainCards">
          
          
          <div className="homeMainCard">
          <img className="icons" src={icon1} alt="icon" />
            <h2>My Patta</h2>
            <p>Fill Form to register.</p>
            <button className='formbtn'>Fill Form </button>
            <a href="" className='downloadbtn'>Download</a>
             
             <a href="" className='guidebtn'>Guidelines</a>

          </div>
          <div className="homeMainCard">
          <img className="icons" src={house} alt="icon" />

            <h2>Shifting of residence/correction of entries in existing electoral roll</h2>
            <p>Fill Form 6 if you are 18 years or above or you will turn 18 in few months.</p>
            <button className='formbtn'>Fill Form </button>
            <a href="" className='downloadbtn'>Download</a>
             
            <a href="" className='guidebtn'>Guidelines</a>
          </div>
          <div className="homeMainCard">
          <img className="icons" src={Aadhar} alt="icon" />

            <h2>Aadhaar collection </h2>
            
            <p>Fill Form 6B to get Aadhaar and EPIC.</p>
            <button className='formbtn'>Fill Form </button>
            <a href="" className='downloadbtn'>Download</a>
             
             <a href="" className='guidebtn'>Guidelines</a>
          </div>
          <div className="homeMainCard">
          <img className="icons" src={land} alt="icon" />

            <h2>Mission Basundhara  </h2>
            
            <p>.</p>
            <button className='formbtn'>Fill Form </button>

            <a href="" className='downloadbtn'>Download</a>
             
             <a href="" className='guidebtn'>Guidelines</a>
          </div>
          <div className="homeMainCard">
          <img className="icons" src={land} alt="icon" />

            <h2>My Patta </h2>
            
            <p>.</p>
              
            <p>Location {}</p>
            <button className='formbtn'>Fill Form </button>

              <a href="" className='downloadbtn'>Download</a>

              <a href="" className='guidebtn'>Guidelines</a>
          </div>
          <div className="homeMainCard">
          <img className="icons" src={land} alt="icon" />
          

            <h2>My Khajana </h2>
            
            <p>.</p>
            <button className='formbtn'>Fill Form </button>

            <a href="" className='downloadbtn'>Download</a>
            
            <a href="" className='guidebtn'>Guidelines</a>
          </div>
          <div className="homeMainCard">
          <img className="icons" src={land} alt="icon" />

            <h2>Mission Basundhara  </h2>
            
            <p>.</p>
            <button className='formbtn'>Fill Form </button>

              <a href="" className='downloadbtn'>Download</a>
              
              <a href="" className='guidebtn'>Guidelines</a>

          </div>
          

         
          
        </div>

        {/* ------services----------- */}
        <div className="homeServices">

          <div className="serviceHeading">
               <h2>SERVICES</h2>
          </div>
           <br />
          <div className="homeServiceCard">
          <img className="icons" src={complaint} alt="icon" />
            <h3>Register Complaint &nbsp;</h3>
            <p>Service description goes here.</p>
            <a href="#">Explore</a>
          </div>
          <div className="homeServiceCard">
          <img className="icons" src={customer} alt="icon" />

            <h3>Customer Queries &nbsp;</h3>
            <p>Service description goes here.</p>
            <a href="#">Explore</a>
          </div>
          <div className="homeServiceCard">
          <img className="icons" src={track} alt="icon" />
            <h3>Track Application &nbsp;</h3>
            <p>Service description goes here.</p>
            <a href="#">Explore</a>
          </div>
          <div className="homeServiceCard">
          <img className="icons" src={verify} alt="icon" />
            <h3>Ekhazana &nbsp; </h3>
            <p> Service .</p>
            <a href="#">Explore</a>
          </div>
          <div className="homeServiceCard">
          <img className="icons" src={KYC} alt="icon" />
            <h3>Know Your Customer &nbsp;</h3>
            <p> Service description goes here.</p>
            <a href="#">Explore</a>
          </div>
          <div className="homeServiceCard">
          <img className="icons" src={KYC} alt="icon" />
            <h3>NOC composite &nbsp;</h3>
            <p> Service description goes here.</p>
            <a href="#">Explore</a>
          </div>
        </div>
        
      </div>
      <a href="/users">Back</a>
      <Footer />
    </div>
  );
}

export default Home;
