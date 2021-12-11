import React from 'react';
import {useSelector} from 'react-redux';
import User from './user/user.jsx';
import Grid from '@material-ui/core/Grid';
import Pagination from '../pagination/pagination.js';

const Users = () => {
    const {posts} = useSelector(state =>state.users)
    return(
        <div>
    <div 
    >
        <Grid container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        >{posts.map(post =><Grid item  sm={1} md={4}  key = {post._id} >
            <User User_details = {post}/>
        </Grid>)}</Grid>
        </div>
        </div>
        
    )
}
export default Users;