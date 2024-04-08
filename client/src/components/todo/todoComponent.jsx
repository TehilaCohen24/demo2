import { useEffect } from "react"
import useHttp from "../../Hooks/useHttp"
import TodoCard from './todoCard'
import {useSelector} from 'react-redux'
import FormDialog from './todoDialog'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import * as React from 'react';

const Todos=()=>{
  const spacing=2
   const url='todos'
    const {Get}=useHttp()
    useEffect(()=>{
        Get(url)},[])
    const todolist=useSelector(x=>x.Slice.todoData)
    return(
        <>
        <FormDialog/>
        <Grid sx={{ flexGrow: 1 }} container spacing={4}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {todolist.map((todo, index) => {
              return <Grid key={todo} item>
                <Card sx={{ width: 220, height: 250 }} variant="outlined"><TodoCard todo={todo} key={index} /></Card>
              </Grid>
            })}
          </Grid>
        </Grid>
      </Grid>
        </>
    )
}
export default Todos