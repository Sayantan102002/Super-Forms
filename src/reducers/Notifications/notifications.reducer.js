let initialState = {
    notificationIds: [],
    notificationsDictionary: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "AddNotification":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
