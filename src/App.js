import React from "react";

import { Content } from "./components/Content.component";
import Calculator from "./components/Calculator.component";
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

// function Content(prop1, prop2...) { // logic of the function --> prop1 prop2 }

// Content()

/**
 * Destruction operator
 *
 * const obj = { prop1: 1, prop2: 2 ....}
 *
 * const { prop1, prop2 } = obj;
 *
 * obj.prop1 --> prop1
 *
 * const num = 2;
 *
 * const func = function() {}
 */

function App() {
  const onClickHandler = (data) => {
    console.log("On Click");
    console.log("Counter value is: ", data);
  };

  return (
    <>
      {/* <div className="first">Hello World!</div>
      <div className="second">Something!</div>
      <Content
        title="Component Title"
        prop2={5}
        onClick={onClickHandler}
      ></Content> */}
      <Calculator />
    </>
  );
}

export default App;
