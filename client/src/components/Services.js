import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Bath and Brush
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, and more.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Bath and Haircut
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Bath, haircut, brushing, light dematting, nail trim, paw & pad trim, ear cleaning, sanitary trim & more.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Teeth Brushing
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Improve your furry friend's breath and dental health!
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        
    );
}