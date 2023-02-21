import React from 'react';
import { HomeScreens } from './screens';

interface RouteInterface {
  path: string;
  element: React.FC;
}

const routes: RouteInterface[] = [{ path: '/', element: HomeScreens }];

export { routes };
