import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea } from '@mui/material';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import Bath from '../assets/bath-photo.jpeg';
import Haircut from '../assets/haircut.webp';
import Teeth from '../assets/teeth-clean.jpeg'
import Auth from '../utils/auth.js';

export default function Services() {
    return (
        <Box sx={{ display: "flex", m: 5, flexWrap: "wrap", alignItems: "center" }}>
            <Card sx={{
                maxWidth: 345,
                width: "80%",
                m: 5
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={Bath}
                        alt="dog getting bath"
                    />
                    <CardContent sx={{}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Bath and Brush
                        </Typography>
                        <Box sx={{ display: "flex " }}>
                            <PaidOutlinedIcon /> <Typography> 25</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, and more.
                        </Typography>
                        {Auth.loggedIn() ? (<Button>Reserve</Button>) : (<div></div>)}
                        <Button>Reserve</Button>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, width: "80%", m: 5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={Haircut}
                        alt="dog haircut"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Bath and Haircut
                        </Typography>
                        <Box sx={{ display: "flex " }}>
                            <PaidOutlinedIcon /> <Typography> 35</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Bath, haircut, brushing, light dematting, nail trim, paw & pad trim, ear cleaning, sanitary trim & more.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, width: "80%", m: 5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={Teeth}
                        alt="cat getting teeth brushed"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Teeth Brushing
                        </Typography>
                        <Box sx={{ display: "flex " }}>
                            <PaidOutlinedIcon /> <Typography> 10</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Improve your furry friend's breath and dental health!
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}