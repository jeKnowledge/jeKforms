import './App.css';

import Links from './Links';
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import axios from 'axios'

//const clientId = "926589748534-haun8k580htm3scicreql3a1gsh3f2ta.apps.googleusercontent.com";

function App() {

  const [forms, setForms] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/home/forms/`")
    .then(res => {
      console.log(res);
      setForms(res.data);
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])

  function handleCallbackResponse(response) {
    console.log(response)
    const token = response.credential
    //axios.post("")
  }
  
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "926589748534-haun8k580htm3scicreql3a1gsh3f2ta.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large", shape: "circle", logo_alignment: "center" },
    )
  }, [])// eslint-disable-line react-hooks/exhaustive-deps


  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div>
        <div className='header-login'>
         <div className='signIn' id="signInDiv">
         </div>
          {/*
            <GoogleLogin
            clientId="926589748534-haun8k580htm3scicreql3a1gsh3f2ta.apps.googleusercontent.com"
            render={renderProps => (
              <button className='login-button' onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            /> */}
        </div>
      <div className='jeKlogo'>
        <img src="./icon.svg" alt="jeKlogo" width={216} height={218}/>
      </div>
      <div className='text'>
        jeKForms
      </div>
      <div className='buttons'>
        {forms.map((form, index) =>
          <Links key={index} form={form} />
        )}
      </div>
    </div> 
  );
  document.getElementById('googleButton')
}

export default App;
