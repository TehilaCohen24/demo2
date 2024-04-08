import * as React from 'react';
import Switch from '@mui/material/Switch';
import Axios from 'axios'

export default function ControlledSwitches(props) {
  const [checked, setChecked] = React.useState(props.todo.completed);
  
    const handleChange = async(event) => {
      try {
        const { data } = await Axios.put(`http://localhost:3262/api/todos/completed/${props.todo._id}`)
        setChecked(!event.target.checked);
       
      }
      catch {
        console.log("err")
      }
      
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
