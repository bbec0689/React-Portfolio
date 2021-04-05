import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  const [categories] = useState ([
    { name: 'About Me', description: 'My resume with a downloadable link' },
    { name: 'Resume', description: 'My resume with a downloadable link' },
    { name: 'Portfolio', description: 'Links of projects I have Created' },
    { name: 'Contact', description: 'My resume with a downloadable link' },
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
        <Contact></Contact>
        <Portfolio></Portfolio>
        <Resume></Resume>
          <About/> 
        </div>
      </main>
    </div>
  );
}

export default App;
