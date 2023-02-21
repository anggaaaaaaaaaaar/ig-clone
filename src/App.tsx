import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { routes } from './route';

export const router = createBrowserRouter(
  createRoutesFromElements(
    routes.map((res, i) => <Route key={i} path={res.path} element={<res.element />} />)
  )
);
