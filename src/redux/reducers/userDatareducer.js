// const initialState = {
//     // [],
//     isLoggedin: true
// }


export default userDataDetails = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USERDATA':
            arr = [...state, action.payload];
            return arr;
        default:
            return state;
    }
}

