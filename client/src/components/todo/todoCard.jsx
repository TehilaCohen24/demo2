import useHttp from '../../Hooks/useHttp'
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UpTodoDialog from './upTodoDialog';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ControlledSwitches from './completed'



const TodoCard = (props) => {
    const { useDelete} = useHttp()
    const DelTodo = () => {
        useDelete('todos', props.todo)
    }
   
    return (
        <>
        <React.Fragment>
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            todo card
          </Typography>
          <Typography variant="h6" component="div">
           {props.todo.title}
          </Typography>
          <Typography color="text.secondary">
          body
          </Typography>
          <Typography variant="body2">
          {props.todo.body}
          </Typography>
          <Typography color="text.secondary">
          tags
          </Typography>
          <Typography variant="body2">
          {props.todo.tags}
          </Typography>
        </CardContent>
        <CardActions>
        <Button variant="outlined"  onClick={()=>DelTodo()}>
        <Grid item xs={8}>
        <DeleteIcon />
        </Grid>
      </Button>
      <ControlledSwitches todo={props.todo}/>
          <UpTodoDialog todo={props.todo}/>
        </CardActions>
      </React.Fragment>
      </>
    );
}

export default TodoCard