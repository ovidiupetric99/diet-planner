import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import './index.scss';
import App from './App';

import {UserProvider} from './contexts/user.context';
import {FoodProvider} from './contexts/food.context';
import {DietProvider} from './contexts/diet.context';

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (
  <BrowserRouter>
    <UserProvider>
      <FoodProvider>
        <DietProvider>
          <App />
        </DietProvider>
      </FoodProvider>
    </UserProvider>
  </BrowserRouter>
);
