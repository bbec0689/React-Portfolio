import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {

  const tabs = ["About Me", "Contact", "Portfolio", "Resume"]



    return (

<>
<header className="flex-row space-between px-2 header-color">
<h1>
                <Link className="Jones" to="/">
                    <span role="img" aria-label="shopping bag">🧥</span>
                    Steele & Jones
                </Link>
            </h1>

  <div>
    <ul className="flex-row">
      {tabs.map((tab) => (
        <li className="mx-2" key={tab}>
          <a
            href={"#" + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? "nav-link active" : "nav-link"
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  </div>
</header>
<footer className="footer flex-row space-around header-color">
  <a href="https://github.com/bbec0689">Github</a>
  <a href="https://www.linkedin.com/in/dave-b-15027a1b8/">LinkedIn</a>
  <a href="https://stackoverflow.com/users/14330596/dave-b">Stack Overflow</a>
</footer>
</>
);
}

export default Nav;