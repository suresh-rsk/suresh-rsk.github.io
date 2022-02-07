export const add=(props)=>{
    return (dispatch)=>{
        dispatch({
            type:"add",
            payload:props
        })
    }
}

export const remove=(props)=>{
    return (dispatch)=>{
        dispatch({
            type:"remove",
            payload:props
        })
    }
}

export const complete=(props)=>{
    return (dispatch)=>{
        dispatch({
            type:"complete",
            payload:props
        })
    }
}

