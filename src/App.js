import React from 'react';
import './App.css';
import AuthContainer from './components/AuthContainer';

import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <GoogleOAuthProvider clientId="406851668385-qccqvimh55rrh4q93of40jqgp36br5eb.apps.googleusercontent.com">
      <div className="App">
        <AuthContainer />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
