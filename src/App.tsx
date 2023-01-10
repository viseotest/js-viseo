import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation';
import { RouterGroup } from './Router/Router';

export default function App() {
  return (
    <Router>
      <section style={{ display: 'flex', flexDirection: 'row' }}>
          <header style={{ padding: 32 }}>
            <Navigation />
          </header>
          <section style={{ padding: 32 }}>
            <RouterGroup />
          </section>
      </section>
    </Router>
  );
}
