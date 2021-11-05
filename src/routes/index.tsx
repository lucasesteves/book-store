import React from "react";
import { Switch, Route } from "react-router-dom";
// import { useSelector } from "react-redux";

import { Login, Template, Edit, Detail, RentedBooks, Books } from "~/pages";

const Routes: React.FC = () => {
  // const { isAuth } = useSelector(
  //   ({ authentication }: ApplicationState) => authentication
  // );

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Template>
        <Route path="/books" component={Books} />
        <Route path="/book" component={Detail} />
        <Route path="/edit" component={Edit} />
        <Route path="/rented-books" component={RentedBooks} />
      </Template>
      {/* <Route path="*" exact component={Login} /> */}
    </Switch>
  );
};

export default Routes;
