import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Article from "./article";
import Categories from "./categories";
import Home from "./home";
import Aside  from "../layouts/Aside";
const AppRouter = () => {
  return (
    <Router>
      <Aside />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">categories</Link>
            </li>
            <li>
              <Link to="/article">article</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )

}
export default AppRouter