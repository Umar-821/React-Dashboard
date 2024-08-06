/* eslint-disable jsx-a11y/img-redundant-alt */
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import man1 from '../../Images/man1.jpg';
import man2 from '../../Images/man2.jpg';
import man3 from '../../Images/man3.jpg';
import man4 from '../../Images/man4.jpg';
import woman1 from '../../Images/woman1.jpg';
import woman2 from '../../Images/woman2.jpg';
import './datatable.scss';

// Replace this data with your own
const userData = [
    {
        id: '630343eb94c2812e4cd7e45d',
        username: 'user1',
        email: 'user1232@gmail.com',
        image: man1,
        status: 'active',
        age: '24',
    },
    {
        id: '6303234eb94c2812e4cd7e45e',
        username: 'user2',
        email: 'user203434@gmail.com',
        image: man2,
        status: 'inactive',
        age: '29',
    },
    {
        id: 'e40343eb94c2812e4cd7e4233',
        username: 'user3',
        email: 'user31233@gmail.com',
        image: man3,
        status: 'active',
        age: '20',
    },
    {
        id: '930343eb94c2812e4cd7e45g',
        username: 'user4',
        email: 'user488@gmail.com',
        image: woman1,
        status: 'active',
        age: '23',
    },
    {
        id: '60443eb94c2812e4cd7e45ii',
        username: 'user5',
        email: 'user5@gmail.com',
        image: man4,
        status: 'inactive',
        age: '30',
    },
    {
        id: 'e23343eb94c2812e4cd7e45kk',
        username: 'user6',
        email: 'user6@gmail.com',
        image: woman2,
        status: 'active',
        age: '23',
    },
    {
        id: '63asd34eb94c2812e4cd7e45e',
        username: 'user7',
        email: 'user7@gmail.com',
        image: man2,
        status: 'inactive',
        age: '29',
    },
    {
        id: 'e40gfdeb94c2812e4cd7e4233',
        username: 'user8',
        email: 'user8@gmail.com',
        image: man3,
        status: 'active',
        age: '20',
    },
    {
        id: '60443lkjc2812e4cd7e45ii',
        username: 'user9',
        email: 'user9@gmail.com',
        image: man4,
        status: 'inactive',
        age: '30',
    },
    {
        id: '930343eb9465512e4cd7e45g',
        username: 'user10',
        email: 'user10@gmail.com',
        image: woman1,
        status: 'active',
        age: '23',
    },
];

function DataTable() {
    const [data, setData] = useState(userData);

    const handleDlt = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 310,
            renderCell: (param) => (
                <div className="userr">
                    {/* <img src={param.row.image} alt="User Image" className="userr_image" /> */}
                    {param.row.id}
                </div>
            ),
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 180,
        },
        { field: 'email', headerName: 'Email', width: 280 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            renderCell: (param) => (
                <div className={`status ${param.row.status}`}>{param.row.status}</div>
            ),
        },
        { field: 'age', headerName: 'Age', width: 120 },
        {
            field: 'action',
            headerName: 'Action',
            width: 170,
            renderCell: (params) => (
                <div className="actionn">
                    {/* <Link to={params.row.id}>
                        <button type="button" className="view_btn">
                            View
                        </button>
                    </Link> */}
                    <button
                        type="button"
                        className="delete_btn"
                        onClick={() => handleDlt(params.row.id)}
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="data_table">
            <DataGrid
                className="data_grid"
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    );
}

export default DataTable;
