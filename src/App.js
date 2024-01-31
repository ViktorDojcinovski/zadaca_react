import React from "react";
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
function Content() {
  const tag = "paragraph";
  const sentence = `Some basic ${tag} tag.`;
  return (
    <>
      <div>
        <a href="https://google.com">Google</a>
        <p onClick>{sentence}</p>
      </div>
    </>
  );
}

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
