import React from 'react';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useLocation, Link } from 'react-router-dom';

const BookingConfirmation = () => {
  const location = useLocation();
  const { pooja, formData } = location.state || {};

  if (!pooja) {
    return <Typography>Booking not found</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4, textAlign: 'center' }}>
        <CheckCircleIcon sx={{ fontSize: 80, color: 'green', mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Booking Confirmed!
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Your pooja has been successfully booked
        </Typography>

        <Box sx={{ mt: 3, textAlign: 'left', maxWidth: 400, mx: 'auto' }}>
          <Typography variant="h6" gutterBottom>Booking Details</Typography>
          <Typography><strong>Pooja:</strong> {pooja.name}</Typography>
          <Typography><strong>Date:</strong> {formData.date}</Typography>
          <Typography><strong>Time:</strong> {formData.time}</Typography>
          <Typography><strong>Address:</strong> {formData.street}, {formData.city}, {formData.state} - {formData.pincode}</Typography>
          <Typography><strong>Amount:</strong> ₹{pooja.price}</Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            A confirmation email has been sent to your registered email address.
          </Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Button variant="contained" component={Link} to="/">
            Back to Home
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default BookingConfirmation;