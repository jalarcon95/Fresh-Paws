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
import Nail from '../assets/nail-trim.avif'
import Shed from '../assets/shedding.webp'
import Fleas from '../assets/fleas.jpeg'


export default function Services() {
    return (
        <Box sx={{ display: "flex", m: 5, flexWrap: "wrap", justifyContent: "center" }}>
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
                            <PaidOutlinedIcon /> <Typography>35</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, and more.
                        </Typography>
                        {/* {Auth.loggedIn() ? (<Button>Reserve</Button>) : (<div></div>)} */}
                        <Button style={{ color: 'black', backgroundColor: '#8B9D77' }}>Reserve</Button>
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
                            <PaidOutlinedIcon /> <Typography> 45</Typography>
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
            <Card sx={{ maxWidth: 345, width: "80%", m: 5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={Nail}
                        alt="paw with nail trimmer"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nail Trim
                        </Typography>
                        <Box sx={{ display: "flex " }}>
                            <PaidOutlinedIcon /> <Typography> 20</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            A clean trim and paw balm.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, width: "80%", m: 5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={Shed}
                        alt="cat being brushed"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Shedding
                        </Typography>
                        <Box sx={{ display: "flex " }}>
                            <PaidOutlinedIcon /> <Typography> 15</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Get some help removing your pet's extra fur!
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, width: "80%", m: 5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={Fleas}
                        alt="small dog scratching with hind leg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Flea Removal
                        </Typography>
                        <Box sx={{ display: "flex " }}>
                            <PaidOutlinedIcon /> <Typography> 60</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Get rid of your pet's pests, so they can get back to the important stuff. 
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}