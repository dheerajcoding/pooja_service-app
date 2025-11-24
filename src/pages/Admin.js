import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Chip } from '@mui/material';
import { dummyPoojas } from '../data';

const Admin = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF8DC', py: 4 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 4,
            color: '#FF9933',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          }}
        >
          🕉️ Admin Dashboard - Pooja Management
        </Typography>

        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Button
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
            ➕ Add New Pooja
          </Button>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 3,
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8DC 100%)',
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#FFE4B5' }}>
                <TableCell sx={{ fontWeight: 'bold', color: '#FF9933' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#FF9933' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#FF9933' }}>Category</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#FF9933' }}>Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#FF9933' }}>Duration</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#FF9933' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyPoojas.map((pooja) => (
                <TableRow key={pooja.id} sx={{ '&:hover': { backgroundColor: '#FFF8DC' } }}>
                  <TableCell>{pooja.id}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>{pooja.name}</TableCell>
                  <TableCell>
                    <Chip
                      label={pooja.category}
                      sx={{
                        backgroundColor: '#FFD700',
                        color: '#2C1810',
                        fontWeight: 'bold',
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: '#FF9933', fontWeight: 'bold' }}>₹{pooja.price}</TableCell>
                  <TableCell>{pooja.duration} hours</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: '#FF9933',
                          color: '#FF9933',
                          '&:hover': {
                            borderColor: '#FFD700',
                            backgroundColor: '#FFF8DC',
                          },
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        sx={{
                          '&:hover': {
                            backgroundColor: '#ffebee',
                          },
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#5D4E37' }}>
            Total Poojas: {dummyPoojas.length} | Manage your sacred services here
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Admin;