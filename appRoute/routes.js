import express from 'express'
import {getHomePage} from '../controllers/controllers.js'
import {postNewUser} from '../controllers/controllers.js'
import { postNewVolunteer } from '../controllers/controllers.js';
import { getInfo } from '../controllers/controllers.js';
//Router 
const router = express.Router();

router.get('/homePage',getHomePage)
router.post('/newUser',postNewUser)
router.post('/newVolunteer',postNewVolunteer)
router.get('/homePage/getInfo',getInfo)
export default router
