import Links from "./Links";
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import './HomePage.css';

const HomePage = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/home/forms/`)
      .then((res) => {
        console.log(res);
        setForms(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "926589748534-haun8k580htm3scicreql3a1gsh3f2ta.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      width: "100px",
      height: "100px",
    });
  }, []);

  function handleCallbackResponse(response) {
    console.log(response);
    //aqui recebe o token do user
    const token = response.credential;
    //mandar para back e ver se user já existe
    axios.post("");
  }


  return (
  <div>
    <div className="header-login">
      <div className="search-bar">Pesquisar</div>
      <div className="login-button" id="signInDiv">
        Login
      </div>
    </div>
    <div className="jeKlogo">
      <img src="./icon.svg" alt="jeKlogo" width={216} height={218} />
    </div>
    <div className="text">jeKForms</div>
    <div>
        <div className="criar-form">
            <Link to="/AddForms" target="_blank">Criar Formulário</Link>
        </div>
    </div>
    <div className="buttons">
      {forms.map((form, index) => (
        <Links key={index} form={form} />
      ))}
    </div>
  </div>
  )
};

export default HomePage;
