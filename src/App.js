import "./App.css";
import { GlobalStyle } from "./styles/globalStyle";
import Router from "./routes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
