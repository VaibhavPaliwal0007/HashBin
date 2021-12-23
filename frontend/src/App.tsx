import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlus, faClock } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import './App.scss';
import Editor from "@monaco-editor/react";

function App ()
{
  return (
    <div className="App">
      <section className="header">
        <span>spider.bin</span>
        <input placeholder="Custom Url" />
        <div>
          <FontAwesomeIcon icon={ faSave } />
          <FontAwesomeIcon icon={ faPlus } />
          <FontAwesomeIcon icon={ faClock } />
        </div>
      </section>
      <section className="editor">
        <Editor
          height="100%"
          
          theme= 'vs-dark'
        />
      </section>
      <section className="footer"></section>
      {/* hello */ }
    </div>
  );
}

export default App;
