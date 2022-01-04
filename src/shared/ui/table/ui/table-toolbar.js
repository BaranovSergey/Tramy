import Toolbar from "@mui/material/Toolbar";
import {alpha} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import PropTypes from "prop-types";
import * as React from "react";
import {Box} from '@material-ui/core';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';


export const EnhancedTableToolbar = (props) => {
    const {numSelected, onDelete, onAddPerson} = props;

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{flex: '1 1 100%'}}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{flex: '1 1 100%'}}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Nutrition
                </Typography>
            )}

            {numSelected > 0 ? (
                <Box display={'flex'}>
                    <Tooltip title="Delete">
                        <IconButton onClick={onDelete}>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Invite person">
                        <IconButton onClick={onAddPerson}>
                            <PersonAddAlt1Icon/>
                        </IconButton>
                    </Tooltip>

                </Box>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon/>
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};