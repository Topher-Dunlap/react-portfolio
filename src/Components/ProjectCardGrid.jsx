import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import Parallax from "react-rellax/lib/index";
import {SimpleGrid} from "@chakra-ui/react";
import noteFul from "../images/noteful.png";
import factCheck from "../images/fact_check.jpg";
import quizApp from "../images/quiz_app.png";
import {SiGithub} from "react-icons/si";

export default function ProjectCardGrid() {

    const [noteProState, setNoteProstate] = useState({
            title: "Noteful",
            content: "A dynamic note application I created using various React elements including Dynamic Routing, Error Boundaries, Context and useState",
            skills: ["React, CSS, HTML, JSX"],
            img: noteFul,
            icon: SiGithub,
            github: "https://github.com/Topher-Dunlap/noteful"
        }
    );

    const [factProState, setFactProstate] = useState({
            title: "FactCheck",
            content: ["I created this app which integrates the Google Fact Check API and also includes media bias and factual reporting record for sources that fact check claims."],
            skills: ["RestAPI, JQuery, CSS, HTML, Javascript"],
            img: factCheck,
            icon: SiGithub,
            github: "https://github.com/Topher-Dunlap/fact_check_app"
        }
    );

    const [quizProState, setQuizProstate] = useState({
            title: "QuizApp",
            content: ["This is an app that was created using Javascript and Jquery to create a dynamic interface for users to test their knowledge and enjoy a responsive interface."],
            skills: ["HTML, JQuery, CSS, Javascript"],
            img: quizApp,
            icon: SiGithub,
            github: "https://github.com/Topher-Dunlap/quiz_app"
        }
    );

    return (
        <section style={bodyStyle}>
            <Parallax speed={3}>
                <SimpleGrid minChildWidth="120px" spacing="40px">
                    <ProjectCard
                        title={noteProState.title}
                        content={noteProState.content}
                        skills={noteProState.skills}
                        icon={noteProState.icon}
                        img={noteProState.img}
                        link={noteProState.github}/>
                    <ProjectCard
                        title={factProState.title}
                        content={factProState.content}
                        skills={factProState.skills}
                        icon={factProState.icon}
                        img={factProState.img}
                        link={factProState.github}/>
                    <ProjectCard
                        title={quizProState.title}
                        content={quizProState.content}
                        skills={quizProState.skills}
                        icon={quizProState.icon}
                        img={quizProState.img}
                        link={quizProState.github}/>
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