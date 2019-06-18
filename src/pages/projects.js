import React, { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import NavBar from '../components/Toolbar/NavBar';
import ProjectsNav from '../components/ProjectsNav/ProjectsNav';
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
        <div className="projects">
            <NavBar />
            {scrolled ? <ProjectsNav /> : null}
            <div className="projects-container">
                <div className="h1-container project-header">
                    <h1>Projects</h1>
                </div>
                <div className="p">
                    <hr />
                    Over the past couple of years I have learned a lot, but I know I have only scratched the surface of the seemingly endless ocean of information that is out there. These are a few projects that exemplify my journey so far.
                    My most recent project is Mars Rovers and I had a great time building it, so please make sure to check that one out!
                <p>Just click the picture in the card to view that website.</p>
                    <hr />
                </div>
                <div className="project-card mars">
                    <h2>Mars Rovers</h2>
                    <div className="thumbnail-container">
                        <Link to="mars-rovers" spy={false} smooth={true} offset={0} duration={700}>
                            <div className="project-image-mars"></div>
                        </Link>
                    </div>
                    <p>This is my most recent project using React.js. I used the NASA Mars Rovers API as my data source.</p>
                </div>
                <div className="project-card todo">
                    <h2>Todo List</h2>
                    <div className="thumbnail-container">
                        <Link to="todoList" spy={false} smooth={true} offset={0} duration={700}>
                            <div role="button" className="project-image-todo"></div>
                        </Link>
                    </div>
                    <p>This is my first actual project I ever did using Javascript. A simple Todo list.</p>
                </div>
                <div className="project-card robofriends">
                    <h2>Robofriends</h2>
                    <div className="thumbnail-container">
                        <Link to="robofriends" spy={false} smooth={true} offset={0} duration={700}>
                            <div className="project-image-robofriends"></div>
                        </Link>
                    </div>
                    <p>This is my first project using React.js</p>
                </div>
            </div>

            <section name="mars-rovers">
                <iframe title="mars-rovers" src="https://confident-goldwasser-56f9df.netlify.com/" frameBorder="0" width="100%" height="100%">
                </iframe>
            </section>
            <section name="todoList">
                <iframe title="todo-list" src="https://dabbyd123.github.io/todoList" frameBorder="0" width="100%" height="100%">
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