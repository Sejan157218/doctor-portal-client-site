import React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BookingModal = ({ book, openBooking, handleBookingClose, date }) => {
    const { name, time, space } = book;

    const handleToBookingSubmit = e => {
        alert('submit');
        handleBookingClose();
        e.preventDefault();
    }
    return (
        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                    <TextField
                        disabled
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                    />
                    <TextField
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        defaultValue="Full Name"
                        size="small"
                    />
                    <TextField
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        defaultValue="Your Email"
                        size="small"
                    />
                    <TextField
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        defaultValue="Phone Number"
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"
                    />
                </Typography>
                <Button sx={{ width: "90%", color: '#ffff', backgroundImage: "linear-gradient(to right,#18D2B5, #11CFE3)", padding: "6px 22px", m: 1 }} onClick={handleToBookingSubmit} >Submit</Button>
            </Box>
        </Modal>
    );
};

export default BookingModal;