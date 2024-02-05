import React from "react";

import { Content } from "./components/Content.component";
import "./App.css";

// JSX
// <div>Hello World!</div> --> React.createElement('<div>Hello World!</div>');
// --> createElement() --> React.createHtmlElement('div') --> document.createElement('div');

/**
 * <body>
 *  <button onclick=()>Click</button>
 * </body>
 * <script>
 *  const tag = 'paragraph';
 *  const sentence = `Some basic ${tag} tag.`
 *
 *  document.getElementById().text(sentence);
 * </script>
 */

function App() {
  return (
    <>
      <div className="first">Hello World!</div>
      <div className="second">Something!</div>
      <Content></Content>
    </>
  );
}

export default App;
