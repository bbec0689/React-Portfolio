import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {

    const categories = [
        { name: 'Portfolio', description: '' },
        { name: 'Resume', description: 'My resume with a downloadable link' },
    ];

    const handleClick = (item) => {
        console.log(item);
        return item;
    };

    return (
        <header className="flex-row space-between px-2 header-color">
            <h3>
                <a href="/">
                    <span className="flex-start">Dave Beckstead</span>
        </a>
            </h3>
            <nav>
                <ul className="flex-row flex-end">
                    <li className="mx-2 text-color">
                        <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
                            About me
            </a>
                    </li>
                    <li className={"mx-2"}>
                        <span onClick={() => handleClick('Contact')}>
                            Contact
            </span>
                    </li>
                    {
                        categories.map((category) => (
                            <li className="mx-1" key={category.name} >
                                <span onClick={() => { handleClick(category.name); }}>
                                    {capitalizeFirstLetter(category.name)}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Nav;