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

export default function UpTodoDialog(props) {
  const {useUpdate}=useHttp()
  const _id=props.todo._id
  const [open, setOpen]=useState(false);
  const [title,setTitle]=useState(props.todo.title)
  const [body,setBody]=useState(props.todo.body)
  const [completed,setCompleted]=useState(props.todo.completed)
  const [tags,setTags]=useState(props.todo.tags)
  const todo={
    _id,
    title,
    body,
    completed,
    tags
  }
  const Send = () => {
    useUpdate('todos',todo)
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
            type="body"
            fullWidth
            variant="standard"
            onChange={e=>setBody(e.target.value)}
          />
        </DialogContent>
        <DialogTitle>tags</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label={tags}
            type="text"
            fullWidth
            variant="standard"
            onChange={e=>setTags(e.target.value)}
          />
        </DialogContent>
        <DialogTitle>completed</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label={completed}
            type="text"
            fullWidth
            variant="standard"
            onChange={e=>setCompleted(e.target.value)}
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
