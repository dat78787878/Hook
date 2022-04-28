import { useContext } from "react";
import Content from "./Content";
import { ThemeContext } from "./ThemeContext";
import "./App.css";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
  cursor: pointer;
`;

function App() {
  const context = useContext(ThemeContext);
  const home = "List item";
  return (
    <div style={{ padding: 20 }}>
      <StyledButton onClick={context.toggleTheme}>Toggle</StyledButton>
      <Content home={home} />
    </div>
  );
}

export default App;
