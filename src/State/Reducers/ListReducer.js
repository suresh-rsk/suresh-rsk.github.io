
let initialState=[];
const ListReducer=(state=initialState, action)=>{

    switch(action.type){
        case "add":
            return [action.payload,...state];
        case "remove":{
            if(localStorage.length===1){localStorage.removeItem('data')}
            return state.filter(value=>value.heading!==action.payload)
        }
        case "complete":
            {
                let copy=state.slice()
                let filtered=copy.filter(value=>value.heading===action.payload)[0]
                filtered.style={background:"rgb(9, 184, 3)"}
                copy.push(...copy.splice(copy.indexOf(filtered),1))
                return copy
            }

        default:
            return state;
    }
}

export default ListReducer;