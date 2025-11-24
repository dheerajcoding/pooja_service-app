import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState('email');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    otp: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOTP = () => {
    // Mock OTP send
    alert('OTP sent successfully! (Mock)');
  };

  const handleLogin = () => {
    // Mock login
    alert('Login successful! (Mock)');
    navigate('/');
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF8DC', display: 'flex', alignItems: 'center', py: 4 }}>
      <Container maxWidth="sm">
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
            align="center"
            sx={{ color: '#FF9933', fontWeight: 'bold', mb: 3 }}
          >
            🕉️ Welcome Back
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4, color: '#5D4E37' }}>
            Sign in to your spiritual journey
          </Typography>

          <FormControl component="fieldset" sx={{ mb: 3, width: '100%' }}>
            <FormLabel component="legend" sx={{ color: '#FF9933', fontWeight: 'bold', mb: 2 }}>
              Choose Login Method
            </FormLabel>
            <RadioGroup
              row
              value={loginType}
              onChange={(e) => setLoginType(e.target.value)}
              sx={{ justifyContent: 'center' }}
            >
              <FormControlLabel
                value="email"
                control={<Radio sx={{ color: '#FF9933', '&.Mui-checked': { color: '#FF9933' } }} />}
                label="Email"
              />
              <FormControlLabel
                value="phone"
                control={<Radio sx={{ color: '#FF9933', '&.Mui-checked': { color: '#FF9933' } }} />}
                label="Phone (OTP)"
              />
            </RadioGroup>
          </FormControl>

          {loginType === 'email' ? (
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#FFE4B5',
                },
              }}
            />
          ) : (
            <>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#FFE4B5',
                  },
                }}
              />
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <TextField
                  fullWidth
                  label="Enter OTP"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#FFE4B5',
                    },
                  }}
                />
                <Button
                  variant="outlined"
                  onClick={handleSendOTP}
                  sx={{
                    borderColor: '#FF9933',
                    color: '#FF9933',
                    '&:hover': {
                      borderColor: '#FFD700',
                      backgroundColor: '#FFF8DC',
                    },
                  }}
                >
                  Send OTP
                </Button>
              </Box>
            </>
          )}

          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleLogin}
            sx={{
              mt: 2,
              backgroundColor: '#FF9933',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#FFD700',
                color: '#2C1810',
              },
            }}
          >
            Sign In
          </Button>

          <Typography variant="body2" align="center" sx={{ mt: 3, color: '#5D4E37' }}>
            New to Pooja App? <strong>Contact us to create your account</strong>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;