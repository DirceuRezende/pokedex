import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Pokedex = React.lazy(() => import('pages/Pokedex'));
const Error404 = React.lazy(() => import('pages/Error404'));
const Pokemon = React.lazy(() => import('pages/Pokemon'));

const Routes = () => (

  <Switch>
    <Route exact path="/">
      <Suspense fallback="Carregando...">
        <Pokedex />
      </Suspense>
    </Route>
    <Route exact path="/pokemon/:id">
      <Suspense fallback="Carregando...">
        <Pokemon />
      </Suspense>
    </Route>
    <Route>
      <Suspense fallback="Carregando...">
        <Error404 />
      </Suspense>
    </Route>
  </Switch>

);

export default Routes;
