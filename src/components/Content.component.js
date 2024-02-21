import { useState, useEffect } from "react";

import { Pokemon } from "./Pokemon.component";

// { title: "Title", prop2: 2 ....}
// const { title, prop2 } = props;

// const programmingLanguages = ["JavaScript", "Java", "C#"]
// const [js, java, cSharp] = programmingLanguages;

const Content = ({ title, prop2, onClick }) => {
  // const { title, prop2, onClick } = props;
  const tag = "paragraph";
  const sentence = `Some basic ${tag} tag.`;

  let [counter] = useState(5);
  let [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setPokemons(data.results);
  };

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    // Approach 1.: Resolving promise using the then method

    // response
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     const pokemon = data.results[0].name;
    //     setPokemon(pokemon);
    //     setPokemon(data.results[0].name);
    //   });
    //

    // Approach 2.: Resolving promise using the async-await syntax

    // fetchPokemons(url)
    // setPokemon(data.results[0].name);

    fetchPokemons(url);
  }, []);

  // const onClickHandler = () => {
  //   console.log("button clicked!");
  //   counter = counter + 1;
  //   setCounter(counter);
  // };
  // function (i) { return i + 1};
  // [2, 3, 4] -- > arr.map((i) => { return i + 1 }) arr --> [1, 2, 3]

  /**
   * if(condition) {
   *
   * } else {
   *
   * }
   *
   * { condition ? {} : {} }
   */

  return (
    <>
      <div>
        <h1>{title}</h1>
        <h2>{prop2}</h2>
        <a href="https://google.com">Google</a>
        <p>{sentence}</p>
        <p>Counter: {counter}</p>
        <button onClick={() => onClick(counter)}>Send</button>
        <input onChange={() => {}} />
        <p>
          {!pokemons.length
            ? "loading..."
            : pokemons.map((pokemon) => {
                return <Pokemon pokemon={pokemon} />;
              })}
        </p>
      </div>
    </>
  );
};

// import React, { Component } from "react";

// class Content extends Component {
//   constructor() {
//     console.log("Constructor invocation!");
//     super();
//     this.tag = "paragraph";
//     this.sentence = `Some basic ${this.tag} tag.`;
//     this.state = {
//       counter: 0,
//       url: "google.com",
//       pokemon: null, // string, number, boolean, Object, Array, undefined, null
//     };
//     // this.onClickHandler = this.onClickHandler.bind(this);
//   }

//   // onClickHandler() {
//   //   this.setState((prevState) => {
//   //     return {
//   //       counter: prevState.counter + 1, // --> button.text('1'); << button.push('1');
//   //     };
//   //   });
//   // }

//   componentDidMount() {
//     console.log("ComponentDidMount invocation!");
//     const url = "https://pokeapi.co/api/v2/pokemon";

//     const response = fetch(url);
//     response
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         this.setState({
//           pokemon: data.results[0].name,
//         });
//       });
//   }

//   componentDidUpdate() {
//     console.log("ComponentDidUpdate invocation!");
//   }

//   render() {
//     console.log("Render invocation!");

//     const { title, prop2, onClick } = this.props;

//     return (
//       <>
//         <div>
//           <h1>{title}</h1>
//           <h2>{prop2}</h2>
//           <a href="https://google.com">Google</a>
//           <p>{this.sentence}</p>
//           <p>Counter: {this.state.counter}</p>
//           <button onClick={() => onClick(this.state.counter)}>Send</button>
//           <input />
//           <p>{this.state.pokemon}</p>
//         </div>
//       </>
//     );
//   }
// }

export { Content };
