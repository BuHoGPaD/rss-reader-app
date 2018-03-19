import { 
    GET_FEED,
} from '../../actions/feed'
 
export default function feed (state = {}, action) {
    switch (action.type) {
        case GET_FEED:
            return Object.assign({}, state, action.payload);
        default: 
            return state;
    }
}