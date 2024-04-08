import useHttp from '../../Hooks/useHttp'
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UpPostDialog from './upPostDialog';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const PostCard = (props) => {
    const { useDelete} = useHttp()
    const DelPost = () => {
        useDelete('posts', props.post)
    }
    const [showBody, setShowBody] = React.useState(null);

    const handleOpenBodyMenu = (event) => {
        setShowBody(event.currentTarget);
    }

    const handleCloseUserMenu = () => {
        setShowBody(null);
    };

    return (
        <>
        <React.Fragment>
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            post card
          </Typography>
          <Typography variant="h6" component="div">
           {props.post.title}
          </Typography>
          <Typography color="text.secondary">
            body
          </Typography>
            {props.post.body.length<10?<> <Typography variant="body2">
          {props.post.body}
</Typography></>:
<>

  <KeyboardArrowDownIcon onClick={handleOpenBodyMenu} />
  <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={showBody}
      anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
      }}
      open={Boolean(showBody)}
      onClose={handleCloseUserMenu}
  >

      <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlig2n="center">{props.post.body}</Typography>
      </MenuItem>
  </Menu>
  </>
          }
         
      </CardContent>
        <CardActions>
        <Button variant="outlined"  onClick={()=>DelPost()}>
        <Grid item xs={8}>
        <DeleteIcon />
        </Grid>
      </Button>
          <UpPostDialog post={props.post}/>
        </CardActions>
      </React.Fragment>
      </>
    );
}

export default PostCard