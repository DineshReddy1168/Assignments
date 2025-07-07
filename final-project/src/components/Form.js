import React, { useState, useEffect } from 'react';
import {
  TextField, Button, FormControlLabel, RadioGroup, Radio,
  FormLabel, Grid, Paper, Typography, Checkbox, Box
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const initialState = {
  name: '',
  email: '',
  age: '',
  dob: '',
  gender: '',
  phone: '',
  address: '',
  agreeToTerms: false
};

export default function Form({ onSubmit, editData }) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) setFormData(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const temp = {};
    temp.name = formData.name ? '' : 'Name is required.';
    temp.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Valid email required.';
    temp.age = formData.age >= 5 && formData.age <= 100 ? '' : 'Age must be 5–100.';
    temp.phone = /^[0-9]{10}$/.test(formData.phone) ? '' : 'Phone must be 10 digits.';
    temp.address = formData.address ? '' : 'Address is required.';
    temp.dob = formData.dob ? '' : 'DOB is required.';
    temp.gender = formData.gender ? '' : 'Please select a gender.';
    temp.agreeToTerms = formData.agreeToTerms ? '' : 'You must agree.';
    setErrors(temp);
    return Object.values(temp).every(x => x === '');
  };

  const submit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData(initialState);
      setErrors({});
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#eef2f5' }}
    >
      <Paper elevation={4} sx={{ p: 5, width: '100%', maxWidth: 600 }}>
        <Typography variant="h5" gutterBottom align="center">
          {editData ? 'Edit Record' : 'Add New Record'}
        </Typography>
        <form onSubmit={submit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography>Name:</Typography>
              <TextField
                name="name"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>Email:</Typography>
              <TextField
                name="email"
                type="email"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>Phone:</Typography>
              <TextField
                name="phone"
                fullWidth
                required
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>Address:</Typography>
              <TextField
                name="address"
                fullWidth
                required
                value={formData.address}
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>Age:</Typography>
              <TextField
                name="age"
                type="number"
                fullWidth
                required
                value={formData.age}
                onChange={handleChange}
                error={!!errors.age}
                helperText={errors.age}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>Date of Birth:</Typography>
              <TextField
                name="dob"
                type="date"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                value={formData.dob}
                onChange={handleChange}
                error={!!errors.dob}
                helperText={errors.dob}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>Gender:</Typography>
              <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
              {errors.gender && <Typography color="error">{errors.gender}</Typography>}
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                }
                label="I agree to the terms and conditions"
              />
              {errors.agreeToTerms && <Typography color="error">{errors.agreeToTerms}</Typography>}
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                startIcon={<SaveIcon />}
              >
                {editData ? 'Update Record' : 'Add Record'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
