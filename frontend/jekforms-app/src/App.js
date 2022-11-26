import logo from './logo.svg';
import './App.css';

import React from 'react';
import { GoogleLogin } from 'react-google-login';
import ReactDOM from 'react-dom';

//const clientId = "926589748534-haun8k580htm3scicreql3a1gsh3f2ta.apps.googleusercontent.com";

function App() {

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className="App">
      <GoogleLogin
        clientId="926589748534-haun8k580htm3scicreql3a1gsh3f2ta.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div> 
  );
  document.getElementById('googleButton')
}

export default App;
