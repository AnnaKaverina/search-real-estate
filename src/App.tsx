import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main';
import SearchPage from './pages/search';
import {Navigation} from "./types/constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path={Navigation.Search} element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
