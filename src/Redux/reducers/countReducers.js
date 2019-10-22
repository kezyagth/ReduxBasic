import { INCREMENT, DECREMENT} from '../actions/types';

let count = 0;
export default function(state = count, actions) {
    switch(actions.type) {
        case INCREMENT:
            count++;
            break;
        case DECREMENT:
            count--;
            break;
    }
    return count;
}