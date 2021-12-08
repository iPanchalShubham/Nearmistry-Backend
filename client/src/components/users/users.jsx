import React from 'react';
import {useSelector} from 'react-redux';
import User from './user/user.jsx';
import Grid from '@material-ui/core/Grid';
const Users = () => {
    const posts = useSelector(state =>state.users)
    const filterVars = useSelector(state=> state.filterVariables) 
    const filterData = (profile)=>{
        return(
            profile.occupation === filterVars?.painter|profile.occupation === filterVars?.helper|profile.occupation === filterVars?.labour|profile.occupation === filterVars?.raj_mistri
        )
    }
    return(
        <div>
        <Grid container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="flex-start">{posts.filter((profile)=>filterData(profile,filterVars))?.map(post =><Grid item  sm={1} md={4} lg ={6} key = {post._id} >
            <User User_details = {post}/>
        </Grid>)}</Grid>
        </div>
    )
}
export default Users;