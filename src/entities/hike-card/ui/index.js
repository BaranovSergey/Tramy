import React from 'react';
import OutlinedCard from "../../../shared/ui/card/ui";


/*all prosp is hike props to display in card*/
const EHikeCard = ({item}) => {
    return (
        <OutlinedCard hike={item}/>
    );
};

export default EHikeCard;