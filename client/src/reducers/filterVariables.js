export const filterVariables = (filterVariables = [], { type, payload }) => {
    switch (type) {
        case 'SEND_FILTER_VARIABLES':
            return { ...filterVariables, ...payload }
        default:
            return filterVariables
    }
} 