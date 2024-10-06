import React, { useState } from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import { simulateTransaction } from '../utils/blockchainSimulator';

function BlockchainTransaction() {
  const [transactionStatus, setTransactionStatus] = useState('');

  const handleTransaction = () => {
    const status = simulateTransaction();
    setTransactionStatus(status);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Blockchain Transaction</Typography>
        <Button variant="contained" color="primary" onClick={handleTransaction}>
          Execute Trade
        </Button>
        {transactionStatus && <Typography variant="body2">Transaction Status: {transactionStatus}</Typography>}
      </CardContent>
    </Card>
  );
}

export default BlockchainTransaction;
