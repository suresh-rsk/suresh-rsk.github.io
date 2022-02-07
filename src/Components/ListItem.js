import './styles.css'
import {useDispatch} from 'react-redux'
import { Actions } from '../State';
import { bindActionCreators } from 'redux';

const ListItem=(props)=>{


    const dispatch=useDispatch();
    const {remove, complete}=bindActionCreators(Actions,dispatch)

    const DeleteHandler=(head)=>{
        remove(head)

    }
    const CompleteHandler=(head)=>{
        complete(head)
    }

    return(
        <div className='list-item' style={props.props.style}>
            <div className='content'>
                <h3>{props.props.heading}</h3>
                <p>{props.props.description}</p>
            </div>
            <div className='buttons'>
                <button id="complete" onClick={()=>CompleteHandler(props.props.heading)}>&#10004;</button>
                <button id='delete' onClick={()=>DeleteHandler(props.props.heading)}>X</button>
            </div>
        </div>
    )
}

export default ListItem;