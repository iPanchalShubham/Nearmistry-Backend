import { User } from "../models/items_model.js";
import sharp from "sharp";
import bcrypt from "bcryptjs";
import { Volunteers } from "../models/volunteers_model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// ****************************###############################################*************************************#########################
// #########################################################################################################################################

//****FETCHING NEW ITEMS****
export const getHomePage = async (req, res) => {
  const { page } = req.query;
  const { labour } = req.query;
  const { painter } = req.query;
  const { helper } = req.query;
  const { raj_mistri } = req.query;
  const { welder } = req.query;
  const { tileGraniteWorkers } = req.query;
  const { occupation } = req.query;
  const {lat} = req.query
const {lng} = req.query
  try {
    const LIMIT = 9;
    const itemsToSkip = (Number(page) - 1) * LIMIT;
    /*
        $near "sorts" the results to return, and that is always going to take more time than not sorting. So it depends on what you want. If "order" of "nearest" is important, then you use $near. If it is not, then use $geoWithin and a plain definition of a circle. Which is the only polygon the two share in common.
        */
    const total = await User.countDocuments({
        $and:[
            {
              occupation: {
                $in: [
                  `${labour}`,
                  `${painter}`,
                  `${helper}`,
                  `${raj_mistri}`,
                  `${welder}`,
                  `${tileGraniteWorkers},`,
                  `${occupation}`,
                ],
              },
            },
            {
              location: {
                $geoWithin: {
                  $centerSphere:[[`${lat}`,`${lng}`],4.3496]
                //   quering documents that lies within the 4.3496 miles or 7.4 km radius with respect to the user's location i.e (lat,lng)
                  },
                },
              },
          ]   
    });
    const items = await User.find({
      occupation: {
        $in: [
          `${labour}`,
          `${painter}`,
          `${helper}`,
          `${raj_mistri}`,
          `${welder}`,
          `${tileGraniteWorkers}`,
          `${occupation}`,
        ],
      },
    })
      .limit(LIMIT)
      .skip(itemsToSkip);
    res.json({
      data: items,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (e) {
    console.log(e.message);
  }
};

// ****************************###############################################*************************************########################
// ########################################################################################################################################
// ********\/\/\/\/\/\/\/*********GETTING -----> [occupation:"Labour",numberOfPages:Math.ceil(total/LIMIT)]

export const getInfo = async (_, res) => {
  try {
    const LIMIT = 9;
    const totalLabour = await User.countDocuments({
      occupation: { $in: ["Labour"] },
    });
    const totalTileGraniteWorker = await User.countDocuments({
      occupation: { $in: ["Tile Granite worker"] },
    });
    const totalRaj_mistry = await User.countDocuments({
      occupation: { $in: ["Raj Mistry"] },
    });
    res.json([
      { occupation: "Labour", numberOfPages: Math.ceil(totalLabour / LIMIT) },
      {
        occupation: "Raj Mistry",
        numberOfPages: Math.ceil(totalRaj_mistry / LIMIT),
      },
      {
        occupation: "Tile Granite worker",
        numberOfPages: Math.ceil(totalTileGraniteWorker / LIMIT),
      },
    ]);
  } catch (e) {
    console.log(e.message);
  }
};

// ****************************###############################################*************************************########################
// ########################################################################################################################################
dotenv.config({ path: "../config.env" });
//****POSTING NEW ITEMS****
export const postNewUser = async (req, res) => {
  try {
    const {
      lName,
      fName,
      age,
      gender,
      phoneNumber,
      selectedFile,
      occupation,
      location,
      coordinates,
    } = req.body;
    //  If there is any field that's not filled show this alert box.
     if(!fName|!age|!gender|!phoneNumber|!selectedFile|!occupation){
         return console.log("Please fill the required credidentials!!")
     }
    const phoneNum = await User.findOne({ phoneNumber: phoneNumber });

    if (phoneNum) {
      return console.log(
        "The phone number should be unique,please enter a valid phone number."
      );
    }

/*NOW WE'LL USE CLOUDINARY OR PLATFORMS LIKE S3 FOR IMAGE STORAGE AND WILL NOT USE BASE64 FOR ENCODING OF OUR IMAGE TO SAVE INTO OUR DATABASE */ 
    //         //Save new user in our database
    const newUser = new User({
      fName,
      lName,
      age,
      gender,
      phoneNumber,
      occupation,
      selectedFile,
      location,
      coordinates,
    });

    await newUser.save();
    return res.status(201).json({
      message:"User registration succsessful"
    });

    //     }
    //     ).catch(error => {
    //         // error handeling
    //         res.send(error)
    //     })
  } catch (e) {
    console.log(e);
  }
};

/*FUN FACT: LONGITUDE COMES FIRST IN A GEOJSON COORDINATE ARRAY SCHEMA NOT LATITUDE.  

{ */

// ****************************###############################################*************************************########################
// ########################################################################################################################################

// AUTHENTICATE NEW VOLUNTEERS
export const authenticateVolunteer = async (req, _) => {
  try {
    const { email, password } = req.body;
    if (!email | !password) {
      return console.log("please fill the required fields!");
    }
    const userFound = Volunteers.findOne({ email: email });
    if (userFound) {
      const passwordMatch = bcrypt.compare(password, userFound.password);
      if (passwordMatch) {
        return console.log("Volunteer identified!");
      } else {
        return console.log("Invalid creds!");
      }
    } else {
      return console.log("Invalid creds!");
    }
  } catch (error) {
    return console.log(error);
  }
};

// ****************************###############################################*************************************########################
// ########################################################################################################################################

// REGISTER NEW VOLUNTEERS
export const postNewVolunteer = async (req, _) => {
  try {
    const { fName, lName, email, password, passwordConfirm } = req.body;
    if (!fName | !lName | !email | !password | !passwordConfirm) {
      return console.log("Please fill the required fields!");
    }

    const emailFound = await Volunteers.findOne({ email: email });
    const confirmationCode = jwt.sign({ email: email }, process.env.SECRET);
    if (emailFound) {
      return console.log("email already exists!!");
    } else {
      const volunteer = Volunteers({
        fName,
        lName,
        email,
        password,
        passwordConfirm,
        confirmationCode,
      });
      await volunteer.save();
    }
  } catch (e) {
    console.log(e);
  }
};
