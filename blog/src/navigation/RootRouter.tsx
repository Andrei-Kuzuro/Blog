import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AllPostList } from "../components/AllPostList/AllPostList";
import { Header } from "../components/Header/Header";
import { FullPost } from "../components/FullPost/FullPost";
import { LogIn } from "../components/LogIn/LogIn";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <AllPostList />
        </Route>
        <Route path="/post/:id" exact>
          <FullPost />
        </Route>
        <Route path="/login" exact>
          <LogIn />
        </Route>
        <Route path="/registration" exact>
          <LogIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
