import axios from 'axios';
const url = 'https://labrecruit.herokuapp.com/'

//Reponse data coming from getHomePage Funtion from our server side.
export const fetchUsers = () => axios.get(url+'homePage')
//Send data to server-side
export const createUser = (newUserData) => axios.post(url+'newUser',newUserData)
//Create new Volunteer
export const createVolunteer = (newVolunteer) => axios.post(url+'newVolunteer',newVolunteer)