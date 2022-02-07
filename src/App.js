import './App.css';
import Header from './Components/Header';
import Control from './Components/Control';
import ListItem from './Components/ListItem';
import {useDispatch, useSelector} from 'react-redux';
import { Actions } from './State';
import {bindActionCreators} from 'redux'

function App() {

  let Dispatch=useDispatch();
  const {add}=bindActionCreators(Actions,Dispatch)
  let todo=useSelector((state)=>state.List);


  let todoCopy=todo.slice()
  if(todo.length===0){
    if(localStorage.getItem('data')){
      todo=JSON.parse(localStorage.getItem('data'))
      todo.map(a=>add(a))
    }
  }
  
  
  if(todo!==todoCopy){
    localStorage.setItem("data",JSON.stringify(todo))
  }
  return (
    <div className="App">
      <Header/>
      <div className="box">
          <Control/>
          {
          (todo.length>0)?
          todo.map((i)=>{return(<ListItem key={i.heading} props={i}/>)})
          :<br/>
           }
      </div>
      
    </div>
  );
}


export default App;
