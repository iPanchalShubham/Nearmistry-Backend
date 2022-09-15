import express from 'express'
import {getProfessional} from '../controllers/controllers.js'
import {postNewUser} from '../controllers/controllers.js'
import { getInfo } from '../controllers/controllers.js';
import { listNewBusiness } from '../controllers/controllers.js';
//Router 
const router = express.Router();
router.post('/newUser',postNewUser)

router.post('/newBusiness',listNewBusiness)
// router.post('/newVolunteer',postNewVolunteer)

router.get('/homePage/getInfo',getInfo)
router.get('/homePage',getProfessional)
export default router
