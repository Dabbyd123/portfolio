import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './ProjectsNav.css';

const ProjectsNav = () => {
    return (
        <nav className="projectsNav">
            <Link to='top' className="topScrollBtn" spy={false} smooth={true} offset={0} duration={700} onClick={scroll.scrollToTop}><FontAwesomeIcon icon={faChevronUp} /></Link>
        </nav>
    )
}

export default ProjectsNav;