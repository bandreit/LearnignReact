import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props =>
    props.isLogged ? props.theme.colors.grisa : "green"};
`;

export const Text = styled.h1`
  font-size: ${props => props.theme.typography.h1};
  color: ${props => (props.isLogged ? "white" : "yellow")};
`;
