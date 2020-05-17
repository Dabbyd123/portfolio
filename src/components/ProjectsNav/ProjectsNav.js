import React from 'react';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './ProjectsNav.css';

const ProjectsNav = () => {
    return (
        <nav className="projectsNav">
            <button className="topScrollBtn projectsBtn" type="button" onClick={scroll.scrollToTop}><FontAwesomeIcon icon={faChevronUp} /></button>
        </nav>
    )
}

export default ProjectsNav;