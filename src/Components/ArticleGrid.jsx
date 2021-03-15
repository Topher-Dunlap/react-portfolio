import React, {useState} from 'react';
import ArticleCard from "./ArticleCard";
import {AiOutlineMedium} from "react-icons/ai";
import careerPic from "../images/career_change.jpg";
import mentorPic from "../images/mentor.jpg"
import {SimpleGrid} from "@chakra-ui/react";

export default function ArticleGrid() {

    const [articleCareerState, setArticleCareerstate] = useState({
            title: "Career Transitions",
            img: careerPic,
            content: "Some insights into my journey from IT Support to Web Development.",
            icon: AiOutlineMedium,
            article: "https://developerdunlap.medium.com/transitioning-from-it-support-to-web-development-f9c6886e780?sk=f0ab39861e478f641d62a54d5a814773"
        }
    );

    const [articleMentorState, setArticleMentorstate] = useState({
            title: "Bootcamp Mentors",
            img: mentorPic,
            content: "My experience with mentors you'll find in coding bootcamps.",
            icon: AiOutlineMedium,
            article: "https://developerdunlap.medium.com/types-of-mentors-youll-encounter-in-a-coding-bootcamp-a8bb28a0dfd5?source=friends_link&sk=6671c5530daf9bc8eee837fac29930ff"
        }
    );


    return (
        <section style={bodyStyle}>
            <SimpleGrid minChildWidth="120px" spacing="40px">
                <ArticleCard
                    content={articleCareerState.content}
                    img={articleCareerState.img}
                    title={articleCareerState.title}
                    icon={articleCareerState.icon}
                    link={articleCareerState.article}/>
                <ArticleCard
                    content={articleMentorState.content}
                    img={articleMentorState.img}
                    title={articleMentorState.title}
                    icon={articleMentorState.icon}
                    link={articleMentorState.article}/>
            </SimpleGrid>
        </section>
    )
}

const bodyStyle = {
    backgroundColor: "#181818",
    color: "#fefefe",
    WebkitBoxAlign: "center",
    WebkitBoxPack: "center",
    display: "-webkit-box",
    margin: "4rem",
    fontSize: "3.5rem",
    fontFamily: 'Ubuntu, sans-serif',
}