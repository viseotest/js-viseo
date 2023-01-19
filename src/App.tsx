import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation';
import { RouterGroup } from './Router/Router';


export default function App() {
  return (
    <Router basename='/js-viseo'>
      <section style={{ display: 'flex', flexDirection: 'row' }}>
          <header style={{ padding: 32 }}>
            <Navigation width={350} />
          </header>
          <section style={{ padding: '40px 32px', width: '100%' }}>
            {/* <GlobalSearch /> */}
            <RouterGroup />
          </section>
      </section>
    </Router>
  );
}