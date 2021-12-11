import "./styles/App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
