let initialState = {
    userIds: [],
    usersDictionary: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'AddUsers':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}