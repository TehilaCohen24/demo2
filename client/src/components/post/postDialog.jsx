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
  const [title,setTitle]=useState("")
  const [body,setBody]=useState("")

  const post={
    title,
    body
  }

  const Send = () => {
    useAdd(post,'posts')
    setBody("")
    setTitle("")
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
        Add Post  
      </Button>
      {<br></br>}
    
      <Dialog open={open} onClose={handleClose}>

        <DialogTitle>title</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={e=>setTitle(e.target.value)}
          />
        </DialogContent>
        
        <DialogTitle>body</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="body"
            type="text"
            fullWidth
            variant="standard"
            onChange={e=>setBody(e.target.value)}
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={title===""} onClick={Send}>Send</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
