import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import HikeItem from "../../../../entities/hike-card/ui/hikeItem";

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                Тип похода
            </Typography>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                Дата
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

export default function OutlinedCard({hike}) {
    useEffect(() => {
        console.log(hike)
    })
    console.log('load')
    return (
        <Box sx={{minWidth: 275}}>
            <Card variant="outlined">
                <HikeItem type={hike.hikeType} startDate={hike.startDate} />
            </Card>
        </Box>
    );
}
