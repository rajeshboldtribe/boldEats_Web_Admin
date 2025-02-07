import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  MenuItem,
  Select,
  Typography,
  FormControl,
  InputLabel,
  Chip,
} from '@mui/material';
import { EyeIcon } from '@heroicons/react/24/outline';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      userName: 'John Doe',
      date: '2024-03-21',
      status: 'Delivered',
      amount: 2000,
    },
    {
      id: 'ORD002',
      userName: 'Jane Smith',
      date: '2024-03-20',
      status: 'Pending',
      amount: 3500,
    },
    {
      id: 'ORD003',
      userName: 'Mike Johnson',
      date: '2024-03-19',
      status: 'Cancelled',
      amount: 1500,
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return '#4caf50'; // Green for Delivered
      case 'pending':
        return '#ff9800'; // Yellow for Pending
      case 'cancelled':
        return '#f44336'; // Red for Cancelled
      default:
        return '#b0bec5';
    }
  };

  return (
    <div className="p-6">
      <Typography variant="h4" gutterBottom className="font-bold text-gray-800 mb-6">
        Orders Management
      </Typography>
      <TableContainer component={Paper} className="shadow-lg">
        <Table sx={{ minWidth: 750 }} aria-label="orders table">
          <TableHead>
            <TableRow style={{ backgroundColor: '#f5f5f5' }}>
              <TableCell className="font-semibold">Order ID</TableCell>
              <TableCell className="font-semibold">User Name</TableCell>
              <TableCell className="font-semibold">Date</TableCell>
              <TableCell className="font-semibold">Amount (INR)</TableCell>
              <TableCell className="font-semibold">Status</TableCell>
              <TableCell className="font-semibold">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.userName}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell className="font-medium">&#8377;{order.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <Select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      style={{
                        backgroundColor: getStatusColor(order.status),
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      <MenuItem value="Delivered" style={{ backgroundColor: '#4caf50', color: 'white' }}>
                        Delivered
                      </MenuItem>
                      <MenuItem value="Pending" style={{ backgroundColor: '#ff9800', color: 'white' }}>
                        Pending
                      </MenuItem>
                      <MenuItem value="Cancelled" style={{ backgroundColor: '#f44336', color: 'white' }}>
                        Cancelled
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<EyeIcon className="h-4 w-4" />}
                    sx={{ backgroundColor: '#1976d2', color: 'white' }}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;