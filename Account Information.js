import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Input,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';

const LoginPageWithAppBarAndDialog = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleClose(); // Close the dialog after submission
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Account Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Transaction History</MenuItem>
            <MenuItem onClick={handleMenuClose}>Available Balance</MenuItem>
          </Menu>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Account Information
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ACCOUNT LOGIN</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your Account Details</DialogContentText>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              autoFocus
              margin="dense"
              id="Name"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="number"
              label="Account Number"
              type="text"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              id="IFSC"
              label="IFSC CODE"
              type="text"
              fullWidth
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
      
      <div id="text">
        <h3>WELCOME TO YOUR BANK ACCOUNT!!!</h3>
      </div>
      
      {/* New Account Creation Form */}
      <Card
        variant="outlined"
        sx={{
          maxWidth: '600px',
          mx: 'auto',
          mt: 4, // margin-top to separate from the above section
          p: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Create New Account
        </Typography>
        <Divider />
        <CardContent
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Enter your full name" />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Enter your full name" />
          </FormControl>
          <FormControl>
            <FormLabel>Father Name</FormLabel>
            <Input placeholder="Enter your full name" />
          </FormControl>
          <FormControl>
            <FormLabel>Mobile Number</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Aadhaar Number</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
          <Checkbox label="I agree to the terms and conditions" sx={{ mt: 2 }} >I agree to the terms and conditions</Checkbox>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" fullWidth>
            Create Account
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default LoginPageWithAppBarAndDialog;

