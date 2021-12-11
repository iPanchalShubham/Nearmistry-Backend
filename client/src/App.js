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
  console.log("I am from App.jsx " + page)
  useEffect(() => {
    if (page) {
      dispatch(getUsers(page))
    }
  }, [dispatch, page])
console.log(page)
  return (
    <>
    <div className="App">
    <Routes>
<Route path='/items' exact element = { <div>
  <PrimarySearchAppBar/>
  <div style = {{marginTop:'15px'}} >{isLoading?<LinearBuffer/>:<div><Users/><PaginationRounded page = {page}/></div>}</div>
</div> }> </Route>

<Route path='/' exact component= {()=> <Redirect to = "/items"/>}element = { <div>
  <PrimarySearchAppBar/>
  <div style = {{marginTop:'15px'}} >{isLoading?<LinearBuffer/>:<div><Users/><PaginationRounded page = {page}/></div>}</div>
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
