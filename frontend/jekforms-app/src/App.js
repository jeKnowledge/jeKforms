import './App.css';

import Links from './Links';
import Forms from './Forms';
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
      <div className="Google-login-button">
        <GoogleLogin
          clientId="926589748534-haun8k580htm3scicreql3a1gsh3f2ta.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      <div className='buttons'>
        <Links forms_name={"Recrutamento"} forms_url={"https://docs.google.com/forms/u/0/?tgif=d"}></Links>
        <Links forms_name={"jeKacademy"} forms_url={"https://docs.google.com/forms/u/0/?tgif=d"}></Links>

        <Forms text="Recrutamento"></Forms>
        <Forms text="jeKacademy"></Forms>
      </div>
    </div> 
  );
  document.getElementById('googleButton')
}

export default App;
