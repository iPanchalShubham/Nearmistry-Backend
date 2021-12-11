import './App.css';
import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Form from './components/form/form'
import Users from './components/users/users.jsx'
import PrimarySearchAppBar from './components/navbar/navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import LinearBuffer from './components/progress/progress'
import NewVolunteerReg from './VolunteerRegistration/newVolunteerReg';
import StickyFooter from './components/footer/footer';
import {getUsers} from './actions/actions.js'
import PaginationRounded from './components/pagination/pagination';
import { useLocation } from 'react-router-dom';
const App = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.users)
  const query = useQuery()
  const page = query.get('page') || 1;
  const helper = query.get('helper')||'';

  const filterVars = useSelector(state => state.filterVariables)
  useEffect(() => {
    if (page,filterVars) {
      dispatch(getUsers(page,filterVars))
    }
  }, [dispatch, page,filterVars])

  return (
    <>
    <div className="App">
    <Routes>
<Route  path='/items' exact element = { <div>
  <PrimarySearchAppBar/>
  <div style = {{margin:'15px 0px',minHeight:"85vh"}} >{isLoading?<LinearBuffer/>:<div><Users/></div>}</div>
  <PaginationRounded page = {page}/>
</div> }> </Route>

<Route path='/' exact component= {()=> <Redirect to = "/items"/>}element = { <div>
  <PrimarySearchAppBar/>
  <div style = {{margin:'15px 0px',minHeight:"85vh"}} >{isLoading?<LinearBuffer/>:<div><Users/></div>}</div>
  <PaginationRounded page = {page}/>
</div> }> </Route>

<Route path = "/iVolunteer" element = { <Form/>}/>
  <Route path = "/VolunteerRegistration" element = {<NewVolunteerReg/>} />
    </Routes>
    </div>
    <StickyFooter/>
</>
  );
}

export default App;
