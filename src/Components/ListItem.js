import './styles.css'

const ListItem=(props)=>{
    console.log(props.prop)
    return(
        <div className='list-item'>
            <h3>{props.prop.heading}</h3>
            <h4>{props.prop.description}</h4>
        </div>
    )
}

export default ListItem;