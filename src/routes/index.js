import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Index from "../pages/Index";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Index />
      </Route>
      <Route exact path={"/home"}>
        <Home />
      </Route>
    </Switch>
  );
};

export default Router;
