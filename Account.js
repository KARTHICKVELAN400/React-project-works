// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   TextField,
//   Box,
//   IconButton,
//   Menu,
//   MenuItem,
//   Card,
//   CardActions,
//   CardContent,
//   Checkbox,
//   Divider,
//   FormControl,
//   FormLabel,
//   Input,
//   Grid,
//   Paper,
//   Alert,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import './App.css';

// const LoginPageWithAppBarAndDialog = () => {
//   const [open, setOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = () => {
//     handleClose(); // Close the dialog after submission
//   };

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={handleMenuOpen}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}>Account Settings</MenuItem>
//             <MenuItem onClick={handleMenuClose}>Transaction History</MenuItem>
//             <MenuItem onClick={handleMenuClose}>Available Balance</MenuItem>
//           </Menu>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Accounting System
//           </Typography>
//           <Button color="inherit" onClick={handleClickOpen}>
//             LOGIN
//           </Button>
//         </Toolbar>
//       </AppBar>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>ACCOUNT LOGIN</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Enter your Account Details</DialogContentText>
//           <Box component="form" sx={{ mt: 2 }}>
//             <TextField
//               autoFocus
//               margin="dense"
//               id="Name"
//               label="Name"
//               type="text"
//               fullWidth
//               variant="outlined"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <TextField
//               margin="dense"
//               id="number"
//               label="Account Number"
//               type="text"
//               fullWidth
//               variant="outlined"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <TextField
//               margin="dense"
//               id="IFSC"
//               label="IFSC CODE"
//               type="text"
//               fullWidth
//               variant="outlined"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleSubmit} variant="contained" color="primary">
//             SUBMIT
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <div id="text">
//         <h3>WELCOME TO YOUR BANK ACCOUNT!!!</h3>
//       </div>

//       {/* New Account Creation Form */}
//       <Card
//         variant="outlined"
//         sx={{
//           maxWidth: '600px',
//           mx: 'auto',
//           mt: 4, // margin-top to separate from the above section
//           p: 2,
//         }}
//       >
//         <Typography variant="h5" sx={{ mb: 2 }}>
//           Create New Account
//         </Typography>
//         <Divider />
//         <CardContent
//           sx={{
//             display: 'grid',
//             gridTemplateColumns: '1fr',
//             gap: 2,
//           }}
//         >
//           <FormControl>
//             <FormLabel>First Name</FormLabel>
//             <Input placeholder="Enter your full name" />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Last Name</FormLabel>
//             <Input placeholder="Enter your last name" />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Father Name</FormLabel>
//             <Input placeholder="Enter Your father name" />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Mobile Number</FormLabel>
//             <Input placeholder="10-Digit Number" />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Aadhaar Number</FormLabel>
//             <Input placeholder="Enter your 12-Digit Number" />
//           </FormControl>
//           <FormControl>
//             <Checkbox
//               label="I agree to the terms and conditions"
//               sx={{ mt: 2 }}
//             ></Checkbox>
//           </FormControl>
//         </CardContent>
//         <CardActions>
//           <Button variant="contained" color="primary" fullWidth>
//             Create Account
//           </Button>
//         </CardActions>
//       </Card>

//       {/* Dashboard */}
//       <Grid container spacing={3} sx={{ mt: 4, px: 2 }}>
//         <Grid item xs={12} md={4}>
//           <Paper sx={{ p: 2 }}>
//             <Typography variant="h6">Account Summary</Typography>
//             {/* Placeholder for financial summaries, balances, etc. */}
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Paper sx={{ p: 2 }}>
//             <Typography variant="h6">Recent Transactions</Typography>
//             {/* Placeholder for recent transactions */}
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Paper sx={{ p: 2 }}>
//             <Typography variant="h6">Reports</Typography>
//             {/* Placeholder for generating reports */}
//           </Paper>
//         </Grid>
//       </Grid>

//       {/* Alerts and Notifications */}
//       <Box sx={{ mt: 4, px: 2 }}>
//         <Alert severity="warning">Low Balance Alert: Your balance is below the minimum required amount.</Alert>
//         <Alert severity="info">Upcoming Payment: You have a payment due on 15th September.</Alert>
//       </Box>
//     </>
//   );
// };

// export default LoginPageWithAppBarAndDialog;
// src/App.js

// import React from 'react';
// import Account from './Account';

// const App = () => {
//   return (
//     <div>
//       <Account />
//     </div>
//   );
// };

// export default App;
// src/Account.js

import React, { useState } from 'react';
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

const Account = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState('');

  const handleAddTransaction = () => {
    if (!transactionType || !amount) {
      setAlert('Please fill out all fields.');
      return;
    }

    const newTransaction = {
      id: transactions.length + 1,
      type: transactionType,
      amount: parseFloat(amount),
    };

    setTransactions([...transactions, newTransaction]);
    setAmount('');
    setTransactionType('');
    setAlert('Transaction added successfully.');
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
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
    </Box>
  );
};

export default Account;

