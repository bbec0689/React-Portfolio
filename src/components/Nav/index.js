import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {



    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;

      useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]);


    return (
        <header className="flex-row space-between px-2 header-color">
            <h2>
                <a href="/">
                    <span className="flex-start">Dave Beckstead</span>
        </a>
            </h2>
            <nav>
                <ul className="flex-row flex-end">

                    {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`} key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category)
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