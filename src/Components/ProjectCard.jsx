import React from 'react';
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {List, ListItem} from "@chakra-ui/react";
import Grid from "@material-ui/core/Grid";
import LinkIcon from "./LinkIcon";

export default function ProjectCard(props) {

    const title = props.title;
    const content = props.content;
    const img = props.img;
    const skills = props.skills;
    const icon = props.icon;
    const link = props.link;

    return (

        <Grid style={bodyStyle}>
            <Paper elevation={3} style={cardBorderColor}>
                <Card>
                    <CardContent style={cardBodyColor}>
                        <Typography variant="h5" component="h2" style={marginBottom}>
                            {title}
                        </Typography>
                        <img style={cardImg} src={img} alt={"projects"}/>
                        <Typography style={marginTopBottom}>
                            {content}
                        </Typography>
                        <Typography color="textSecondary" style={cardListColor} component="span">
                            <List spacing={3} component="span">
                                {skills.map((listItem, idx) =>
                                    <ListItem key={idx} style={listItemStyle}>
                                        {/*<ListIcon as={icons[idx]} w={7} h={7} color="#B3A577"/>*/}
                                        {listItem}
                                    </ListItem>
                                )}
                            </List>
                        </Typography>
                        <LinkIcon icon={icon} link={link}/>
                    </CardContent>
                </Card>
            </Paper>
        </Grid>
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
}

const marginTopBottom = {
    margin: "2rem 0",
}

const marginBottom = {
    marginBottom: "2rem",
}

// const marginTop = {
//     marginTop: "2rem",
//     color: "white",
// }

const cardListColor = {
    color: "#B3A577",
    marginTop: "2rem",
}

const listItemStyle = {
    padding: "8px 16px",
    borderBottom: "1px solid #ddd",
    listStyleType: "none",
    textSize: "medium",
}

const cardImg = {
    width: "85%",
    margin: "2rem auto",
}

const cardBodyColor = {
    backgroundColor: "#25272A",
    color: "#fefefe",
}

const cardBorderColor = {
    // backgroundColor: "#fefefe",
    backgroundColor: "white",
    margin: "1rem",
    padding: ".75rem",
}