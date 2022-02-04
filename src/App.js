import './App.css';
import Header from './Components/Header';
import Control from './Components/Control';
import ListItem from './Components/ListItem';
import {bindActionCreators} from 'redux'
import {useDispatch, useSelector} from 'react-redux'
import { Actions } from './State';
import { Store } from './State';


function App() {

  let todo=useSelector((state)=>state.List);
  todo=[{heading:"adfwr",description:"erfwqrekl"}]

  return (
    <div className="App">
      <Header/>
      <div className="box">
          <Control/>
          {todo.map((i,k)=>{
            <ListItem key={k} props={i}/>
          })}
      </div>
      
    </div>
  );
}

export default App;
