import './styles.css'
import {useSelector,useDispatch} from 'react-redux'
import { Actions } from '../State';
import { bindActionCreators } from 'redux';

const ListItem=(props)=>{

    const dispatch=useDispatch();
    const {add, remove}=bindActionCreators(Actions,dispatch)

    const DeleteHandler=(head)=>{
        remove(head)
    }

    console.log(props.props.heading)
    return(
        <div className='list-item'>
            <div className='content'>
                <h3>{props.props.heading}</h3>
                <p>{props.props.description}</p>
            </div>
            <div className='buttons'>
                <button id="complete" >	&#10004;</button>
                <button id='delete' onClick={()=>DeleteHandler(props.props.heading)}>X</button>
            </div>
        </div>
    )
}

export default ListItem;