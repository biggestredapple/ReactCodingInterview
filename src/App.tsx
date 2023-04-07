import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage, NestedPage } from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nested' element={<NestedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
