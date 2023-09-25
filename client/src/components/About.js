
import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { ThemeProvider } from '@mui/material/styles';

const cards = [
    {
        pet: 'Biscuit',
        review: ' ',
        package: ' ',
        image: ''
    },
    {
        pet: 'Chivy',
        review: ' ',
        package: ' ',
        image: ' ',
    },
    {
        pet: ' place holder',
        review: ' ',
        package: ' ',
        image: ' ',
    }
]

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Fresh Paws
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const About = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
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
                    image= {cards.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      "{cards.review}"
                    </Typography>
                    <Typography>
                      -{cards.pet}.... {cards.package}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Fresh Paws
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Where every tail gets a royal treatment!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}