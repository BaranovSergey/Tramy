import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BackpackIcon from '@mui/icons-material/Backpack';
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";
import {Box} from "@material-ui/core";
const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        margin: '0 auto',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
    },
    listContainer: {
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '16px',
        marginBottom: '16px',
        width: '100%',
        boxSizing: 'border-box',
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        borderRadius: '15px',
        backgroundColor: '#ADD8E6',
        marginBottom: '8px',
    },
    listItemText: {
        flexGrow: 1,
        alignItems: 'center',
        display: "flex",
        justifyContent: 'space-between'
    },
    addButton: {
        marginLeft: '8px',
    },
    inputField: {
        marginLeft: '16px',
    },
}));

const HikingItems = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [newItemWeight, setNewItemWeight] = useState('');
    const classes = useStyles();

    const addItem = () => {
        if (newItem.trim() !== '' && newItemWeight.trim() !== '') {
            const newItemObject = {
                name: newItem,
                weight: newItemWeight,
            };
            setItems([...items, newItemObject]);
            setNewItem('');
            setNewItemWeight('');
        }
    };

    const removeItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <div className={classes.container}>
            <div className={classes.inputContainer}>
                <TextField
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    label="Наименование"
                    variant="outlined"
                    className={classes.inputField}
                />
                <TextField
                    value={newItemWeight}
                    onChange={(e) => setNewItemWeight(e.target.value)}
                    label="Масса, кг"
                    variant="outlined"
                    className={classes.inputField}
                />
                <Button variant="contained" className={classes.addButton} onClick={addItem}>
                    Добавить
                </Button>
            </div>
            {items.length > 0 ? (
                <div className={classes.listContainer}>
                    <List>
                        {items.map((item, index) => (
                            <ListItem key={index} className={classes.listItem}>
                                <BackpackIcon />
                                {/*<ListItemText*/}
                                {/*    primary={item.name}*/}
                                {/*    secondary={`Вес: ${item.weight} кг`}*/}
                                {/*    className={classes.listItemText}*/}
                                {/*/>*/}
                                <Box className={classes.listItemText}>
                                    <Typography>{item.name}</Typography>
                                    <Typography>Вес: {item.weight} кг</Typography>
                                </Box>

                                <IconButton edge="end" aria-label="delete" onClick={() => removeItem(index)}>
                                    <DeleteIcon />
                                </IconButton>

                            </ListItem>
                        ))}
                    </List>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default HikingItems;