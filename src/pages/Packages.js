import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Button, Chip, List, ListItem, ListItemText, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { packages } from '../data';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Packages = () => {
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
          🏆 Special Pooja Packages
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', mb: 6, color: '#5D4E37' }}>
          Save more with our curated pooja packages designed for your spiritual needs
        </Typography>

        <Grid container spacing={4}>
          {packages.map((pkg) => (
            <Grid item key={pkg.id} xs={12} md={6} lg={4}>
              <Card
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8DC 100%)',
                  border: pkg.id === 3 ? '3px solid #FFD700' : '2px solid #FFE4B5',
                  borderRadius: 3,
                  position: 'relative',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                  },
                }}
              >
                {pkg.id === 3 && (
                  <Box sx={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
                    <Chip label="BEST VALUE" color="error" sx={{ fontWeight: 'bold' }} />
                  </Box>
                )}
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocalOfferIcon sx={{ color: '#FF9933', mr: 1, fontSize: 28 }} />
                    <Typography variant="h5" sx={{ color: '#FF9933', fontWeight: 'bold' }}>
                      {pkg.name}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3, color: '#5D4E37' }}>
                    {pkg.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: '#FF9933', fontWeight: 'bold' }}>
                      Included Poojas:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {pkg.poojas.map((pooja, index) => (
                        <Chip
                          key={index}
                          label={pooja}
                          variant="outlined"
                          sx={{
                            borderColor: '#FFD700',
                            color: '#2C1810',
                            backgroundColor: '#FFF8DC',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h4" sx={{ color: '#FF9933', fontWeight: 'bold', mr: 2 }}>
                        ₹{pkg.discountedPrice}
                      </Typography>
                      <Typography variant="h6" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
                        ₹{pkg.originalPrice}
                      </Typography>
                    </Box>
                    <Chip
                      label={`You Save ₹${pkg.savings}`}
                      color="success"
                      size="small"
                      sx={{ fontWeight: 'bold' }}
                    />
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: '#FF9933', fontWeight: 'bold' }}>
                      Package Features:
                    </Typography>
                    <List dense>
                      {pkg.features.map((feature, index) => (
                        <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                          <ListItemText
                            primary={`✓ ${feature}`}
                            sx={{ '& .MuiListItemText-primary': { color: '#5D4E37' } }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  <Button
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
                    Book This Package
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Why Choose Packages */}
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
            Why Choose Our Pooja Packages?
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: '#FF9933', fontWeight: 'bold', mb: 1 }}>
                  💰 Cost Savings
                </Typography>
                <Typography variant="body2">
                  Save up to 20% compared to booking individual poojas
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: '#FF9933', fontWeight: 'bold', mb: 1 }}>
                  👨‍🏫 Expert Priests
                </Typography>
                <Typography variant="body2">
                  Experienced priests with specialized knowledge for each pooja
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: '#FF9933', fontWeight: 'bold', mb: 1 }}>
                  📦 Complete Samagri
                </Typography>
                <Typography variant="body2">
                  All required materials and prasad included in the package
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h6" sx={{ mb: 3, color: '#5D4E37' }}>
            Not sure which package is right for you?
          </Typography>
          <Button
            variant="outlined"
            component={Link}
            to="/contact"
            size="large"
            sx={{
              borderColor: '#FF9933',
              color: '#FF9933',
              fontWeight: 'bold',
              px: 4,
              '&:hover': {
                borderColor: '#FFD700',
                backgroundColor: '#FFF8DC',
              },
            }}
          >
            Contact Our Spiritual Advisors
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Packages;