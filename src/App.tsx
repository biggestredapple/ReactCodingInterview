import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage, LayoutEffectPage, NestedPage, RobotListPage } from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nested' element={<NestedPage />} />
        <Route path='/robotlist' element={<RobotListPage />} />
        <Route path='/layouteffect' element={<LayoutEffectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
