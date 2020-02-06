import React from 'react';
import { BrowserRouter as Router} from "react-router-dom"; 

import './App.css';
import Sidebar from './components/sidebar.component'
import Landing from './components/landing.component'

function App() {
  return (
    <Router>
      <Sidebar />
      <Landing />

    </Router>
  );
}

export default App;
