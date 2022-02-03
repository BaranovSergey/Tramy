import React from 'react';
import EHikeCard from "../../../entities/hike-card/ui";
import {Box} from "@mui/material";

const FDisplayHikeCards = ({allHikes}) => {

    return (
        <Box sm={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            wrap: 'wrap'
        }}
        >
            {allHikes.map((hike, index) => (
                <EHikeCard item={hike}/>
            ))}
        </Box>
    );
};

export default FDisplayHikeCards