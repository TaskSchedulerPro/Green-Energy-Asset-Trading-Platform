import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import { generateTradeOptions } from '../utils/mockAI';

function TradeScenario() {
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    const options = generateTradeOptions();
    setScenarios(options);
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">AI-Generated Trade Scenarios</Typography>
        {scenarios.map((scenario, index) => (
          <div key={index}>
            <Typography variant="body1">
              Scenario {index + 1}: {scenario.description}
            </Typography>
            <Typography variant="body2">Cost: {scenario.cost} | Impact: {scenario.impact}</Typography>
            <Button variant="outlined" style={{ marginTop: '10px' }}>
              Select Scenario
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default TradeScenario;
