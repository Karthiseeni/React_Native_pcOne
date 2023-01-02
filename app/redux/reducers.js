import { MOBILE_NUMBER } from "./action";

const initalState = {
    mobileNumber: ''
}

export default function userReducer(state = initalState, action) {
    switch (action.type) {
        case MOBILE_NUMBER:
            return { ...state, mobileNumber: action.payload }
        default:
            return state;
    }
}