import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"; 

import './App.css';
import Sidebar from './components/sidebar.component'
import Landing from './components/landing.component'
import Projects from './components/projects.component'

function App() {
  return (
    <Router>
      <Sidebar />
      <Route path = "/" exact component={Landing} /> 
      <Route path = "/projects" component={Projects} />

    </Router>
  );
}

export default App;
