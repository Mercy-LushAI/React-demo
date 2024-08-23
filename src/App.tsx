import CreateJob from "./create";
import Home from "./home";
import JobDetails from "./JobDetails";
import Navbar from "./navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";

export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <CreateJob />
            </Route>

            <Route path="/jobs/:id">
              <JobDetails />
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
