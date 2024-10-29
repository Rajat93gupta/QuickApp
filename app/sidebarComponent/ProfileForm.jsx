import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  
} from '@mui/material';
import Grid from '@mui/material/Grid2';

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    confirmMobileNumber: '',
    gender: '',
    accountType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform form submission logic (e.g., API call)
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      
      
      <Grid container spacing={2}>
        <Grid size={{xs:12 ,sm:6}}>
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid size={{xs:12 ,sm:6}}>
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid size={{xs:12 ,sm:6}}>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid size={{xs:12 ,sm:6}}>
          <TextField
            label="Mobile Number"
            name="mobileNumber"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid size={{xs:12 ,sm:6}}>
          <TextField
            label="Confirm Mobile Number"
            name="confirmMobileNumber"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.confirmMobileNumber}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid size={{xs:12 ,sm:6}}>
          <FormControl component="fieldset" margin="normal" required>
            <Typography variant="subtitle1">Gender</Typography>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid size={{xs:12 ,sm:12}}>
          <FormControl variant="outlined" fullWidth margin="normal" required>
            <InputLabel>Account Type</InputLabel>
            <Select
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              label="Account Type"
            >
              <MenuItem value="personal">Personal</MenuItem>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default UserForm;
