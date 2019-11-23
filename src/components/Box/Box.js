import React, { Component } from "react";
import { Wrapper, Text } from "./Box.styles";

const Box = props => (
  <Wrapper isLogged={props.isLogged}>
    <Text isLogged={props.isLogged}>Test</Text>
  </Wrapper>
);

export default Box;
