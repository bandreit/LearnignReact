import React, { useState, useEffect } from "react";
import Home from "./screens/Home";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;

// import React from 'react';

// class Person extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       age:0
//     this.incrementAge = this.incrementAge.bind(this)
//   }

//   incrementAge(){
//     this.setState({
//       age:this.state.age + 1;
//     });
//   }

//   render(){
//     return(
//       <div>
//         <label>My age is: {this.state.age}</label>
//         <button onClick={this.incrementAge}>Grow me older !!<button>
//       </div>
//     );
//   }
// }

// export default Person;
