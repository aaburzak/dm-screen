
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./style.css";

import Header from './components/Header';
import DmScreen from "./pages/DmScreen";
import CombatTracker from "./pages/CombatTracker";
import NotePage from "./pages/NotePage";
import SpellPage from "./pages/SpellPage";
import TravelPage from "./pages/TravelPage";

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
              <Route 
                path="/travel" 
                element={<TravelPage />} 
              />
              <Route 
                path="/spells" 
                element={<SpellPage />} 
              />
              <Route 
                path="/spells/:search" 
                element={<SpellPage />} 
              />
            </Routes>
        </div> 
      </div>
    </Router>
  );
}

export default App;
