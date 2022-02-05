import './styles.css'
import {useState} from 'react'
import {bindActionCreators} from 'redux'
import {useDispatch, useSelector} from 'react-redux'
import { Actions } from '../State/index'



const Control=()=>{

    const todo=useSelector((state)=>state.List);
    const dispatch=useDispatch();
    const {add, remove}=bindActionCreators(Actions,dispatch)


    let [items, setItems] = useState({})
    let {heading="", description=""}=items;
    
    const onChangeHandler=(e)=>{
        e.preventDefault();
        setItems({
            ...items, [e.target.name]:e.target.value
        })
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        add(items)
        setItems(heading="", description="")
    }

    
    return(
        <div className="nav">
            
            <h3>Name</h3>       <input value={heading} maxLength={60}
                                onChange={(e)=>{onChangeHandler(e)}}
                                type="text"
                                id="heading"
                                name="heading"/>
            <h3>Description</h3><input maxLength={150} value={description} 
                                onChange={(e)=>{onChangeHandler(e)}}
                                type="text" 
                                id="description" 
                                name="description"/>
            <button id="add" onClick={(e)=>{onSubmitHandler(e)}}>Add</button>
        </div>
    )
}

export default Control;