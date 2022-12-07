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
    axios.get(`http://127.0.0.1:8000/home/forms/`)
    .then(res => {
      console.log(res);
      setForms(res.data);
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "926589748534-haun8k580htm3scicreql3a1gsh3f2ta.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { width: "100px", height: "100px"},
    )
  }, [])
  
  function handleCallbackResponse(response) {
    console.log(response)
    //aqui recebe o token do user
    const token = response.credential
    //mandar para back e ver se user já existe  
    axios.post("")
  }
  

  {/*
  const responseGoogle = (response) => {
    console.log(response);
  }*/}

  return (
    <div>
      <div className='header-login'>
        <div className='search-bar'>Pesquisar</div>
        <div className='login-button' id="signInDiv">Login</div>
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
            />*/}
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
