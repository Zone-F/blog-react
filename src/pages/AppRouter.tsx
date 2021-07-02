import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Article from "./article";
import Categories from "./categories";
import Home from "./home";
import Aside from "../layouts/Aside";
import './AppRouter.less'
import 'antd/dist/antd.css';
const AppRouter = () => {
  return (
    <Router>
      <div className="default">
        <div className="headband"></div>
        <div className="content">
          <div className="left">
            <Aside />
          </div>
          <div className="right">
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
        </div>
      </div>
    </Router>
  )

}
export default AppRouter