import React, { useState, useEffect } from 'react';
import apiInstance from './apiInstance';  // Axios instance
import {
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Alert,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TransactionManager = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState('');

  // Authentication States
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');

  const correctPassword = 'karthick'; // Set your password here

  // Fetch transactions from the API when the component mounts
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await apiInstance.get('/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setAlert('Failed to fetch transactions.');
      }
    };

    fetchTransactions();
  }, []);

  // Add new transaction using Axios POST request
  const handleAddTransaction = async () => {
    if (!transactionType || !amount) {
      setAlert('Please fill out all fields.');
      return;
    }

    const newTransaction = {
      type: transactionType,
      amount: parseFloat(amount),
    };

    try {
      const response = await apiInstance.post('/transactions', newTransaction);
      setTransactions([...transactions, response.data]);
      setAmount('');
      setTransactionType('');
      setAlert('Transaction added successfully.');
    } catch (error) {
      console.error('Error adding transaction:', error);
      setAlert('Failed to add transaction.');
    }
  };

  // Delete transaction using Axios DELETE request
  const handleDeleteTransaction = async (id) => {
    try {
      await apiInstance.delete(`/transactions/${id}`);
      setTransactions(transactions.filter((transaction) => transaction.id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
      setAlert('Failed to delete transaction.');
    }
  };

  // Handle password submission for authentication
  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Incorrect password. Please try again.');
    }
  };

  // Calculate the current balance
  const calculateBalance = () => {
    const totalIncome = transactions
      .filter((t) => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = transactions
      .filter((t) => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);
    return totalIncome - totalExpenses;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {!isAuthenticated ? (
        <Card sx={{ p: 3, maxWidth: 400, margin: 'auto', marginTop: '20%' }}>
          <Typography variant="h6" gutterBottom>
            Enter Password to Access Account
          </Typography>
          {loginError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {loginError}
            </Alert>
          )}
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handlePasswordSubmit}>
            Submit
          </Button>
        </Card>
      ) : (
        <>
          {alert && (
            <Alert
              severity={alert === 'Transaction added successfully.' ? 'success' : 'error'}
              sx={{ m: 2 }}
            >
              {alert}
            </Alert>
          )}
          <Grid container spacing={3}>
            {/* Dashboard */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Dashboard</Typography>
                <Typography>Total Transactions: {transactions.length}</Typography>
                <Typography>
                  Total Income: $
                  {transactions
                    .filter((t) => t.type === 'income')
                    .reduce((acc, t) => acc + t.amount, 0)
                    .toFixed(2)}
                </Typography>
                <Typography>
                  Total Expenses: $
                  {transactions
                    .filter((t) => t.type === 'expense')
                    .reduce((acc, t) => acc + t.amount, 0)
                    .toFixed(2)}
                </Typography>
                <Typography variant="h6">
                  Current Balance: ${calculateBalance().toFixed(2)}
                </Typography>
              </Paper>
            </Grid>

            {/* Data Entry Form */}
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ p: 2 }}>
                <CardContent>
                  <Typography variant="h6">Add Transaction</Typography>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Type</InputLabel>
                    <Select
                      value={transactionType}
                      onChange={(e) => setTransactionType(e.target.value)}
                    >
                      <MenuItem value="income">Income</MenuItem>
                      <MenuItem value="expense">Expense</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth
                    label="Amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    sx={{ mt: 2 }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={handleAddTransaction}
                  >
                    Add Transaction
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Transaction History */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Transaction History</Typography>
                <List>
                  {transactions.map((transaction) => (
                    <ListItem key={transaction.id}>
                      <ListItemText
                        primary={`${transaction.type} - $${transaction.amount.toFixed(2)}`}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          onClick={() => handleDeleteTransaction(transaction.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default TransactionManager;  // Updated export
