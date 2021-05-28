import { showName } from "../action-types/action-types"

const initialState = {
    userName: "Tater-tot",
}

const rootReducer = ((state = initialState) => {
    // switch(action.type) {
    //     case showName: 
    //         return { ...state, userName:  state.userName };
    //     default:
    //         return state;
    // }
    return state;
})

export default rootReducer;