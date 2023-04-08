import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage, NestedPage, RobotListPage } from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nested' element={<NestedPage />} />
        <Route path='/robotlist' element={<RobotListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
