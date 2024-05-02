import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import './shop.css';
import Car from './car';
import Mobile from './mobile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Brands from './brands/car_brands';
import Bike from './bike';
import Car_brands from './brands/car_brands';
import Bike_brands from './brands/bike_brands';
import Mobile_brands from './brands/mobile_brands';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/car' element={<Car />} />
      <Route exact path='/bike' element={<Bike></Bike>} />
      <Route exact path='/mobile' element={<Mobile />} />
      <Route exact path='/car/brands' element={<Car_brands></Car_brands>} />
      <Route exact path='/bike/brands' element={<Bike_brands></Bike_brands>} />
      <Route exact path='/mobile/brands' element={<Mobile_brands></Mobile_brands>} />


    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
