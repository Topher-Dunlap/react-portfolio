import React from 'react';
import Paper from '@material-ui/core/Paper';
import {List, ListItem, ListIcon} from "@chakra-ui/react"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


export default function SkillCard(props) {

    const title = props.title;
    const cardList = props.cardList;
    const icons = props.icons;

    return (
        <Grid item xs={6} sm={3} style={cardBorderColor}>
            <Paper elevation={3}>
                <Card>
                    <CardContent style={cardBodyColor}>
                        <Typography variant="h5" component="h2" style={marginBottom}>
                            {title}
                        </Typography>
                        <Typography color="textSecondary" style={marginTop} component="span">
                            <List spacing={3} component="span">
                                {cardList.map((listItem, idx) =>
                                    <ListItem key={idx} style={listItemStyle}>
                                        <ListIcon as={icons[idx]} w={7} h={7} color="#B3A577"/>
                                        {listItem}
                                    </ListItem>
                                )}
                            </List>
                        </Typography>
                    </CardContent>
                </Card>
            </Paper>
        </Grid>
    )
}

const marginBottom = {
    marginBottom: "1rem",
}

const marginTop = {
    marginTop: "2rem",
    color: "white",
}

const listItemStyle = {
    padding: "8px 16px",
    borderBottom: "1px solid #ddd",
    listStyleType: "none",
    textSize: "medium",
}

const cardBodyColor = {
    backgroundColor: "#25272A",
    color: "#fefefe",
}

const cardBorderColor = {
    // backgroundColor: "#fefefe",
    backgroundColor: "white",
    margin: "1rem",
}