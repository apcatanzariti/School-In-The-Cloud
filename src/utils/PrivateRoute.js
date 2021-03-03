import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem.parse("token")) {
          return <Component />;
        } else {
          return <Redirect to="/" />;
        } // end of else
      }} //end of render
    /> //end of Route
  ); //end of return
} //end of function
