import React from 'react';
import { Route } from 'react-router';

import WorkersPage from './pages/WorkersPage';

const routes = (
  <Route exact path="/" component={WorkersPage} />
);

export default routes;
