import Home from "./pages/home";
import "antd/dist/antd.css";
import { createGlobalStyle } from 'styled-components'
import React from 'react';

function App() {
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
  return (
    <div>
      <GlobalStyle />
       <Home  />
    </div>
  );
}

export default App;
