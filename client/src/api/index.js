import axios from 'axios';
const url = 'https://labrecruit.herokuapp.com/'
//https is very important, because if you make request to change something through a http protocol (unsecure network) then your request 
// could be blocked.
//Reponse data coming from getHomePage Funtion from our server side.
export const fetchUsers = (page,filterVars) => axios.get(url+`volunteerSection/homePage?page=${page}&helper=${filterVars.helper}&raj_mistri=${filterVars.raj_mistri}&labour=${filterVars.labour}&painter=${filterVars.painter}&welder=${filterVars.welder}&tileGraniteWorkers=${filterVars.tileGraniteWorkers}`)
//Send data to server-side
export const createUser = (newUserData) => axios.post(url+'volunteerSection/newUser',newUserData)
//Create new Volunteer
export const createVolunteer = (newVolunteer) => axios.post(url+'volunteerSection/newVolunteer',newVolunteer)