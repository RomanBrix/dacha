const InitialState = {
    error: false,
    login: false
}

const loginReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                error: false,
                login: true
            };

        case 'LOGIN_ERROR':
            return {
                error: true,
                login: false
            };
        default: return state;
    }
};

export default loginReducer;