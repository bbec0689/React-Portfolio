import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';






function App() {


const [currentPage, handlePageChange] = useState("About Me");

const renderPage = () => {
  switch (currentPage) {
    case "About Me":
      return <About />;
    case "Portfolio":
      return <Portfolio />;
    case "Contact":
      return <Contact />;
    case "Resume":
      return <Resume />;
  }
};



  return (


<>
<nav>
  <Nav
    currentPage={currentPage}
    handlePageChange={handlePageChange}
  />

  <div>{renderPage()}</div>
</nav>

</>
);
}


export default App;
