import React from 'react';
import './About.css';
import GearIcon from '../../images/portfolio-icons/gear-icon.png';
import ArtIcon from '../../images/portfolio-icons/art-icon.png';
import CometIcon from '../../images/portfolio-icons/comet-icon.png';
import ColinImage from '../../images/no-sunglasses-pilot.JPG';
import BlackCatIcon from '../../images/link-icons/cat-icon-black.png';
import BusinessIcon from '../../images/link-icons/business-icon.png';
import BasketballIcon from '../../images/link-icons/basketball-icon.png';


function About () {
    return (
        <section className="about">

            <div className="about__icons">
                <img className="icon" src={GearIcon} alt=""/>
                <img className="icon" src={ArtIcon} alt="" />
                <img className="icon" src={CometIcon} alt="" />
            </div>

            <div className="about-navigator" id="about"></div>

            <div className="about__exterior">
                <h2 className="about__title">Front-End Web Developer.</h2>
                <h2 className="about__title">Web Designer.</h2>
                <h2 className="about__title">Sex Symbol.</h2>

                <article className="about__info">
                    <div className="about__intro">
                        <img className="about__image" src={ColinImage} alt="" />
                    </div>
                    <div className="about__me">
                        <p className="about__paragraph">I'm a traveler and freelance web developer with a passion for
                            injecting
                            life into everything I create. I design and build websites that are elegant in their
                            simplicity,
                            and try to combine the architectural with the aesthetic. I aim to create works of art that
                            help
                            your
                            life run better.</p>
                        <p className="about__paragraph">When I'm not coding, I'm working on my <a
                            className="about__animation-link"
                            href="https://www.youtube.com/channel/UCmvmSKDd3Wo7CQt8carRVuA" target="_blank" rel="noreferrer" >animated
                            history
                            channel</a>, and wakeboarding. Check me out at the places below:</p>
                        <div className="about__icons">
                            <a className="icon-link" href="https://github.com/cjmaret" target="_blank" rel="noreferrer" ><img
                                className="places-icon" src={BlackCatIcon} alt="" /></a>
                            <a className="icon-link" href="https://www.linkedin.com/in/colin-maretsky/" target="_blank" rel="noreferrer" ><img
                                className="places-icon" src={BusinessIcon} alt="" /></a>
                            <a className="icon-link" href="https://dribbble.com/cjmaret" target="_blank" rel="noreferrer" ><img
                                className="places-icon" src={BasketballIcon} alt="" /></a>
                        </div>

                    </div>
                </article>

                <article className="about__lists">

                    <div className="list list_type_languages">
                        <p className="list-interior__title">I Speak</p>
                        <ul className="list-interior__list">
                            <li className="list-interior__list-item">HTML5</li>
                            <li className="list-interior__list-item">CSS</li>
                            <li className="list-interior__list-item">Javascript</li>
                            <li className="list-interior__list-item">React</li>
                            <li className="list-interior__list-item">PHP</li>
                        </ul>
                    </div>

                    <div className="list list_type_languages-learning">
                        <p className="list-interior__title">I'm Learning</p>
                        <ul className="list-interior__list">
                            <li className="list-interior__list-item">Node.js</li>
                            <li className="list-interior__list-item">jQuery</li>
                            <li className="list-interior__list-item">Gatsby</li>
                        </ul>
                    </div>

                    <div className="list list_type_tools">
                        <p className="list-interior__title">I Use</p>
                        <ul className="list-interior__list">
                            <li className="list-interior__list-item list-interior__list-item_type_tools">Github</li>
                            <li className="list-interior__list-item list-interior__list-item_type_tools">Terminal</li>
                            <li className="list-interior__list-item list-interior__list-item_type_tools">Figma</li>
                            <li className="list-interior__list-item list-interior__list-item_type_tools">Motion 5</li>
                            <li className="list-interior__list-item list-interior__list-item_type_tools">Illustrator</li>
                        </ul>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default About;