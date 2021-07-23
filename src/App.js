import "./App.css";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/userdetails/:id" component={UserDetails} />
      </Switch>
    </div>
  );
}

export default App;
