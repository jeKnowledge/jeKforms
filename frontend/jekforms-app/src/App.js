import './App.css';

import Links from './Links';
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import ReactDOM from 'react-dom';

//const clientId = "926589748534-haun8k580htm3scicreql3a1gsh3f2ta.apps.googleusercontent.com";

function App() {

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div>
      <div className='header'>
        <div className='header-login'>
          <GoogleLogin
            clientId="926589748534-haun8k580htm3scicreql3a1gsh3f2ta.apps.googleusercontent.com"
            render={renderProps => (
              <button className='login-button' onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
      <div className='jeKlogo'>
        <img src="icon.svg" width={216} height={218}/>
      </div>
      <div className='text'>
        jeKForms
      </div>
      <div className='buttons'>
        <Links forms_name={"Recrutamento"} forms_url={"https://docs.google.com/forms/u/0/?tgif=d"}></Links>
        <Links forms_name={"jeKacademy"} forms_url={"https://docs.google.com/forms/u/0/?tgif=d"}></Links>
        <Links forms_name={"Pizza night"} forms_url={"https://docs.google.com/forms/u/0/?tgif=d"}></Links>
        <Links forms_name={"Tech"} forms_url={"https://docs.google.com/forms/u/0/?tgif=d"}></Links>
      </div>
    </div> 
  );
  document.getElementById('googleButton')
}

export default App;
