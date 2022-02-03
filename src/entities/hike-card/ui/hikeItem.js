import React from 'react'
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

export default function HikeItem({type, startDate}) {
    return(
        <React.Fragment>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Тип похода:
                </Typography>
                <Typography sx={{fontSize: 14}} gutterBottom>
                    {type}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Дата:
                </Typography>
                <Typography variant="body2">
                    {startDate}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Открыть</Button>
            </CardActions>
        </React.Fragment>
    )
}