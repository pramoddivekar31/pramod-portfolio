import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./helpers/globalStyle";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact to="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
