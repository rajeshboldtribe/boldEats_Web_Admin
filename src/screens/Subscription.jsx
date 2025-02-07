import React from 'react';
import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const subscriptionData = [
    { id: 1, name: 'John Doe', amount: '₹8,249.25', fromDate: '2023-01-01', toDate: '2023-12-31', totalOrders: 15 },
    { id: 2, name: 'Jane Smith', amount: '₹4,124.50', fromDate: '2023-02-01', toDate: '2023-11-30', totalOrders: 10 },
    { id: 3, name: 'Michael Johnson', amount: '₹16,499.75', fromDate: '2023-03-01', toDate: '2023-12-31', totalOrders: 25 },
];

const Subscription = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <Typography variant="h4" component="h1" className="text-center mb-8 font-bold">
                Subscription Details
            </Typography>
            <Card className="shadow-xl">
                <CardContent>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="font-bold">ID</TableCell>
                                    <TableCell className="font-bold">Name</TableCell>
                                    <TableCell className="font-bold">Subscription Amount</TableCell>
                                    <TableCell className="font-bold">From Date</TableCell>
                                    <TableCell className="font-bold">To Date</TableCell>
                                    <TableCell className="font-bold">Total Orders Done</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {subscriptionData.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.amount}</TableCell>
                                        <TableCell>{row.fromDate}</TableCell>
                                        <TableCell>{row.toDate}</TableCell>
                                        <TableCell>{row.totalOrders}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </div>
    );
};

export default Subscription;