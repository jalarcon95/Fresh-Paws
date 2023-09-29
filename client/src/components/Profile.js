import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import petProfile from '../assets/PetProfile.png';
import appointment from '../assets/apt.png';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';

export default function Profile() {
    const { data, loading, error } = useQuery(GET_ME);
    const user = data?.me || {};

    console.log(user);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            petName: data.get('petName'),
            species: data.get('species'),
            allergies: data.get('allergies'),
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
                                    {user.pets?.appointments && (
                                        user.pets.map(pet => (
                                            <>
                                                <h2>Pet Name: {pet.name}</h2>
                                                <ul>
                                                    {pet.appointments.map(appt => (
                                                        <li>
                                                            <p>Date: {appt.date}</p>
                                                            <p>Time: {appt.time}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                            //     pet.map(appt => (
                                            //     <div key={appt._id}>
                                            //         <p>Date: {appt.date}</p>
                                            //         <p>Time: {appt.time}</p>
                                            //     </div>
                                            // ))
                                        ))



                                        //      user.pets[0].appointments.map(appt => (
                                        //         <div key={appt._id}>
                                        //             <p>Date: {appt.date}</p>
                                        //             <p>Time: {appt.time}</p>
                                        //         </div>
                                        //     ))
                                    )}
                                </Typography>
                                <button className='hoverButton' >Cancel</button>
                            </Typography>
                            <button className='hoverButton' >Update</button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div style={{ flexBasis: "80%", marginBottom: "1rem" }}>
                <Typography gutterBottom variant="h4" color="#37745B" >
                    Your Registered Pets:
                </Typography>
            </div>

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
                            Pet name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Allergies
                        </Typography>
                        <button className='hoverButton' >Remove</button>
                        {/* {Auth.loggedIn() ? (<Button>Reserve</Button>) : (<div></div>)} */}
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345, width: "80%", m: 5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={petProfile}
                        alt="Profile image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pet Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Allergies
                        </Typography>
                        <button className='hoverButton' >Remove</button>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, width: "80%", m: 5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={petProfile}
                        alt="Profile image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pet Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Allergies
                        </Typography>
                        <button className='hoverButton' >Remove</button>
                    </CardContent>
                </CardActionArea>
            </Card>

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
                                id="petName"
                                label="Pet Name"
                                name="petName"
                                autoComplete="petName"
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
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="allergies"
                                label="Allergies"
                                id="allergies"
                                autoComplete="allergies"
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