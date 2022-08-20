import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './Nav/Nav'
import Welcome from './components/Welcome';
function App() {
  return (
    <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<Welcome/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
