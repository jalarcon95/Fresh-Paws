
import * as React from 'react';
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


const cards = [
    {
        pet: 'Biscuit',
        review: 'Exceptional grooming experience at Fresh Paws! My corgi, Biscuit, came out looking and feeling amazing. The staffs expertise and care truly shine through',
        package: 'Full Grooming Package',
        image: ''
    },
    {
        pet: 'Chivy',
        review: 'Fantastic grooming experience at Pampered Paws! Chivy came out looking fresh and constant communication from the staff made it a stress-free experience.',
        package: ' ',
        image: ' ',
    },
    {
        pet: ' place holder',
        review: 'The groomer handled my hamster, , with such care and expertise. The attention to detail and gentle approach truly set this service apart. I highly recommend it for all small pet owners!',
        package: ' ',
        image: ' ',
    }
]

export default function About () {
  return (
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Fresh Paws
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            At Fresh Paws Pet Grooming, we believe that every furry friend deserves to look and feel their absolute best. 
            Our mission is simple: to provide exceptional grooming services for all animals, great and small. 
            With a team of passionate and skilled groomers, we cater to the unique needs of dogs, cats, hamsters, and even exotic pets, 
            ensuring they leave our salon feeling refreshed, rejuvenated, and looking their finest.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            <Link to="/services">
              <Button variant="contained">View Services</Button>
            </Link>
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image= {card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      "{card.review}"
                    </Typography>
                    <Typography>
                      -{card.pet}.... {card.package}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
  );
}

