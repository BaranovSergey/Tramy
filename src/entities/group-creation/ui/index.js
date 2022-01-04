import React from 'react';
import SearchUser from "../../stepper/ui/search-user";
import EnhancedTable from "../../../shared/ui/table/ui";
import {Box} from "@material-ui/core";
import {useSelector} from "react-redux";
import {Zoom} from "@mui/material";
import {tableHeadCells} from "../modal/table-head-cells";



const GroupCreation = () => {
    const users = useSelector(state => state.foundUsers.users);
    return (
        <Box
            sx={{
                marginTop: 25,
                marginBottom: 20,
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Box marginBottom={'16px'}><SearchUser/></Box>

            <Zoom in={users.length > 0}>
                <div>
                    <EnhancedTable rows={users} headCells={tableHeadCells} />
                </div>
            </Zoom>

        </Box>
    )
};

export default GroupCreation;