
let initialState=[];
const ListReducer=(state=initialState, action)=>{
    switch(action.type){
        case "add":
            // state.push(action.payload);
            return [...state,action.payload];
        case "remove":{
            let i=state.length;
            console.log(i, typeof(state))
            for(i;i>0;i--){
                console.log(state[i-1], action.payload, state);
                if(state[i-1].heading==action.payload)
                    delete state[i-1]
            }
            console.log(state);

            return state
        }

        default:
            return state;
    }
}

export default ListReducer;