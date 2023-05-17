import React, {useState, useCallback, useEffect} from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Button,
    Autocomplete,
    Card,
    CardContent,
    Typography
} from '@mui/material';
import {items, solveBackpackProblem} from "./lib/helper";
import {useSelector} from "react-redux";

function CampingTable() {
    const [people, setPeople] = useState([
        { name: 'John', invited: false, backpackVolume: 0 },
        { name: 'Jane', invited: false, backpackVolume: 0 },
        { name: 'Mike', invited: false, backpackVolume: 0 },
        { name: 'Sarah', invited: false, backpackVolume: 0 },
        { name: 'David', invited: false, backpackVolume: 0 },
        { name: 'Emily', invited: false, backpackVolume: 0 },
    ]);
    const users = useSelector(state => state.foundUsers.users);
    const [selectedPeople, setSelectedPeople] = useState([]);
    const [backpackSolution, setBackpackSolution] = useState({});
    const [filteredPeople, setFilteredPeople] = useState(people);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    const handleInviteClick = useCallback(
        (index) => {
            setPeople((prevState) => {
                const updatedPeople = [...prevState];
                updatedPeople[index].invited = !updatedPeople[index].invited;
                return updatedPeople;
            });
        },
        []
    );

    const handleBackpackVolumeChange = useCallback(
        (event, index) => {
            const { value } = event.target;
            setPeople((prevState) => {
                const updatedPeople = [...prevState];
                updatedPeople[index].backpackVolume = Number(value);
                return updatedPeople;
            });
        },
        []
    );

    const handleNameSearch = useCallback(
        (event, value) => {
            const filtered = people.filter((person) =>
                person.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredPeople(filtered);
        },
        [people]
    );

    const handlePageChange = useCallback(
        (event, newPage) => {
            setCurrentPage(newPage);
        },
        []
    );

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedPeople = filteredPeople.slice(startIndex, endIndex);

    const invitedPeople = displayedPeople.filter((person) => person.invited);


    useEffect(() => {
        if (people){
            const invitedPeople = displayedPeople.filter((person) => person.invited);
            setSelectedPeople(invitedPeople);

        }
    },[people])


    const handleSolveClick = () => {
        if (selectedPeople.length > 0) {
            const solution = solveBackpackProblem(selectedPeople, items);
            setBackpackSolution(solution);
        }
    };
    return (
        <div>
            <Autocomplete
                options={people.map((person) => person.name)}
                renderInput={(params) => (
                    <TextField {...params} label="Search by Name" variant="outlined" />
                )}
                onInputChange={handleNameSearch}
            />

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Приглашение отправлено</TableCell>
                            <TableCell align="center">Размер рюкзака в л.</TableCell>
                            <TableCell align="center">Пригласить</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {displayedPeople.map((person, index) => (
                            <TableRow key={index}>
                                <TableCell>{person.name}</TableCell>
                                <TableCell align="center">{person.invited ? 'Да' : 'Нет'}</TableCell>
                                <TableCell align="center">
                                    <TextField
                                        type="number"
                                        value={person.backpackVolume}
                                        onChange={(event) => handleBackpackVolumeChange(event, index)}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <Button
                                        variant="contained"
                                        onClick={() => handleInviteClick(index + startIndex)}
                                    >
                                        {person.invited ? 'Cancel' : 'Invite'}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div style={{ marginTop: '1rem' }}>
                {Array.from({ length: Math.ceil(filteredPeople.length / itemsPerPage) }, (_, index) => (
                    <Button
                        key={index}
                        variant={index === currentPage ? 'contained' : 'outlined'}
                        onClick={(event) => handlePageChange(event, index)}
                    >
                        {index + 1}
                    </Button>
                ))}
            </div>

            <div style={{ marginTop: '2rem' }}>
                <Typography variant="h5">Invited People</Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1rem' }}>
                    {invitedPeople.map((person, index) => (
                        <Card key={index} style={{ width: '200px', marginRight: '1rem', marginBottom: '1rem' }}>
                            <CardContent>
                                <Typography variant="h6">{person.name}</Typography>
                                <Typography variant="body1">Backpack Volume: {person.backpackVolume}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Button variant="contained" onClick={handleSolveClick} disabled={selectedPeople.length === 0}>
                Solve Backpack Problem
            </Button>

            {Object.keys(backpackSolution).length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                    {selectedPeople.map((person) => (
                        <Card key={person.name} style={{ marginBottom: '1rem' }}>
                            <CardContent>
                                <Typography variant="h6">Backpack Solution for {person.name}</Typography>
                                <TableContainer component={Paper} style={{ marginTop: '1rem' }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Item</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {backpackSolution[person.name].map((item, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{item}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CampingTable;
