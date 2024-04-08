import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import useHttp from '../../Hooks/useHttp';

export default function FormDialog() {
  const {useAdd}=useHttp()
  
  const [open, setOpen]=useState(false);
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [address,setAddress]=useState("")
  const [userName,setUserName]=useState("")
  const [phone,setPhone]=useState(0)
  const user={
    name,
    email,
    userName,
    address,
    phone
  }
  const Send = () => {
    useAdd(user,'users')
    setUserName("")
    setEmail("")
    setAddress("")
    setPhone(0)
    setName("")
    handleClose()
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add User  
      </Button>
      {<br></br>}
    
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={e=>setName(e.target.value)}
          />
        </DialogContent>
        <DialogTitle>userName</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="userName"
            type="text"
            fullWidth
            variant="standard"
            onChange={e=>setUserName(e.target.value)}
          />
        </DialogContent>
        <DialogTitle>phone</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="phone"
            type="text"
            fullWidth
            variant="standard"
            onChange={e=>setPhone(e.target.value)}
          />
        </DialogContent>
        <DialogTitle>address</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="address"
            type="text"
            fullWidth
            variant="standard"
            onChange={e=>setAddress(e.target.value)}
          />
        </DialogContent>
        <DialogTitle>email</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={e=>setEmail(e.target.value)}
          />
          
        </DialogContent>
      
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={name===""||userName===""} onClick={Send}>Send</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
