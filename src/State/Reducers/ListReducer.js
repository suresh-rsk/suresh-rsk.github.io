
let initialState=[];
const ListReducer=(state=initialState, action)=>{
    switch(action.type){
        case "add":
            return [...state,action.payload]
        case "remove":
            return state.pop;
        default:
            return state;
    }
}

export default ListReducer;