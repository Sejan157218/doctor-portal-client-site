import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../hook/useAuth';

const AppoinmentsList = ({ date }) => {
    const { user, adminToken } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = `https://whispering-garden-01955.herokuapp.com/appointments?email=${user?.email}&date=${date}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${adminToken}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [date, adminToken, user?.email])
    return (
        <div>
            Appointments {appointments.length}

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.patientName}
                                </TableCell>
                                <TableCell align="right">{row?.time}</TableCell>
                                <TableCell align="right">{row?.serviceName}</TableCell>
                                <TableCell align="right">{ }</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AppoinmentsList;