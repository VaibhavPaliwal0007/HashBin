import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import { render } from "react-dom";
import
{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useSearchParams } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlus, faClock } from "@fortawesome/free-solid-svg-icons";

import './App.scss';

interface Bin
{
  language: string,
  customUrl: string,
  code: string,
  expiryDate: string,
}

async function saveBin ( bin: Bin )
{
  const response = await axios.post( "http://localhost:4000/api/v1/takeCode", bin );
  console.log( response );
}

async function getBin ( binUrl: String ) 
{
  const response = await axios.get( `http://localhost:4000/api/v1${ binUrl }` );
  return response.data;
}

function App ()
{
  const [ customUrl, setCustomURL ] = useState( "" );
  const [ binData, setBinData ] = useState( "" );

  function displayBin ( bin: Bin )
  {
    setCustomURL( bin.customUrl );
    setBinData( bin.code );
  }

  function newBin() {
    setCustomURL( "" );
    setBinData( "" );
  }

  useEffect( () =>
  {
    const binUrl = window.location.pathname;

    async function checkBinUrl () 
    {
      if ( binUrl != '/' )
      {
        let bin: Bin = await getBin( binUrl );
        displayBin( bin );
      }

      else
      {
        return null;
      }
    };

    checkBinUrl();
  }, [] );

  return (
    <div className="App">
      <section className="header">
        <span className="site-name">spider.bin</span>
        <input
          className="custom-url"
          type="text"
          placeholder="Custom URL"
          value={ customUrl }
          onChange={ ( event ) =>
          {
            setCustomURL( event.target.value );
          } } />

        <div className="btn-wrapper">
          <FontAwesomeIcon
            icon={ faSave }
            className="btn"
            onClick={ () =>
            {
              saveBin( {
                language: "txt",
                customUrl: customUrl,
                code: binData,
                expiryDate: "fuck you",
              } );
            } } />
          <FontAwesomeIcon
            icon={ faPlus }
            className="btn"
            onClick={ () =>
            {
              newBin();
            }}
          />
          <FontAwesomeIcon icon={ faClock } className="btn" />
        </div>
      </section>
      <section className="main">
        <textarea
          className="editor"
          value={ binData }
          onChange={ ( event ) =>
          {
            setBinData( event.target.value );
          } }
        />
      </section>
      <section className="footer">
        <div>
          <span className="copyleft">©</span>
          <span>
            Made with ❤️ by LmaoDED Industries
          </span>
        </div>
      </section>
    </div>
  );

}

export default App;
