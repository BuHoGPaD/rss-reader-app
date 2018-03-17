import { 
    ADD_COUNTER,
    DELETE_COUNTER,
    INCREASE_COUNT,
    DECREASE_COUNT,
    CHANGE_TEXT,
} from '../../actions'

var initialState = {
}
 
export default function (state = {}, action) {
    debugger;
    switch (action.type) {
        case ADD_COUNTER:
            return Object.assign({}, state, action.payload);
        case DELETE_COUNTER:
            return Object.assign({}, state, action.payload);
        case INCREASE_COUNT:
            return Object.assign({}, state, action.payload);
        case DECREASE_COUNT:
            return Object.assign({}, state, action.payload);
        case CHANGE_TEXT:
            return Object.assign({}, state, action.payload);
        default: 
            return state;
    }
}