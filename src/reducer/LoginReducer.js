export const LoginReducer = (state={}, action) =>{

    switch (action.type) {

        case 'login':
            return ({
                username : action.payload,
                logged: true
            })
        
        case 'logout':
            
            return ({
                logged: false
            })
    
        default:
            return state

    }
}