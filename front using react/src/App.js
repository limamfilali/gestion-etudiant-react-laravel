import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route ,Switch } from 'react-router-dom'
import axios from 'axios';
import Navbar from './Component/Navbar';
import ViewStudent from './Component/ViewStudent';
import AddStudent from './Component/AddStudent';
import EditStudent from './Component/EditStudent';
import Home from './Component/Home';

axios.defaults.baseURL= "http://localhost:8000/";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/students" component={ViewStudent} />
          <Route path="/add-student" component={AddStudent} />
          <Route path="/edit-student/:id" component={EditStudent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
