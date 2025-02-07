import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import './User.css';

const userData = [
  {
    id: 'SUB12345',
    name: 'John Doe',
    amount: '₹4,000',
    totalDays: 30,
    expiryDate: '2025-03-01',
  },
  {
    id: 'SUB12346',
    name: 'Jane Smith',
    amount: '₹6,000',
    totalDays: 60,
    expiryDate: '2025-04-15',
  },
  {
    id: 'SUB12347',
    name: 'Michael Johnson',
    amount: '₹9,000',
    totalDays: 90,
    expiryDate: '2025-05-20',
  },
];

const Users = () => {
  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', textAlign: 'center' }}>
        Users Management
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="user management table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Subscription ID</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>User Name</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Subscription Amount</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Total Subscription Days</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Subscription Expiry Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.amount}</TableCell>
                <TableCell>{user.totalDays}</TableCell>
                <TableCell>{user.expiryDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Users;