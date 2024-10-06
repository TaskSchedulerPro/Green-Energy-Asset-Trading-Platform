import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Dashboard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">User Dashboard</Typography>
        <Typography variant="body1">Carbon Footprint: 1200 tons</Typography>
        <Typography variant="body1">Available Credits: 50 RECs</Typography>
        <Typography variant="body1">Recent Transactions: 3</Typography>
      </CardContent>
    </Card>
  );
}

export default Dashboard;
