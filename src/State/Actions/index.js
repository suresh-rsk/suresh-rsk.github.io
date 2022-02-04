export const add=(props)=>{
    return (dispatch)=>{
        dispatch({
            type:"add",
            payload:props
        })
    }
}

export const remove=()=>{
    return (dispatch)=>{
        dispatch({
            type:"remove"
        })
    }
}