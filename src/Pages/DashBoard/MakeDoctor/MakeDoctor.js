import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeDoctor = () => {
    const [email, setEmail] = useState('');


    const handlerOnBlur = e => {
        setEmail(e.target.value);
    }

    const handlerToSubmit = () => {
        const user = { email };
        fetch('http://localhost:9000/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <form onSubmit={handlerToSubmit}>
                <TextField
                    onBlur={handlerOnBlur}
                    label="Email"
                    type="email"
                    variant="outlined" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeDoctor;