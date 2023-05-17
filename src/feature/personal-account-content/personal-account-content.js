import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'firstName', headerName: 'Имя', width: 130},
    {field: 'lastName', headerName: 'Фамилия', width: 130},
    {field: 'email', headerName: 'Почта', width: 150},
    {
        field: 'phoneNumber',
        headerName: 'Номер телефона',
        type: 'string',
        width: 130,
    },
];

const rows = [
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},
    {id: 1, lastName: 'Snow', firstName: 'Jon', phoneNumber: '89284543316', email: "arshavin@mail.ru"},

];

const PersonalAccountTable = () => {

    return (
        <div style={{height: "80%", width: '70%', marginLeft: "auto", marginTop: "40px", marginRight: "auto"}}>
            <DataGrid
                style={{textAlign: "center"}}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 10},
                    },

                }}
                // checkboxSelection

            />
        </div>
    );
}
export default PersonalAccountTable;

