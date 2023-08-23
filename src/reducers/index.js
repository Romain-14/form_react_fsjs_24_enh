import { INITIAL_STATE } from "../config/const";


function reducer(state, action){
    switch (action.type) {
        case "set_msg": {
            return {
                ...state,
                // alias = value // interdit on ne "mute" pas une state !!!
                [action.name]: action.value // on écrite une nouvelle propriété
            }
        }
        case "reset_msg": {
            return INITIAL_STATE;
        }
            
        default:
            throw Error('Unknown action: ' + action.type);
    }
    
}

export {reducer}