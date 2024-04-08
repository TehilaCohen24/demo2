import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import useHttp from '../../Hooks/useHttp';
import EditIcon from '@mui/icons-material/Edit';

export default function UpPostDialog(props) {
  const {useUpdate}=useHttp()
  const _id=props.post._id
  const [open, setOpen]=useState(false);
  const [title,setTitle]=useState(props.post.title)
  const [body,setBody]=useState(props.post.body)
  const post={
    _id,
    title,
    body
  }
  const Send = () => {
    useUpdate('posts',post)
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
        <DialogTitle>title</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label={title}
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
            label={body}
            type="text"
            fullWidth
            variant="standard"
            onChange={e=>setBody(e.target.value)}
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
