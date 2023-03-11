
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./style.css";

import Header from './components/Header';
import DmScreen from "./pages/DmScreen";
import CombatTracker from "./pages/CombatTracker";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="wrapper">
      <Header />
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
              <Route 
                path="/notes" 
                element={<NotePage />} 
              />
            </Routes>
        </div> 
      </div>
    </Router>
  );
}

export default App;
