
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DmScreen from "./pages/DmScreen";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<DmScreen />} 
              />
            </Routes>
        </div> 
      </div>
    </Router>
  );
}

export default App;
