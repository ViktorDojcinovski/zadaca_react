import React, { useState } from "react";

const Content = () => {
  const tag = "paragraph";
  const sentence = `Some basic ${tag} tag.`;
  let [counter, setCounter] = useState(0);
  // const [url, setUrl] = useState();

  const onClickHandler = () => {
    console.log("button clicked!");
    counter = counter + 1;
    setCounter(counter);
  };

  return (
    <>
      <div>
        <a href="https://google.com">Google</a>
        <p>{sentence}</p>
        <p>Counter: {counter}</p>
        <button onClick={onClickHandler}>Send</button>
      </div>
    </>
  );
};

// import React, { Component } from "react";

// class Content extends Component {
//   constructor() {
//     super();
//     this.tag = "paragraph";
//     this.sentence = `Some basic ${this.tag} tag.`;
//     this.state = {
//       counter: 0,
//       url: "google.com"
//     };
//     this.onClickHandler = this.onClickHandler.bind(this);
//   }

//   onClickHandler() {
//     this.setState((prevState) => {
//       return {
//         counter: prevState.counter + 1, // --> button.text('1'); << button.push('1');
//       };
//     });
//   }

//   render() {
//     return (
//       <>
//         <div>
//           <a href="https://google.com">Google</a>
//           <p>{this.sentence}</p>
//           <p>Counter: {this.state.counter}</p>
//           <button onClick={this.onClickHandler}>Send</button>
//         </div>
//       </>
//     );
//   }
// }

export { Content };
