import * as api from '../api/index';
//Thunks --> redux-thunk is used when when the webApp is fetching the data from a remote server.It can be tricky to handle this async
// data alone by react that is why we use redux thunk.

export const getUsers = (page,filterVars) => async(dispatch)=>{//This declaration of methods called
    //  as thunks, each thunk is a function, which return another function  
   try{
    dispatch({type:'START_LOADING'})
       const {data: { data, currentPage, numberOfPages }} = await api.fetchUsers(page,filterVars);
        dispatch({type:'FETCH_ALL',payload: { data, currentPage, numberOfPages }})
        dispatch({type:'END_LOADING'})
   }catch(error){
       console.log(error.message);
   }
};
export const postUser = (post) => async(dispatch)=>{
    try{
        const {data} = await api.createUser(post)
        dispatch({type:'CREATE_USER',payload: data})
    }catch(e){
        console.log(e.message)
    }
}
export const sendFilterVariables = (variables) => async(dispatch)=>{
    try{
        dispatch({type:'SEND_FILTER_VARIABLES',payload:variables})
    }catch(e){
        console.log(e.message)
    }
}
export const sendVolunData = (Data)  => async(dispatch)=>{
    try{
        const {data} = await api.createVolunteer(Data)
            dispatch({type:'CREATE_NEW_VOLUNTEER',payload:data})
    }catch(e){
        console.log(e.message)
    }
}