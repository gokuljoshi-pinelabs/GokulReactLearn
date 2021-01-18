import { Link,Switch, BrowserRouter as Router,Route  } from 'react-router-dom';
import './App.css';
import {Userform} from './components/userform/userform'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      {/* example 1 */}
<Router><nav>
        <ul>
          <li>
            <Link to='home'>Home</Link>
          </li>
          <li>
            <Link to='Userform1'>Userform</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/Userform1'>
          <Userform></Userform>
        </Route>
      </Switch>
      </Router>
      
     {/* <input></input>
     <input></input>
     <input></input>
     <input></input>
     <input></input>
     <input></input> */}
    
     {/* <Userform label='Second Name' color='green'></Userform>
     <Userform></Userform> */}

{/* <Userform label='First Name' color='cyan'></Userform> */}
    </div>
  );
}

export default App;
