import "./App.css";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import NewPost from "./components/NewPost";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/userdetails/:id" component={UserDetails} />
        <Route path="/newpost" component={NewPost} />
      </Switch>
    </div>
  );
}

export default App;
