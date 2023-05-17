import * as React from 'react';
import {useSelector} from "react-redux";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BadgeIcon from '@mui/icons-material/Badge';
import styled from "@emotion/styled";
import {Box} from "@mui/material";


const UpdTypography = styled(Typography)`
  text-align: center;
`;

const UpdList = styled(List)`
  margin-right: 20px;
  margin-left: 25px;
`;

const UserProfile = () => {

    const firstName = useSelector(state => state.auth.firstName);
    const lastName = useSelector(state => state.auth.lastName);
    const userEmail = useSelector(state => state.auth.email);

    return (
        <Box sx={{marginTop: 4, marginRight: 6}}>
            <UpdTypography variant="h5" component="h2"
            >
                Мой профиль
            </UpdTypography>
            <UpdList
                sx={{
                    width: '100%',
                    maxWidth: 360,
                }}
            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 200, height: 200, borderRadius: 10, marginLeft: "30%"}} src="https://sun9-69.userapi.com/impf/Mz685ma3ZPU6qCUCfR-HG-FeJi2f45gSWGqFmQ/3Xbe_hGAj9Q.jpg?size=1215x2160&quality=96&sign=0ccc4ac3b1e77db54d2d386491c0ae49&type=album" />
                    </ListItemAvatar>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Email" secondary={userEmail}/>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BadgeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Фамилия" secondary={lastName}/>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BadgeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Имя" secondary={firstName}/>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <HomeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Адрес" secondary="г.Москва, ул.Плющева, д.17"/>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Работа от слова раб" secondary="Сын мамы"/>
                </ListItem>
            </UpdList>

        </Box>
    )
}
export default UserProfile;