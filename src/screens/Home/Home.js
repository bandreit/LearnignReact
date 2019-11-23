import React from "react";
import Box from "../../components/Box";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Box isLogged={true} />
      <Box isLogged={false} />
    </div>
  );
};

export default Home;
