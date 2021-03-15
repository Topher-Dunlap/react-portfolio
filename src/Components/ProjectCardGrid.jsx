import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import Parallax from "react-rellax/lib/index";
import {SimpleGrid} from "@chakra-ui/react";
import traveler from "../images/traveler_1.png";
import factCheck from "../images/fact_check.jpg";
import woLanding from "../images/wo-landing.png";
// import {SiGithub} from "react-icons/si";

export default function ProjectCardGrid() {

    const [worstProState, setWorstProstate] = useState({
            title: "Worst Of",
            content: "This app allows the user to search for the worst Restaurants, bars or coffee establishments in a given area.",
            frontSkills: ["React, JSX, JavaScript, jQuery, Jest, Axios, Service Objects, Routing, Error Boundaries, JWT, Hooks, CSS"],
            backSkills: ["Node.js, Express, Express Router, Postgres, SQL, Knex, Postgrator, Jest, JWT, Service Objects, Morgan"],
            frontEnd: "Front-End",
            backEnd: "Back-End",
            img: woLanding,
            frontEndLink: "https://github.com/Topher-Dunlap/worst-of-client",
            BackEndLink: "https://github.com/Topher-Dunlap/worst-of-server",
        }
    );

    const [factProState, setFactProstate] = useState({
            title: "FactCheck",
            content: ["I created this app which integrates the Google Fact Check API and also includes media bias and factual reporting record for sources that fact check claims."],
            frontSkills: ["RestAPI, JQuery, CSS, HTML, Javascript"],
            backSkills: ['No Back-End'],
            img: factCheck,
            frontEndLink: "https://github.com/Topher-Dunlap/fact_check_app",
            backEndLink: "",
        }
    );

    const [travelerProState, setTravelerProState] = useState({
            title: "Thriftiest Traveler",
            content: ["Thriftiest Traveler shows you the best deals on travel in areas that have recently experienced a disaster or terrorist related event."],
            frontSkills: ["React, JSX, JavaScript, jQuery, Jest, Axios, Service Objects, Routing, Error Boundaries, JWT, Hooks, CSS"],
            backSkills: ["Node.js, Express, Express Router, Postgres, SQL, Knex, Postgrator, Jest, JWT, Service Objects, Morgan"],
            frontEnd: "Front-End",
            backEnd: "Back-End",
            img: traveler,
            frontEndLink: "https://github.com/Topher-Dunlap/thriftiest-traveler-client",
            backEndLink: "https://github.com/Topher-Dunlap/thriftiest-traveler-server",
        }
    );

    return (
        <section style={bodyStyle}>
            <Parallax speed={3}>
                <SimpleGrid minChildWidth="120px" spacing="40px">
                    <ProjectCard
                        title={travelerProState.title}
                        content={travelerProState.content}
                        frontSkills={travelerProState.frontSkills}
                        backSkills={travelerProState.backSkills}
                        frontEndLink={travelerProState.frontEndLink}
                        backEndLink={travelerProState.backEndLink}
                        img={travelerProState.img}/>
                    <ProjectCard
                        title={worstProState.title}
                        content={worstProState.content}
                        frontSkills={worstProState.frontSkills}
                        backSkills={worstProState.backSkills}
                        frontEndLink={worstProState.frontEndLink}
                        backEndLink={worstProState.backEndLink}
                        img={worstProState.img}/>
                    <ProjectCard
                        title={factProState.title}
                        content={factProState.content}
                        frontSkills={factProState.frontSkills}
                        backSkills={factProState.backSkills}
                        frontEndLink={factProState.frontEndLink}
                        backEndLink={factProState.backEndLink}
                        img={factProState.img}/>
                </SimpleGrid>
            </Parallax>
        </section>
    )
}

const bodyStyle = {
    backgroundColor: "#181818",
    color: "#fefefe",
    WebkitBoxAlign: "center",
    WebkitBoxPack: "center",
    display: "-webkit-box",
    fontSize: "3.5rem",
    fontFamily: 'Ubuntu, sans-serif',
    position: "relative",
    margin: "4rem",
}