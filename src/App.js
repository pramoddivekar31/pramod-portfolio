import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./helpers/globalStyle";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>{/* <Route></Route> */}</Switch>
      </Router>
    </div>
  );
}

export default App;
