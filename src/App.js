import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <Nav/>
      <main>
          <Contact></Contact>
          <About/>        
      </main>
    </div>
  );
}

export default App;
