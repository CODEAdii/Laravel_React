import React, { useEffect, useState } from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../context/ContextProvider';
import Digital from '../images/Digital.png'

function DefaultLayout() {
  const { user, token, setUser, setToken } = useStateContext();
  const [showDropdown, setShowDropdown] = useState(false);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post('/logout').then(() => {
      setUser({});
      setToken(null);
    });
  };

  useEffect(() => {
    axiosClient.get('/user').then(({ data }) => {
      setUser(data);
    });
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div id="defaultLayout">
      <aside className="sidebar">
      <div className="logo-container">
        <img src={Digital} alt="Logo" className="logo-image" />
      </div>
       
        <Link to="/Home">HOME</Link>
        <Link to="/aboutus">ABOUT</Link>
        <Link to="/KYCPage">KYC</Link>
        <Link to="/contact">Contact</Link>
       
      </aside>
      <div className="content">
        <header>
          <div className="left-header">
          <div className="dropdown" onClick={toggleDropdown} onMouseLeave={closeDropdown}>
          <span className="text">SERVICES {showDropdown ? '▲' : '▼'}</span>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/AdharVerification">Adhar Verification</Link>
              <Link to="/kyc-status">KYC Status</Link>
              {/* Add more dropdown options here */}
            </div>
          )}
          </div>
          </div>
          <div>
          <Link to="/profile">{user.name}</Link>

            
            <a href="#" onClick={onLogout} className="btn-logout">
              Logout
            </a>
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
