import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, TextField, Button, Paper, List, ListItem, ListItemText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ color: '#FF9933', fontSize: 30 }} />,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      subtitle: 'Mon-Sun: 6:00 AM - 9:00 PM'
    },
    {
      icon: <WhatsAppIcon sx={{ color: '#25D366', fontSize: 30 }} />,
      title: 'WhatsApp',
      details: ['+91 98765 43210'],
      subtitle: 'Quick responses within 30 minutes'
    },
    {
      icon: <EmailIcon sx={{ color: '#FF9933', fontSize: 30 }} />,
      title: 'Email',
      details: ['info@divinepooja.com', 'support@divinepooja.com'],
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: <LocationOnIcon sx={{ color: '#FF9933', fontSize: 30 }} />,
      title: 'Address',
      details: ['123 Temple Street', 'Sacred City, SC 12345'],
      subtitle: 'Visit our main office'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF8DC', py: 4 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 2,
            color: '#FF9933',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          }}
        >
          📞 Contact Us
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', mb: 6, color: '#5D4E37' }}>
          Get in touch with our spiritual advisors for guidance and bookings
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FF9933', fontWeight: 'bold', mb: 3 }}>
              📍 Get In Touch
            </Typography>

            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8DC 100%)',
                      border: '2px solid #FFE4B5',
                      borderRadius: 3,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {info.icon}
                        <Typography variant="h6" sx={{ ml: 2, color: '#FF9933', fontWeight: 'bold' }}>
                          {info.title}
                        </Typography>
                      </Box>
                      {info.details.map((detail, idx) => (
                        <Typography key={idx} variant="body2" sx={{ color: '#5D4E37', mb: 0.5 }}>
                          {detail}
                        </Typography>
                      ))}
                      <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1, display: 'block' }}>
                        {info.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Business Hours */}
            <Paper
              elevation={2}
              sx={{
                p: 3,
                mt: 4,
                background: 'linear-gradient(135deg, #FFE4B5 0%, #FFF8DC 100%)',
                borderRadius: 3,
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: '#FF9933', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon sx={{ mr: 1 }} />
                Business Hours
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Monday - Sunday" secondary="6:00 AM - 9:00 PM" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Emergency Services" secondary="24/7 Available" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Festival Season" secondary="Extended Hours" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8DC 100%)',
                border: '2px solid #FFE4B5',
                borderRadius: 3,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#FF9933', fontWeight: 'bold', textAlign: 'center' }}>
                  Send Us a Message
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', mb: 3, color: '#5D4E37' }}>
                  Have questions about poojas or need spiritual guidance? We're here to help.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{ mb: 2 }}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{ mb: 2 }}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    sx={{ mb: 2 }}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                    variant="outlined"
                    placeholder="Tell us about your spiritual needs or ask any questions..."
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      backgroundColor: '#FF9933',
                      fontWeight: 'bold',
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        backgroundColor: '#FFD700',
                        color: '#2C1810',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* FAQ Section */}
        <Paper
          elevation={2}
          sx={{
            p: 4,
            mt: 6,
            background: 'linear-gradient(135deg, #FFE4B5 0%, #FFF8DC 100%)',
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', color: '#FF9933', fontWeight: 'bold' }}>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ color: '#FF9933', fontWeight: 'bold', mb: 1 }}>
                Q: How far in advance should I book a pooja?
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#5D4E37' }}>
                A: We recommend booking at least 2-3 days in advance for regular poojas. For special occasions or festivals, please book 1-2 weeks ahead.
              </Typography>

              <Typography variant="h6" sx={{ color: '#FF9933', fontWeight: 'bold', mb: 1 }}>
                Q: Do you provide home delivery of prasad?
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#5D4E37' }}>
                A: Yes, we provide complimentary home delivery of prasad within our service area for all pooja bookings.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ color: '#FF9933', fontWeight: 'bold', mb: 1 }}>
                Q: Can I customize the pooja rituals?
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#5D4E37' }}>
                A: Absolutely! Our priests can customize rituals based on your family traditions and specific requirements.
              </Typography>

              <Typography variant="h6" sx={{ color: '#FF9933', fontWeight: 'bold', mb: 1 }}>
                Q: What languages do your priests speak?
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#5D4E37' }}>
                A: Our priests are fluent in Sanskrit, Hindi, English, Telugu, Tamil, and Kannada to serve diverse communities.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;