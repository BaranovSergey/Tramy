import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Имя', width: 130 },
    { field: 'lastName', headerName: 'Фамилия', width: 130 },
    { field: 'email', headerName: 'Почта', width: 150 },
    {
        field: 'phoneNumber',
        headerName: 'Номер телефона',
        type: 'string',
        width: 130,
    },
];

const rows = [
    { id: 1, lastName: 'Петров', firstName: 'Александр', phoneNumber: '89284543316', email: 'PeAd223@mail.ru' },
    { id: 2, lastName: 'Иванов', firstName: 'Павел', phoneNumber: '89254364234', email: 'Izpa1999@mail.ru' },
    { id: 3, lastName: 'Коньков', firstName: 'Сергей', phoneNumber: '89686754332', email: 'sergey_Kon@mail.ru' },
    { id: 4, lastName: 'Царёв', firstName: 'Юрий', phoneNumber: '89115486543', email: 'CarYY1@mail.ru' },
    { id: 5, lastName: 'Пчёлкин', firstName: 'Михаил', phoneNumber: '89334546086', email: 'MihaPhc@mail.ru' },
];

const PersonalAccountTable = () => {
    return (
        <div style={{ height: '80%', width: '70%', marginLeft: 'auto', marginTop: '40px', marginRight: 'auto' }}>
            <DataGrid
                style={{ textAlign: 'center' }}
                rows={rows}
                columns={columns}
                pageSize={10}
            />
        </div>
    );
};

export default PersonalAccountTable;
