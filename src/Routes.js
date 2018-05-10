import * as React from 'react';
import { Route } from 'react-router-dom';

export const routes =
<Route exact path='/' component={ Home } />
<Route path='/counter' component={ Counter } />
<Route path='/fetchdata' component={ FetchData } />;
