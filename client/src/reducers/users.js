export const users = (users = {isLoading:true,posts:[]},action)=>{
    switch (action.type) {
        case 'FETCH_ALL':
            return {...users,
            posts:action.payload.data,
            currentPage:action.payload.currentPage,
            numberOfPages:action.payload.numberOfPages
            };
        case 'CREATE_USER':
            return {...users,posts:[...users.posts,action.payload]}
        case 'START_LOADING':
            return {...users,isLoading:true}
        case 'END_LOADING':
            return {...users,isLoading:false}
        default:
            return users;
    }
}

