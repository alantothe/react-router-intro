
import './App.css';
import NavBar from "./Components/NavBar"
import {Outlet} from 'react-router-dom'


const App = () => {


  return (
  <div className="App-header">
  <NavBar/>
  <Outlet/>

  </div>
  );
  }


export default App;
