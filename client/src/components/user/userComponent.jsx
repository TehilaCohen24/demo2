import { useEffect } from "react"
import useHttp from "../../Hooks/useHttp"
import UserCard from './userCard'
import { useSelector } from 'react-redux'
import FormDialog from './userDialog'
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Card from '@mui/material/Card';

const Users = () => {
  const spacing=2
  const url = 'users'
  const { Get } = useHttp()
  useEffect(() => {
    Get(url)
  }, [])
  const userlist = useSelector(x => x.Slice.userData)
  return (
    <>
      <FormDialog />
      <br></br> <br></br>
      <Grid sx={{ flexGrow: 1 }} container spacing={4}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {userlist.map((user, index) => {
              return <Grid key={user} item>
                <Card sx={{ width: 170, height: 350 }} variant="outlined"><UserCard user={user} key={index} /></Card>
              </Grid>
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
export default Users