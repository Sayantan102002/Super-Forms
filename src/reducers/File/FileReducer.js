const initialState = {
    file: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "Add File":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}