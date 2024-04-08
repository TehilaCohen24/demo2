import { useEffect } from "react"
import useHttp from "../../Hooks/useHttp"
import PostCard from './postCard'
import {useSelector} from 'react-redux'
import FormDialog from './postDialog'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import * as React from 'react';

const Posts=()=>{
  const spacing=2
   const url='posts'
    const {Get}=useHttp()
    useEffect(()=>{
        Get(url)},[])
    const postlist=useSelector(x=>x.Slice.postData)
    return(
        <>
        <FormDialog/>
        <Grid sx={{ flexGrow: 1 }} container spacing={4}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {postlist.map((post, index) => {
              return <Grid key={post} item>
                <Card sx={{ width: 170, height: 220 }} variant="outlined"><PostCard post={post} key={index} /></Card>
              </Grid>
            })}
          </Grid>
        </Grid>
      </Grid>
        </>
    )
}
export default Posts