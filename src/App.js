import React from "react";
import FlightListPage from "./containers/FlightListPage";
import NotesPage from "./containers/NotesPage";
import { ThemeProvider } from "@material-ui/styles";
import Container from "@material-ui/core/Container";

import theme from "./theme";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container maxWidth="sm">
            <Link to="/">Flighs </Link>
            <Link to="/notes">Notes</Link>

            <Switch>
              <Route exact path="/" component={FlightListPage} />
              <Route path="/notes" component={NotesPage} />
            </Switch>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
