import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {



  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    portfolioSelected,
    resumeSelected,
    aboutSelected,
    currentCategory,
    setContactSelected,
    setPortfolioSelected,
    setResumeSelected,
    setAboutSelected,
  } = props;


    return (
        <header className="flex-row space-between px-2 header-color">
            <h2>
                <a href="/">
                    <span className="flex-start">Dave Beckstead</span>
        </a>
            </h2>
            <nav>
            <ul className="flex-row">
          <li className="mx-2">
          </li>
          <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
            <span onClick={() => setAboutSelected(true)}>About</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !aboutSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setAboutSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>

          ))}
                    <li className="mx-2">
          </li>
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !portfolioSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setPortfolioSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>

          ))}

<li className="mx-2">
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <span onClick={() => setResumeSelected(true)}>Resume</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !resumeSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setResumeSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>

          ))}

<li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
            </nav>
        </header>
    );
}

export default Nav;