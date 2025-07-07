import React from 'react';
import { TextField } from '@mui/material';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <TextField
      label="Search by Name, Email, or Phone"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      sx={{ mt: 2, mb: 2 }}
    />
  );
}
