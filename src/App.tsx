import React from 'react';
import './App.css';
import { BrowserRouter as Router, useParams } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation';
import { RouterGroup } from './Router/Router';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BiSearchAlt } from "react-icons/bi";


export default function App() {
  return (
    <Router>
      <section style={{ display: 'flex', flexDirection: 'row' }}>
          <header style={{ padding: 32 }}>
            <Navigation width={280} />
          </header>
          <section style={{ padding: '32px 0px 32px 40px', width: '100%' }}>
            <GlobalSearch />
            <RouterGroup />
          </section>
      </section>
    </Router>
  );
}

function GlobalSearch () {
  return (
    <Form>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="make your search"
          aria-label="search"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">
          <BiSearchAlt />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  )
}
