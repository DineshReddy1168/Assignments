import React from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';

export default function RecordList({ records, onEdit, onDelete }) {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {records.map((rec) => (
        <Grid item xs={12} md={6} key={rec._id}>
          <Card variant="outlined" sx={{ backgroundColor: '#fafafa' }}>
            <CardContent>
              <Typography variant="h6">{rec.name}</Typography>
              <Typography>Email: {rec.email}</Typography>
              <Typography>Phone: {rec.phone}</Typography>
              <Typography>Address: {rec.address}</Typography>
              <Typography>Age: {rec.age}</Typography>
              <Typography>Date of Birth: {rec.dob}</Typography>
              <Typography>Gender: {rec.gender}</Typography>

              <Button
                variant="outlined"
                color="primary"
                onClick={() => onEdit(rec)}
                sx={{ mt: 2, mr: 1 }}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => onDelete(rec._id)}
                sx={{ mt: 2 }}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
