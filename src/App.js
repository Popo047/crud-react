import "./App.css";
import Users from "./components/Users";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Users} />
      </Switch>
    </div>
  );
}

export default App;
