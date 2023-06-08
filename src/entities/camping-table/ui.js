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
const items = [
    { name: 'Палатка', volume: 15 },
    { name: 'Спальный мешок', volume: 10 },
    { name: 'Спальный коврик', volume: 5 },
    { name: 'Набор для приготовления пищи', volume: 8 },
    { name: 'Газовый баллон', volume: 3 },
    { name: 'Средство от насекомых', volume: 2 },
    { name: 'Компас', volume: 1 },
    { name: 'Фонарь', volume: 2 },
    { name: 'Аптечка', volume: 5 },
    { name: 'Вода', volume: 4 }
];
const getCombination = (items, backpackVolume, usedItems) => {
    let remainingVolume = backpackVolume;
    let backpackItems = [];
    let itemsUsed = false;

    for (let item of items) {
        if (!usedItems.includes(item.name) && item.volume <= remainingVolume) {
            usedItems.push(item.name);
            backpackItems.push(item);
            remainingVolume -= item.volume;
            itemsUsed = true;
        }

        if (remainingVolume === 0) {
            break;
        }
    }

    if (!itemsUsed && backpackItems.length === 0) {
        return null;
    }

    return backpackItems;
};

export const solveBackpackProblem = (people, items) => {
    const solution = {};

    // Sort the items by volume in descending order
    let availableItems = [...items].sort((a, b) => b.volume - a.volume);

    // Sort people by backpackVolume in descending order
    let sortedPeople = [...people].sort((a, b) => b.backpackVolume - a.backpackVolume);

    for (const person of sortedPeople) {
        const { name, backpackVolume } = person;
        const usedItems = [];
        const bestCombination = getCombination(availableItems, backpackVolume, usedItems);

        if (bestCombination === null) {
            break;
        }

        solution[name] = bestCombination.map((item) => item.name);

        // Remove used items from the available items list
        for (const usedItem of bestCombination) {
            availableItems = availableItems.filter((item) => item.name !== usedItem.name);
        }
    }

    return solution;
};










function CampingTable() {
    const [people, setPeople] = useState([
        { name: 'Александр', invited: false, backpackVolume: 0 },
        { name: 'Максим', invited: false, backpackVolume: 0 },
        { name: 'Марк', invited: false, backpackVolume: 0 },
        { name: 'Святослав', invited: false, backpackVolume: 0 },
        { name: 'Даниил', invited: false, backpackVolume: 0 },
        { name: 'Юрий', invited: false, backpackVolume: 0 },
    ]);
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
                    <TextField {...params} label="Поиск по имени" variant="outlined" />
                )}
                onInputChange={handleNameSearch}
            />

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Имя</TableCell>
                            <TableCell align="center">Приглашение отправлено</TableCell>
                            <TableCell align="center">Переносимый вес </TableCell>
                            <TableCell align="center">Приглашение</TableCell>
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
                                        {person.invited ? 'Отменить' : 'Пригласить'}
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

            <div style={{ marginTop: '2rem', textAlign: 'center', alignItems: 'center'}}>
                <Typography variant="h5">Приглашённые друзья</Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1rem' }}>
                    {invitedPeople.map((person, index) => (
                        <Card key={index} style={{ width: '200px', marginRight: '1rem', marginBottom: '1rem' }}>
                            <CardContent>
                                <Typography variant="h6">{person.name}</Typography>
                                <Typography variant="body1">Вместимость рюкзака: {person.backpackVolume} кг</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Button variant="contained" onClick={handleSolveClick} disabled={selectedPeople.length === 0}>
                Распределить вещи
            </Button>

            {Object.keys(backpackSolution).length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                    {selectedPeople.map((person) => (
                        <Card key={person.name} style={{ marginBottom: '1rem' }}>
                            <CardContent>
                                <Typography variant="h6">Набор для: {person.name}</Typography>
                                <TableContainer component={Paper} style={{ marginTop: '1rem' }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Название предмета</TableCell>
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
