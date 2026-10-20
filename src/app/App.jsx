import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../entities/catalog/model';
import { CatalogPage } from '../pages/catalog-page/CatalogPage';

export const App = () => (
  <Provider store={store}>
    <CatalogPage />
  </Provider>
);
