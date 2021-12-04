export const volunteers = (volunteers = [],action) =>{
    switch (action.type) {
        case 'CREATE_NEW_VOLUNTEER':
            return [...volunteers,action.payload]
        case 'FETCH_ALL_VOL':
            return action.payload
        default:
            return volunteers
    }
}
