import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlus, faClock } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef } from 'react';
import './App.scss';

function App ()
{
  const [ code, setCode ] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (
    <div className="App">
      <section className="header">
        <span className="site-name">spider.bin</span>
        <input className="custom-url" type="text" placeholder="Custom URL" />
        <div className="btn-wrapper">
          <FontAwesomeIcon icon={ faSave } className="btn" />
          <FontAwesomeIcon icon={ faPlus } className="btn" />
          <FontAwesomeIcon icon={ faClock } className="btn" />
        </div>
      </section>
      <section className="main">
        <textarea className="editor"></textarea>
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
