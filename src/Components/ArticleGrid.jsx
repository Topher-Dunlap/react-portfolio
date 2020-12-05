import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
import ArticleCard from "./ArticleCard";
import {AiOutlineMedium} from "react-icons/ai";
import careerPic from "../images/career_change.jpg";
import mentorPic from "../images/mentor.jpg"
import {SimpleGrid} from "@chakra-ui/react";

export default function ArticleGrid() {

    const context = useContext(ThemeContext);
    const theme = context.theme;
    const articleData = [
        {
            title: "Career Transitions",
            img: careerPic,
            content: "Some insights into my journey from IT Support to Web Development.",
            icon: AiOutlineMedium,
            article: "https://developerdunlap.medium.com/transitioning-from-it-support-to-web-development-f9c6886e780?sk=f0ab39861e478f641d62a54d5a814773"
        },

        {
            title: "Bootcamp Mentors",
            img: mentorPic,
            content: "My experience with mentors you'll find in coding bootcamps",
            icon: AiOutlineMedium,
            article: "https://developerdunlap.medium.com/types-of-mentors-youll-encounter-in-a-coding-bootcamp-a8bb28a0dfd5?source=friends_link&sk=6671c5530daf9bc8eee837fac29930ff"
        }
    ]

    const articleCardMap = articleData.map((card, idx) =>
        <ArticleCard
            content={card.content}
            img={card.img}
            title={card.title}
            icon={card.icon}
            link={card.article}/>
    );


    return (
        <section style={theme}>
            <SimpleGrid minChildWidth="120px" spacing="40px" style={marginBottom}>
                {articleCardMap}
            </SimpleGrid>
        </section>
    )
}

const marginBottom = {
    margin: "6rem 0rem",
}

// const bodyStyle = {
//     backgroundColor: "#181818",
//     color: "#fefefe",
//     WebkitBoxAlign: "center",
//     WebkitBoxPack: "center",
//     display: "-webkit-box",
//     margin: "4rem",
//     fontSize: "3.5rem",
//     fontFamily: 'Ubuntu, sans-serif',
// }