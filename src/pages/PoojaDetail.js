import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Box, Chip, List, ListItem, ListItemText, Paper } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { dummyPoojas } from '../data';

const PoojaDetail = () => {
  const { id } = useParams();
  const pooja = dummyPoojas.find(p => p.id === parseInt(id));

  if (!pooja) {
    return <Typography>Pooja not found</Typography>;
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF8DC', py: 4 }}>
      <Container maxWidth="md">
        <Card
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8DC 100%)',
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={pooja.image}
            alt={pooja.name}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent sx={{ p: 4 }}>
            <Typography gutterBottom variant="h4" component="h1" sx={{ color: '#FF9933', fontWeight: 'bold', mb: 2 }}>
              🕉️ {pooja.name}
            </Typography>
            <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
              ₹{pooja.price}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
              {pooja.description}
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#FF9933', fontWeight: 'bold' }}>
                📋 Pooja Details
              </Typography>
              <Paper sx={{ p: 2, backgroundColor: '#FFE4B5', borderRadius: 2 }}>
                <Typography><strong>Duration:</strong> {pooja.duration} hours</Typography>
                <Typography><strong>Category:</strong> {pooja.category}</Typography>
              </Paper>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#FF9933', fontWeight: 'bold' }}>
                ✨ Benefits
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {pooja.benefits.map((benefit, index) => (
                  <Chip
                    key={index}
                    label={benefit}
                    variant="outlined"
                    sx={{
                      borderColor: '#FFD700',
                      color: '#2C1810',
                      backgroundColor: '#FFF8DC',
                      fontWeight: 'bold',
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#FF9933', fontWeight: 'bold' }}>
                 Samagri (Materials Required)
              </Typography>
              <Paper sx={{ p: 2, backgroundColor: '#FFE4B5', borderRadius: 2 }}>
                <List dense>
                  {pooja.samagri.map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemText primary={`• ${item}`} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Box>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to={`/booking/${pooja.id}`}
                sx={{
                  backgroundColor: '#FF9933',
                  fontWeight: 'bold',
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: '#FFD700',
                    color: '#2C1810',
                  },
                }}
              >
                Book This Sacred Pooja
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PoojaDetail;