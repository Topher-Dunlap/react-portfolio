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
            content: "This app allows the user to search for the worst Restaurants, bars or coffee establishments in a given area. It's made for users that want an interesting and exciting flip to the dining experience. Apps like yelp won't filter the worst rated places so I made an app that would!",
            frontSkills: ["React, JSX, JavaScript, jQuery, Jest, Axios, Service Objects, Routing, Error Boundaries, JWT, Hooks, CSS"],
            backSkills: ["Node.js, Express, Express Router, Postgres, SQL, Knex, Postgrator, Jest, JWT, Service Objects, Morgan"],
            frontEnd: "Front-End",
            backEnd: "Back-End",
            img: woLanding,
            frontEndLink: "https://github.com/Topher-Dunlap/worst-of-client",
            BackEndLink: "https://github.com/Topher-Dunlap/worst-of-server",
            liveAppLink: "https://worst-of-client-topher-dunlap.vercel.app/",
        }
    );

    const [factProState, setFactProstate] = useState({
            title: "FactCheck",
            content: ["This app checks the media bias and factual reporting record for sources that fact check claims. I created this app to help combat misinformation on the internet. It integrates the Google Fact Check API and also includes media bias and factual reporting information on sites that fact check claims. If you're looking for the most accurate sources of news this app is for you!"],
            frontSkills: ["RestAPI, JQuery, CSS, HTML, Javascript"],
            backSkills: ['No Back-End'],
            img: factCheck,
            frontEndLink: "https://github.com/Topher-Dunlap/fact_check_app",
            backEndLink: "",
            liveAppLink: "https://topher-dunlap.github.io/fact_check_app/",
        }
    );

    const [travelerProState, setTravelerProState] = useState({
            title: "Thriftiest Traveler",
            content: ["Thriftiest Traveler shows you the best deals on travel in areas that have recently experienced disaster or terrorist related events. I created the app after seeing a TikTok video of a traveler utilizing this method for booking trips. If you're looking to save some money on seeing some amazing places this may be the app for you!"],
            frontSkills: ["React, JSX, JavaScript, jQuery, Jest, Axios, Service Objects, Routing, Error Boundaries, JWT, Hooks, CSS"],
            backSkills: ["Node.js, Express, Express Router, Postgres, SQL, Knex, Postgrator, Jest, JWT, Service Objects, Morgan"],
            frontEnd: "Front-End",
            backEnd: "Back-End",
            img: traveler,
            frontEndLink: "https://github.com/Topher-Dunlap/thriftiest-traveler-client",
            backEndLink: "https://github.com/Topher-Dunlap/thriftiest-traveler-server",
            liveAppLink: "https://thriftiest-traveler-client.vercel.app/",
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
                        liveAppLink={travelerProState.liveAppLink}
                        img={travelerProState.img}/>
                    <ProjectCard
                        title={worstProState.title}
                        content={worstProState.content}
                        frontSkills={worstProState.frontSkills}
                        backSkills={worstProState.backSkills}
                        frontEndLink={worstProState.frontEndLink}
                        backEndLink={worstProState.backEndLink}
                        liveAppLink={worstProState.liveAppLink}
                        img={worstProState.img}/>
                    <ProjectCard
                        title={factProState.title}
                        content={factProState.content}
                        frontSkills={factProState.frontSkills}
                        backSkills={factProState.backSkills}
                        frontEndLink={factProState.frontEndLink}
                        backEndLink={factProState.backEndLink}
                        liveAppLink={factProState.liveAppLink}
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