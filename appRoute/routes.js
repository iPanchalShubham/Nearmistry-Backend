import express from 'express'
import {getHomePage} from '../controllers/controllers.js'
import {postNewUser} from '../controllers/controllers.js'
import { postNewVolunteer } from '../controllers/controllers.js';
//Router 
const router = express.Router();

router.get('/',getHomePage)
router.post('/newUser',postNewUser)
router.post('/newVolunteer',postNewVolunteer)

export default router
