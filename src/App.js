import './App.css';
import Header from './Components/Header';
import Control from './Components/Control';
import ListItem from './Components/ListItem';
import {useSelector} from 'react-redux'

function App() {

  let todo=useSelector((state)=>state.List);
  
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
