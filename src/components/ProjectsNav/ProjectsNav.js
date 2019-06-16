import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './ProjectsNav.css';

const ProjectsNav = () => {
    return (
        <nav className="projectsNav">
            <Link to="todoList" spy={false} smooth={true} offset={0} duration={700}>
                <button className="projectsBtn">ToDo List</button>
            </Link>
            <Link to="robofriends" spy={false} smooth={true} offset={0} duration={700}>
                <button className="projectsBtn">Robofriends</button>
            </Link>
            <Link to="mars-rovers" spy={false} smooth={true} offset={0} duration={700}>
                <button className="projectsBtn">Mars-Rovers</button>
            </Link>
            <button className="topScrollBtn projectsBtn" type="button" onClick={scroll.scrollToTop}>Top</button>

        </nav>
    )
}

export default ProjectsNav;