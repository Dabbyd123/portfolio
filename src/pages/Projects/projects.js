import React, { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import NavBar from '../../components/Toolbar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './projects.css';

const Projects = () => {

    const [scrolled, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== true) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
        return window.removeEventListener('scroll', null)
    })


    return (
        <div name="top" className="projects">
            <NavBar />
            {scrolled ? <nav className="projectsNav">
                <Link to='top' className="topScrollBtn" spy={false} smooth={true} offset={0} duration={900}><FontAwesomeIcon icon={faChevronUp} /></Link>
            </nav> : null}
            <div className="projects-container">
                <div className="h1-container project-header">
                    <h1>Projects</h1>
                </div>
                <div className="project-card mars">
                    <h2>Mars Rovers</h2>
                    <div className="thumbnail-container">
                        <Link to="mars-rovers" spy={false} smooth={true} offset={0} duration={700}>
                            <div className="project-image-mars"></div>
                        </Link>
                    </div>
                    <p>Built in React and CSS grid.</p>
                </div>
                <div className="project-card covid">
                    <h2>COVID-19 Tracker</h2>
                    <div className="thumbnail-container">
                        <Link to="covidTracker" spy={false} smooth={true} offset={0} duration={700}>
                            <div role="button" className="project-image-covid"></div>
                        </Link>
                    </div>
                    <p>Built using React and styled components. This is my most recent project.</p>
                </div>
                <div className="project-card robofriends">
                    <h2>Robofriends</h2>
                    <div className="thumbnail-container">
                        <Link to="robofriends" spy={false} smooth={true} offset={0} duration={700}>
                            <div className="project-image-robofriends"></div>
                        </Link>
                    </div>
                    <p>Built in React.</p>
                </div>
            </div>

            <section name="mars-rovers">
                <iframe title="mars-rovers" src="https://confident-goldwasser-56f9df.netlify.com/" frameBorder="0" width="100%" height="100%">
                </iframe>
            </section>
            <section name="covidTracker">
                <iframe title="todo-list" src="https://covid19statsusa.com" frameBorder="0" width="100%" height="100%">
                </iframe>
            </section>
            <section name="robofriends" className="robofriends-container">
                <iframe title="robofriends" src="https://dabbyd123.github.io/Robofriends" frameBorder="0" width="100%" height="100%">
                </iframe>
            </section>
        </div >
    )
}

export default Projects;