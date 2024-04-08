import useHttp from '../../Hooks/useHttp'
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UpUserDialog from './upuserDialog';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';



const UserCard = (props) => {
    const { useDelete} = useHttp()
    const DelUser = () => {
        useDelete('users', props.user)
    }
   
    return (
        <>
        <React.Fragment>
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            user card
          </Typography>
          <Typography variant="h6" component="div">
           {props.user.name}
          </Typography>
          <Typography color="text.secondary">
            username
          </Typography>
          <Typography variant="body2">
          {props.user.userName}
          </Typography>
          <Typography color="text.secondary">
            phone
          </Typography>
          <Typography variant="body2">
          {props.user.phone}
          </Typography>
          <Typography color="text.secondary">
            email
          </Typography>
          <Typography variant="body2">
          {props.user.email}
          </Typography>
          <Typography color="text.secondary">
            address
          </Typography>
          <Typography variant="body2">
          {props.user.address}
          </Typography>
        </CardContent>
        <CardActions>
        <Button variant="outlined"  onClick={()=>DelUser()}>
        <Grid item xs={8}>
        <DeleteIcon />
        </Grid>
      </Button>
          <UpUserDialog user={props.user}/>
        </CardActions>
      </React.Fragment>
      </>
    );
}

export default UserCard