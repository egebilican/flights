import React from "react";
import FlightListPage from "./containers/FlightListPage";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={FlightListPage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
