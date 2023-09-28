import '../index.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Biscuit from '../assets/Biscuit.jpg';
import Peach from '../assets/Peach.jpg';
import Max from '../assets/Max2.jpg';
import Rico from '../assets/Rico.jpg';
import Chivy from '../assets/Chivy.jpg';
import Leo from '../assets/Leo.jpg';
import { List, ListItem } from '@mui/material';


const cards = [
    {
        pet: 'Biscuit',
        review: 'Exceptional grooming experience at Fresh Paws! My corgi, Biscuit, came out looking and feeling amazing. The staffs expertise and care truly shine through',
        package: 'Teeth Brushing Package',
        image: Biscuit
    },
    {
        pet: 'Max',
        review: 'Fantastic grooming experience at Pampered Paws! Max came out looking fresh and constant communication from the staff made it a stress-free experience.',
        package: 'Shedding Package',
        image: Max,
    },
    {
        pet: 'Peach',
        review: 'The groomer handled my hamster, Peach, with such care and expertise. The attention to detail and gentle approach truly set this service apart. I highly recommend it for all small pet owners!',
        package: 'Nail Trimming Package',
        image: Peach,
    },
    {
        pet: 'Rico',
        review: 'New face who dis! The staff at Fresh Paws were gentle and attentive. My furry friend looks and feels fantastic. Highly recommended!',
        package: 'Bath and Brush Package',
        image: Rico,
    },
    {
        pet: 'Leo',
        review: 'Fresh Paws exceeded my expectations! The grooming was impeccable, and my pet looked and felt fantastic. The staffs expertise and care truly shone through. We will definitely be returning!',
        package: 'Shedding Package',
        image: Leo,
    },
    {
        pet: 'Chivy',
        review: 'Brought both Chivy and Leo into Fresh paws for a grooming appointment at the same time. The groomers showed great care and expertise, and our furry friends came out looking and feeling amazing!',
        package: 'Bath and Haircut Package',
        image: Chivy,
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
          <Container maxWidth="lg">
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            At Fresh Paws Pet Grooming, we believe that every furry friend deserves to look and feel their absolute best. 
            Our mission is simple: to provide exceptional grooming services for all animals, great and small. 
            With a team of passionate and skilled groomers, we cater to the unique needs of dogs, cats, hamsters, and even exotic pets, 
            ensuring they leave our salon feeling refreshed, rejuvenated, and looking their finest.
            </Typography>
            <Typography variant="h4" align="center" color="#37745B" paragraph>
              Our Commitment
              </Typography>
              <Typography variant="h6" align="center" color="text.secondary" paragraph>
              <List sx={{listStyleType: 'disc', listStylePosition: 'inside'}}>
                <ListItem sx={{ display: 'list-item' }}>
                Tailored Care: We understand that each pet is as unique as their personality. 
                That's why we take the time to assess their individual needs and preferences, 
                tailoring our grooming approach accordingly.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                Professional Expertise: Our team consists of experienced groomers who are 
                not only skilled in traditional grooming techniques but also knowledgeable about various breeds and species. 
                This means your pet will receive the specialized care they deserve.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                Comfort and Safety: Your pet's well-being is our top priority. We maintain a clean and comfortable environment, 
                using only high-quality, pet-friendly products. 
                Our grooming techniques are gentle, ensuring a stress-free experience for your beloved companion.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                Open Communication: We value open and transparent communication. Before we start any grooming session, 
                we'll consult with you to understand your preferences and address any specific concerns you may have.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                A Holistic Approach: We believe in grooming that goes beyond aesthetics. Our services promote overall pet health, 
                including skin and coat care, nail trimming, ear cleaning, and more.
                </ListItem>
              </List>
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            <Link to="/services">
              <Button className='button'>View Services</Button>
            </Link>
            </Stack>
          </Container>
        </Box>

        <Typography variant="h4" align="center" color="#37745B" paragraph>
              Happy Tails!  
            </Typography>
          
        <Container lg={{ py: 2 }} maxWidth="md">
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
                      pt: '150%',
                    }}
                    image= {card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h6">
                      "{card.review}"
                    </Typography>
                    <Typography>
                      -{card.pet}
                    </Typography>
                    <Typography>
                      -{card.package}
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

