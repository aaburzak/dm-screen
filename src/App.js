
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./style.css";

import DmScreen from "./pages/DmScreen";
import CombatTracker from "./pages/CombatTracker";

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
              <Route 
                path="/combat" 
                element={<CombatTracker />} 
              />
            </Routes>
        </div> 
      </div>
    </Router>
  );
}

export default App;
