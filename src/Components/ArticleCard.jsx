import React from 'react';
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LinkIcon from "./LinkIcon";

export default function ArticleCard(props) {

    const title = props.title;
    const content = props.content;
    const img = props.img;
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
                        <img style={cardImg} src={img} alt={"article"}/>
                        <Typography style={listItemStyle}>
                            {content}
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
    padding: "0",
    fontFamily: 'Ubuntu, sans-serif',
    position: "relative",
}

const marginBottom = {
    marginBottom: "1rem",
}


const listItemStyle = {
    padding: "8px 16px",
    borderBottom: "1px solid #ddd",
    listStyleType: "none",
    textSize: "medium",
    marginBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    width: "40%",
}

const cardImg = {
    width: "50%",
    margin: "2rem auto",
}

const cardBodyColor = {
    backgroundColor: "#25272A",
    color: "#fefefe",
}

const cardBorderColor = {
    backgroundColor: "white",
    padding: ".75rem",
}