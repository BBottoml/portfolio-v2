import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"; 
import HttpsRedirect from 'react-https-redirect';

import './App.css';
import Sidebar from './components/sidebar.component'
import Landing from './components/landing.component'
import Projects from './components/projects.component'
import Experience from './components/experience.component';
import Skills from './components/skills.component'

function App() {
  return (
    <HttpsRedirect>
      <Router>
        <Sidebar />
        <Route path = "/" exact component={Landing} /> 
        <Route path = "/projects" component={Projects} />
        <Route path = "/experience" component={Experience} /> 
        <Route path = "/skills" component={Skills} /> 

      </Router>
    </HttpsRedirect>
  );
}

export default App;
