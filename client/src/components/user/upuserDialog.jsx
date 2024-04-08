import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import useHttp from '../../Hooks/useHttp';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

export default function UpUserDialog(props) {
  const {useUpdate}=useHttp()
  const _id=props.user._id
  const [open, setOpen]=useState(false);
  const [name,setName]=useState(props.user.name)
  const [email,setEmail]=useState(props.user.email)
  const [address,setAddress]=useState(props.user.address)
  const [userName,setUserName]=useState(props.user.userName)
  const [phone,setPhone]=useState(props.user.phone)
  const user={
    _id,
    name,
    email,
    userName,
    address,
    phone
  }
  const Send = () => {
    useUpdate('users',user)
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
      <Button variant="outlined" onClick={handleClickOpen} style={{height:'45px'}}>
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={name}
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
            label={userName}
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
            label={phone}
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
            label={address}
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
            label={email}
            type="email"
            fullWidth
            variant="standard"
            onChange={e=>setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={Send}>Send</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
