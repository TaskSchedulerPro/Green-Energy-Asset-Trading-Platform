import React from 'react';
import { Card, CardContent, Typography, LinearProgress } from '@mui/material';

function SustainabilityScorecard() {
  const carbonOffset = 30; // Example percentage

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Sustainability Scorecard</Typography>
        <Typography variant="body1">Carbon Offset: {carbonOffset}%</Typography>
        <LinearProgress variant="determinate" value={carbonOffset} />
      </CardContent>
    </Card>
  );
}

export default SustainabilityScorecard;
