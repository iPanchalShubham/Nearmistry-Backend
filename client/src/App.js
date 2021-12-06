import './App.css';
import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Form from './components/form/form'
import Users from './components/users/users.jsx'
import {getUsers} from './actions/actions.js';
import PrimarySearchAppBar from './components/navbar/navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import LinearBuffer from './components/progress/progress'
import NewVolunteerReg from './VolunteerRegistration/newVolunteerReg';
import StickyFooter from './components/footer/footer';
const App = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsers())
  },[dispatch,])
  const state = useSelector(state => state.users)
  return (
    <Router>
    <div className="App">
    <Routes>
<Route path='/' element = { <div>
  <PrimarySearchAppBar/>
  <div style = {{marginTop:'15px'}} >{<Users/>}</div>
</div> }> </Route>
<Route path = "/iVolunteer" element = { <Form/>}/>
  <Route path = "/VolunteerRegistration" element = {<NewVolunteerReg/>} />
    </Routes>
    </div>
    <StickyFooter/>
</Router>
  );
}

export default App;
