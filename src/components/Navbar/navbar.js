import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {AccountCircle, ArrowDropDown, Landscape} from "@material-ui/icons";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";


const Navbar = () => {
    const [anchorE1, setAnchorE1] = React.useState(null)
    const handleClose = () => {
        setAnchorE1(null)
    }
    const openMenu = (event) => {
        setAnchorE1(event.currentTarget)
    }
    return(
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Landscape/>
                        <Typography style={{marginRight: 200}} variant="h6">
                            Tramy
                        </Typography>
                        <Button style={{marginRight: 860}} startIcon={<ArrowDropDown/>} color={"inherit"}  onClick={openMenu}>
                            Маршруты
                        </Button>
                        <Menu id={"lame-menu"}
                        anchorEl={anchorE1}
                        keepMounted
                        open={Boolean(anchorE1)}
                        onClose={handleClose}>
                            <MenuItem><Button color={"inherit"} component={Link} to="/marhruts" >Загрузить новый</Button></MenuItem>
                            <MenuItem><Button color={"inherit"} component={Link} to="/login" >Выбрать существующий</Button></MenuItem>
                        </Menu>
                        <Button component={Link} to="/" variant="contained" endIcon={<AccountCircle/>} color="secondary">Войти</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        )
};
export default Navbar;