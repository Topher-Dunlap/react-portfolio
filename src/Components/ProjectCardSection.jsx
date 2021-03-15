import React from 'react';
import Typography from "@material-ui/core/Typography";
import {List, ListItem} from "@chakra-ui/react";


export default function ProjectCardSection(props) {


    const sectionLabel = props.sectionLabel;
    const sectionSkills = props.sectionSkills;

    return (

        <div>
            <Typography variant="h5" component="h2" style={marginTop}>
                {sectionLabel}
            </Typography>
            <Typography color="textSecondary" style={cardListColor} component="span">
                <List spacing={3} component="span">
                    {sectionSkills.map((listItem, idx) =>
                        <ListItem key={idx} style={listItemStyle}>
                            {listItem}
                        </ListItem>
                    )}
                </List>
            </Typography>
        </div>

    )
}

const marginTop = {
    marginTop: "2rem",
}

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

