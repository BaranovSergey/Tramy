import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";



const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {

        backgroundColor: '#F8F8FF',
        alignItems: "center",
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));



export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <main>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    <Card className={classes.card}>
                        <ListItemAvatar>
                            <Avatar  sx={{ width: 150, height: 150, borderRadius: 100, marginTop: 2}} src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQBkPxbVOLBMZMjS67PseHuZsL9BiLMyXMd2wJ0qfkv3HhgyRjatrq6AqUZTrVCj9PY" />
                        </ListItemAvatar>

                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h6" component="h2">
                                Имя: Мария
                            </Typography>
                            <Typography>
                                Фамилия: Иванова
                            </Typography>
                            <Typography  >
                                Email: ivanova121@mail.ru
                            </Typography>
                            <Typography >
                                Телефон: 79652838270
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Открыть
                            </Button>

                        </CardActions>
                    </Card>


                </Grid>
            </Container>
        </main>
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        <Card className={classes.card}>
                            <ListItemAvatar>
                                <Avatar  sx={{ width: 150, height: 150, borderRadius: 100, marginTop: 2}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Vladimir_Putin_September_5%2C_2022_%28cropped%29.jpg/250px-Vladimir_Putin_September_5%2C_2022_%28cropped%29.jpg" />
                            </ListItemAvatar>

                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Имя: Владимир
                                </Typography>
                                <Typography>
                                    Фамилия: Путин
                                </Typography>
                                <Typography  >
                                    Email: Putin1@mail.ru
                                </Typography>
                                <Typography >
                                    Телефон: 79652838270
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Открыть
                                </Button>

                            </CardActions>
                        </Card>


                    </Grid>
                </Container>
            </main>
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        <Card className={classes.card}>
                            <ListItemAvatar>
                                <Avatar  sx={{ width: 150, height: 150, borderRadius: 100, marginTop: 2}} src="https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg" />
                            </ListItemAvatar>

                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Имя: Алексей
                                </Typography>
                                <Typography>
                                    Фамилия: Петров
                                </Typography>
                                <Typography  >
                                    Email: petrov1@mail.ru
                                </Typography>
                                <Typography >
                                    Телефон: 79652838270
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Открыть
                                </Button>

                            </CardActions>
                        </Card>


                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}