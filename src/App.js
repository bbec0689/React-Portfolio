import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {



  const [categories] = useState ([
    // { name: 'About Me', description: 'My resume with a downloadable link' },
    // { name: 'Resume', description: 'My resume with a downloadable link' },
    // { name: 'Portfolio', description: 'Links of projects I have Created' },
    // { name: 'Contact', description: 'My resume with a downloadable link' },
]);


const [currentCategory, setCurrentCategory] = useState(categories[0]);

const [contactSelected, setContactSelected] = useState(false);

const [portfolioSelected, setPortfolioSelected] = useState(false);

const [resumeSelected, setResumeSelected] = useState(false);

const [aboutSelected, setAboutSelected] = useState(true);



  return (
    <div>
<Nav
  categories={categories}
  setCurrentCategory={setCurrentCategory}
  currentCategory={currentCategory}
  portfolioSelected={portfolioSelected}
  resumeSelected={resumeSelected}
  aboutSelected={aboutSelected}
  setAboutSelected={setAboutSelected}
  setPortfolioSelected={setPortfolioSelected}
  contactSelected={contactSelected}
  setContactSelected={setContactSelected}
  setResumeSelected={setResumeSelected}
></Nav>
      <main>
        
      {!contactSelected ? (
          <>
            <Portfolio></Portfolio>
            <About currentCategory={currentCategory}></About>
            <Resume></Resume>
          </>
        ) : (
            <Contact></Contact>
            
          )}
              {!aboutSelected ? (
          <>
            <Portfolio></Portfolio>
            <Contact currentCategory={currentCategory}></Contact>
            <Resume></Resume>
          </>
        ) : (
            <About></About>
            
          )}
        
      </main>
    </div>
  );
}

export default App;
