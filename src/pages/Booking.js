import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { dummyPoojas } from '../data';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pooja = dummyPoojas.find(p => p.id === parseInt(id));

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock booking - just navigate to confirmation
    navigate('/confirmation', { state: { pooja, formData } });
  };

  if (!pooja) {
    return <Typography>Pooja not found</Typography>;
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF8DC', py: 4 }}>
      <Container maxWidth="md">
        <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8DC 100%)',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              textAlign: 'center',
              color: '#FF9933',
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            🕉️ Book {pooja.name}
          </Typography>
          <Typography variant="h6" sx={{ textAlign: 'center', color: '#FFD700', fontWeight: 'bold', mb: 4 }}>
            ₹{pooja.price}
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ color: '#FF9933', fontWeight: 'bold', mb: 2 }}>
              📅 Select Date & Time
            </Typography>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Preferred Date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#FFE4B5',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Preferred Time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#FFE4B5',
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Typography variant="h6" sx={{ color: '#FF9933', fontWeight: 'bold', mb: 2 }}>
              📍 Address Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Street Address"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#FFE4B5',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#FFE4B5',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#FFE4B5',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#FFE4B5',
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => navigate(-1)}
                sx={{
                  borderColor: '#FF9933',
                  color: '#FF9933',
                  '&:hover': {
                    borderColor: '#FFD700',
                    backgroundColor: '#FFF8DC',
                  },
                }}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#FF9933',
                  fontWeight: 'bold',
                  px: 4,
                  '&:hover': {
                    backgroundColor: '#FFD700',
                    color: '#2C1810',
                  },
                }}
              >
                Proceed to Payment
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Booking;