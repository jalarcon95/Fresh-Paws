import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import petProfile from '../assets/PetProfile.png';
import appointment from '../assets/apt.png';


export default function Profile() {
    return (
        <Box sx={{ display: "flex", m: 5, flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ flexBasis: "80%", marginBottom: "1rem" }}>
            <Typography gutterBottom variant="h4"  color="#37745B" >
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
                                <button className='hoverButton' >Cancel</button> 
                            </Typography>
                                <button className='hoverButton' >Update</button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div style={{ flexBasis: "80%", marginBottom: "1rem" }}>
                <Typography gutterBottom variant="h4"  color="#37745B" >
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
        </Box>
    );
}