import './styles.css'
import {useState, useRef, useEffect} from 'react'
import {bindActionCreators} from 'redux'
import {useDispatch} from 'react-redux'
import { Actions } from '../State/index'


const Control=()=>{
    const input=useRef(null);
    useEffect(() => {
        input.current.focus();
      },[])

    const dispatch=useDispatch();
    const {add}=bindActionCreators(Actions,dispatch)


    let [items, setItems] = useState({})
    let {heading="", description="", style=""}=items;
    style={background:"rgb(33, 80, 112)"}
    
    
    const onChangeHandler=(e)=>{
        e.preventDefault();
        setItems({
            ...items,style, [e.target.name]:e.target.value
        })
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        add(items)
        setItems(heading="", description="",style={background:"rgb(33, 80, 112)"})
        input.current.focus();
    }

    return(
        <div >
            <form className="nav" >
            <h3>Name</h3>       <input value={heading} maxLength={60}  ref={input} required
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
            </form>
        </div>
    )
}

export default Control;