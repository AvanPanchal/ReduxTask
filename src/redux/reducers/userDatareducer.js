// const initialState = {
//     // [],
//     isLoggedin: true
// }
const userdata = {
    users: [],
    firstTime: false,
};

export default userDataDetails = (state = userdata, action) => {
    switch (action.type) {
        case 'ADD_USERDATA':
            let list = action.payload;
            if (!list) {
                alert('List Is Empty');
            }
            return { ...state, users: list, firstTime: true };
        default:
            return state;
    }
}

