import './App.css';
import {Userform} from './components/userform/userform'

function App() {
  return (
    <div className="App">
     {/* <input></input>
     <input></input>
     <input></input>
     <input></input>
     <input></input>
     <input></input> */}
     <Userform label='First Name' color='cyan'></Userform>
     {/* <Userform label='Second Name' color='green'></Userform>
     <Userform></Userform> */}
    </div>
  );
}

export default App;
