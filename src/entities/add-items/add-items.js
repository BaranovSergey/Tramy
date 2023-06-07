import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './hikingItemsSlice';
import {
    TextField,
    Button,
    Card,
    CardContent,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        margin: '0 auto',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
    },
    addButton: {
        marginLeft: '8px',
    },
    inputField: {
        marginLeft: '16px',
    },
}));

const HikingItems = () => {
    const [newItem, setNewItem] = useState('');
    const [newItemWeight, setNewItemWeight] = useState('');
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleAddItem = () => {
        if (newItem.trim() !== '' && newItemWeight.trim() !== '') {
            const newItemObject = {
                name: newItem,
                weight: newItemWeight,
            };
            dispatch(addItem(newItemObject));
            setNewItem('');
            setNewItemWeight('');
        }
    };

    const handleRemoveItem = (index) => {
        dispatch(removeItem(index));
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
                <Button variant="contained" className={classes.addButton} onClick={handleAddItem}>
                    Добавить
                </Button>
            </div>
            {items.length > 0 && (
                <div style={{ textAlign: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1rem' }}>
                        {items.map((item, index) => (
                            <Card key={index} style={{ backgroundColor: '#92caf9', width: '200px', marginRight: '1rem', marginBottom: '1rem' }}>
                                <CardContent>
                                    <Typography variant="h6">{item.name}</Typography>
                                    <Typography variant="body1">Вес: {item.weight} кг</Typography>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => handleRemoveItem(index)}
                                    >
                                        Удалить
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HikingItems;




// import React, { useState } from 'react';
// import {
//     TextField,
//     Button,
//     List,
//     ListItem,
//     ListItemText,
//     ListItemSecondaryAction,
//     IconButton,
//     Card,
//     CardContent,
// } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import BackpackIcon from '@mui/icons-material/Backpack';
// import { makeStyles } from '@mui/styles';
// import Typography from '@mui/material/Typography';
// import { Box } from '@material-ui/core';
//
// const useStyles = makeStyles(() => ({
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         width: '80%',
//         margin: '0 auto',
//     },
//     inputContainer: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginBottom: '16px',
//     },
//     listContainer: {
//         flexWrap: 'wrap',
//         border: '1px solid #ddd',
//         borderRadius: '4px',
//         padding: '16px',
//         marginBottom: '16px',
//         width: '100%',
//         boxSizing: 'border-box',
//     },
//     listItem: {
//         display: 'flex',
//         alignItems: 'center',
//         padding: '8px 16px',
//         borderRadius: '15px',
//         backgroundColor: '#F8F8FF',
//         marginBottom: '8px',
//     },
//     listItemText: {
//         flexGrow: 1,
//         alignItems: 'center',
//         display: 'flex',
//         justifyContent: 'space-between',
//     },
//     addButton: {
//         marginLeft: '8px',
//     },
//     inputField: {
//         marginLeft: '16px',
//     },
// }));
//
// const HikingItems = () => {
//     const [items, setItems] = useState([]);
//     const [newItem, setNewItem] = useState('');
//     const [newItemWeight, setNewItemWeight] = useState('');
//     const classes = useStyles();
//
//     const addItem = () => {
//         if (newItem.trim() !== '' && newItemWeight.trim() !== '') {
//             const newItemObject = {
//                 name: newItem,
//                 weight: newItemWeight,
//             };
//             setItems([...items, newItemObject]);
//             setNewItem('');
//             setNewItemWeight('');
//         }
//
//     };
//
//     const removeItem = (index) => {
//         const updatedItems = [...items];
//         updatedItems.splice(index, 1);
//         setItems(updatedItems);
//     };
//
//     return (
//         <div className={classes.container}>
//             <div className={classes.inputContainer}>
//                 <TextField
//                     value={newItem}
//                     onChange={(e) => setNewItem(e.target.value)}
//                     label="Наименование"
//                     variant="outlined"
//                     className={classes.inputField}
//                 />
//                 <TextField
//                     value={newItemWeight}
//                     onChange={(e) => setNewItemWeight(e.target.value)}
//                     label="Масса, кг"
//                     variant="outlined"
//                     className={classes.inputField}
//                 />
//                 <Button variant="contained" className={classes.addButton} onClick={addItem}>
//                     Добавить
//                 </Button>
//             </div>
//             {items.length > 0 && (
//                 <div style={{ textAlign: 'center', alignItems: 'center'}}>
//                     <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1rem' }}>
//                         {items.map((item, index) => (
//                             <Card key={index} style={{backgroundColor: '#92caf9', width: '200px', marginRight: '1rem', marginBottom: '1rem' }}>
//                                 <CardContent>
//                                     <Typography variant="h6">{item.name}</Typography>
//                                     <Typography variant="body1">Вес: {item.weight} кг</Typography>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default HikingItems;

