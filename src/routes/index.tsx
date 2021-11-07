import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { Login, Template, Edit, RentedBooks, Books } from "~/pages";
import { ApplicationState } from "~/store";

const Routes: React.FC = () => {
  const { name } = useSelector(({ login }: ApplicationState) => login);

  return (
    <Switch>
      <Route path="/" exact>
        {!name ? <Login /> : <Redirect to="/books" />}
      </Route>
      {name ? (
        <Template>
          <Route path="/books" component={Books} />
          <Route path="/edit" component={Edit} />
          <Route path="/rented-books" component={RentedBooks} />
        </Template>
      ) : (
        <Redirect to="/" />
      )}
    </Switch>
  );
};

export default Routes;
