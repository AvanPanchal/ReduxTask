// export const userdataDetails = (payload) => {
//     return ({
//         type: 'ADD_USERDATA',
//         payload
//     })
// }



export const userdataDetails = () => {
    return async dispatch => {
        await fetch('https://reqres.in/api/users?page=2')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else console.error('Error : ', response);
            })
            .then(json => {
                console.log(json);
                dispatch({
                    type: 'ADD_USERDATA',
                    payload: json.data,
                });
            })
            .catch(error => console.error('error', error));
    };
};