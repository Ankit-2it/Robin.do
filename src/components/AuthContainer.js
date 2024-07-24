import React, { useState, useEffect } from 'react';
import './AuthContainer.css';
// import logo from '../logo.jpg';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const AuthContainer = () => {
  const [user, setUser] = useState({ name: '', picture: '', exp: '' });

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUser({
      name: decoded.name,
      picture: decoded.picture,
      exp: decoded.exp,
    });
    console.log(decoded);
  };

  const handleGoogleError = () => {
    console.log('Login Failed');
  };

  useEffect(() => {
    if (user.name){
        console.log('User state has been updated: ', user);
    }
  },[user]);

  return (
    <div className="auth-container">
      <div className="auth-contents">
        <div className="logo-section">
          <div className="logo">
            <img className="w-100" src={'logo.jpg'} alt="logo" />
          </div>
          <div className="logo-heading">
            <h3 className="mt-3 fs-5">Robin.do</h3>
            <p>Get Things Here</p>
          </div>
        </div>
        <div className="button-section">
          <div>
            <button className="register">Register</button>
          </div>
          <div>
            <button className="login">Login</button>
          </div>
        </div>
        <div className="google-login">
          <div className="line"></div>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />
        </div>
        {/* {user.name && (
          <div className="user-info">
            <img src={user.picture} alt={user.name} />
            <h3>{user.name}</h3>
            <p>Token expires at: {new Date(user.exp * 1000).toLocaleString()}</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default AuthContainer;
