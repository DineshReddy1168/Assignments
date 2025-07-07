import React, { useEffect, useState, useCallback } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useSnackbar } from 'notistack';
import Form from './components/Form';
import RecordList from './components/RecordList';
import SearchBar from './components/SearchBar';
import { getRecords, addRecord, updateRecord, deleteRecord } from './api';

function App() {
  const [records, setRecords] = useState([]);
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { enqueueSnackbar } = useSnackbar();

 
  const fetchData = useCallback(async () => {
    try {
      const res = await getRecords();
      setRecords(res.data);
    } catch (error) {
      enqueueSnackbar('Failed to fetch data', { variant: 'error' });
    }
  }, [enqueueSnackbar]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = async (data) => {
    try {
      if (editData) {
        const { _id, ...updatedData } = data;
        await updateRecord(editData._id, updatedData);
        enqueueSnackbar('Record updated!', { variant: 'success' });
        setEditData(null);
      } else {
        await addRecord(data);
        enqueueSnackbar('Record added!', { variant: 'success' });
      }
      fetchData();
    } catch {
      enqueueSnackbar('Submit failed!', { variant: 'error' });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRecord(id);
      enqueueSnackbar('Record deleted!', { variant: 'info' });
      fetchData();
    } catch {
      enqueueSnackbar('Delete failed!', { variant: 'error' });
    }
  };

  const filteredRecords = records.filter((r) =>
    r.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.phone?.includes(searchTerm)
  );

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to right, #e0f7fa, #ffffff)' }}>
      <Container sx={{ pt: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Student Management
        </Typography>
        <Form onSubmit={handleSubmit} editData={editData} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RecordList records={filteredRecords} onEdit={setEditData} onDelete={handleDelete} />
      </Container>
    </Box>
  );
}

export default function AppWrapper() {
  return <App />;
}
