import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, FormLabel, RadioGroup } from '@mui/material';
import petProfile from '../assets/PetProfile.png';
import appointment from '../assets/apt.png';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useState } from 'react';
import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import { ADD_PET, REMOVE_PET, REMOVE_APPOINTMENT } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';


export default function Profile() {

    const [userFormData, setUserFormData] = useState({ name: '', species: '', vaccine: '', description: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const { loading, data } = useQuery(GET_ME);
    const [addPet, { er }] = useMutation(ADD_PET);
    const [removePet, { e }] = useMutation(REMOVE_PET);
    const [removeAppointment, { err }] = useMutation(REMOVE_APPOINTMENT);

    const user = data?.me || {};
    console.log(user);
    //function to delete an appointment
    const handleAppointmentDelete = async (_id) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const response = await removeAppointment({ variables: _id });
            console.log('Deleted Appointment', response);
        } catch (err) {
            console.log(err);
        }
    };

    //function to delete a pet GETTING A 400 ERROR HERE
    const handlePetDelete = async (_id) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const response = await removePet({ variables: _id });
            console.log('Deleted Pet: ', response);
            if (e) {
                console.log(e);
            }
        } catch (error) {
            console.log(error);
        }
    };

    //function on form to add a pet GETTING A 400 ERROR HERE
    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const response = await addPet({
                variables: { ...userFormData },
            });
            console.log('Added pet', response);
        } catch (er) {
            console.log(er)
        };

        setUserFormData({
            name: '',
            species: '',
            vaccine: '',
            description: '',
        });
    };

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <Box sx={{ display: "flex", m: 5, flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ flexBasis: "80%", marginBottom: "1rem" }}>
                <Typography gutterBottom variant="h4" color="#37745B" >
                    Your Upcoming Appointment:
                </Typography>

                {/* Maps over each pet and each of its appointments to create a card for each appointment */}
                {user.pets.appointments && (
                    user.pets.appointments.map(appointments => (
                        <Card sx={{
                            maxWidth: 345,
                            width: "80%",
                            m: 5
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={appointment}
                                    alt="Appointment image"
                                />
                                <CardContent sx={{}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Pet Appointment
                                        <Typography>
                                            <>
                                                <h2>Pet Name: {user.pet.name}</h2>
                                                <ul>
                                                    <>
                                                        <li>
                                                            <p>Date: {dayjs(appointments.date).format("MM/DD/YY")}</p>
                                                        </li>
                                                        <li>
                                                            <p>Time: {appointments.time}</p>
                                                        </li>
                                                        <li>
                                                            <p>Service: {appointments.service}</p>
                                                        </li>
                                                        <br />
                                                    </>

                                                </ul>
                                            </>


                                        </Typography>
                                        <button className='hoverButton' onClick={handleAppointmentDelete} >Cancel</button>
                                    </Typography>
                                    <button className='hoverButton' >Update</button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                )}
            </div>

            <div style={{ flexBasis: "80%", marginBottom: "1rem" }}>
                <Typography gutterBottom variant="h4" color="#37745B" >
                    Your Registered Pets:
                </Typography>
            </div>

            {/* This displays each pet at the bottom in a card with a remove button, maybe an edit button? */}
            {user.pets && (
                user.pets.map(pet => (
                    <Card sx={{
                        maxWidth: 345,
                        width: "80%",
                        m: 5
                    }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={petProfile}
                                alt="Profile image"
                            />
                            <CardContent sx={{}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {pet.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {pet.description}
                                </Typography>
                                <button className='hoverButton' onClick={handlePetDelete} >Remove</button>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))
            )}

            <div style={{ flexBasis: "80%", marginBottom: "1rem" }}>
                <Typography gutterBottom variant="h4" color="#37745B" >
                    Add a Pet:
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="name"
                                label="Pet Name"
                                name="name"
                                autoComplete="name"
                                onChange={handleInputChange}
                                value={userFormData.name}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="species"
                                label="Species"
                                name="species"
                                autoComplete="species"
                                onChange={handleInputChange}
                                value={userFormData.species}
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <FormLabel>Is Your Pet Vaccinated</FormLabel>
                            <RadioGroup
                                row
                                name='vaccine'
                                onChange={handleInputChange}
                                value={userFormData.vaccine}>
                                <FormControlLabel value='false' control={<Radio />} label='No' />
                                <FormControlLabel value='true' control={<Radio />} label='Yes' />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="description"
                                label="Description"
                                name="description"
                                autoComplete="description"
                                onChange={handleInputChange}
                                value={userFormData.description}
                            />
                        </Grid>
                    </Grid>
                    <Typography>
                        <button className='hoverButton' type="submit">Add Pet</button>
                    </Typography>
                </Box>
            </div>
        </Box>
    );
}