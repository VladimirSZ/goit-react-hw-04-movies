import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

const AsyncHome = lazy(() => import("./pages/HomePage"));
const AsyncMoviesPage = lazy(() => import("./pages/MoviesPage"));
const AsyncMovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const AsyncErrorPage = lazy(() => import("./pages/ErrorPage"));

const App = () => (
  <>
  <Navigation />
  <Suspense fallback={<h2>Loading...</h2>}>
    <Switch>
      <Route exact path="/" component={AsyncHome}></Route>
      <Route exact path="/movies" component={AsyncMoviesPage} />
      <Route path="/movies/:id" component={AsyncMovieDetailsPage} />
      <Route component={AsyncErrorPage} />
    </Switch>
  </Suspense>
</>
);

export default App;