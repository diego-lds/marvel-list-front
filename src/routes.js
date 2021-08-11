import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Detail from "./pages/detail";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" exact component={Detail} />
      </Switch>
    </Router>
  );
};

export default Routes;
