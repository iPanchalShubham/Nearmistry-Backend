import { User } from "../models/items_model.js";
import { Businesses } from "../models/business_model.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

//FETCH ITEMS
export const getProfessional = async (req, res) => {
  const { page } = req.query;
  const { occupation } = req.query;

  const { lat } = req.query;
  const { lng } = req.query;
  try {
    const LIMIT = 9;
    const itemsToSkip = (Number(page) - 1) * LIMIT;
    // ###################################################################GEOJSO ##################################################

    /*
        $near "sorts" the results to return, and that is always going to take more time than not sorting. So it depends on what you want. If "order" of "nearest" is important, then you use $near. If it is not, then use $geoWithin and a plain definition of a circle. Which is the only polygon the two share in common.
        */
    // const total = await User.countDocuments({
    //   $and: [
    //     {
    //       occupation: {
    //         $in: [
    //           `${labour}`,
    //           `${painter}`,
    //           `${helper}`,
    //           `${raj_mistri}`,
    //           `${welder}`,
    //           `${tileGraniteWorkers},`,
    //           `${occupation}`,
    //         ],
    //       },
    //     },
    // {
    //   location: {
    //     $geoWithin: {
    //       $centerSphere: [[`${lat}`, `${lng}`], 4.3496],
    //       //   quering documents that lies within the 4.3496 miles or 7.4 km radius with respect to the user's location i.e (lat,lng)
    //     },
    //   },
    // },
    //   ],
    // });
    // ########################################GEOJSON############

    // ########################################GEOJSON############

    // const items = await User.find({
    //   occupation: {
    //     $and: [
    //       {
    //         occupation: {
    //           $in: [
    //             `${labour}`,
    //             `${painter}`,
    //             `${helper}`,
    //             `${raj_mistri}`,
    //             `${welder}`,
    //             `${tileGraniteWorkers},`,
    //             `${occupation}`,
    //           ],
    //         },
    //       },
    // {
    //   location: {
    //     $geoWithin: {
    //       /*FUN FACT: LONGITUDE COMES FIRST IN A GEOJSON COORDINATE ARRAY SCHEMA NOT LATITUDE :)*/
    //       $centerSphere: [[`${lng}`, `${lat}`], 4.3496],
    //       //   quering documents that lies within the 4.3496 miles or 7.4 km radius with respect to the user's location i.e (lat,lng)
    //     },
    //   },
    // },
    //     ],
    //   },
    // })
    // ##################################GEOJSON#########################################
    let total;
    let items;
    if(occupation == 'Tile Granite'|occupation == 'Labour contractor(Thekedaar)'|occupation == 'Wood works'|occupation == 'Welding'|occupation == 'Electrical'|occupation == 'Painter contractor(Thekedaar)'|occupation == 'Sanitary'|occupation == 'Paints'|occupation == 'Tile Granite contractor(Thekedaar)'|occupation == 'Building material'){
       total = await Businesses.countDocuments({
        occupation: {
          $in: [
            `${occupation}`,
          ],
        },
      });
       items = await Businesses.find({
        occupation: {
          $in: [
            `${occupation}`,
          ],
        },
      })
        .limit(LIMIT)
        .skip(itemsToSkip);
    }else{
       total = await User.countDocuments({
        occupation: {
          $in: [
            `${occupation}`,
          ],
        },
      });
       items = await User.find({
        occupation: {
          $in: [
            `${occupation}`,
          ],
        },
      })
        .limit(LIMIT)
        .skip(itemsToSkip);
    }
    
    res.json({
      data: items,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (e) {
    console.log(e.message);
  }
};

// This function sends this "{occupation:"Labour",numberOfPages:Math.ceil(total/LIMIT)}" type of data

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
    const totalElectrician = await User.countDocuments({
      occupation: { $in: ["Electrician"] },
    });
    const totalMaid = await User.countDocuments({
      occupation: { $in: ["Maid"] },
    });
    const totalPlumber = await User.countDocuments({
      occupation: { $in: ["Plumber"] },
    });
    const totalWelder = await User.countDocuments({
      occupation: { $in: ["Welder"] },
    });
    const totalCarpenter = await User.countDocuments({
      occupation: { $in: ["Carpenter"] },
    });
    const totalPainter = await User.countDocuments({
      occupation: { $in: ["Painter"] },
    });
    const totalTileGraniteShops = await Businesses.countDocuments({
      occupation: { $in: ["Tile Granite"] },
    });
    const totalWoodWorks = await Businesses.countDocuments({
      occupation: { $in: ["Wood works"] },
    });
    const totalLabourContractor = await Businesses.countDocuments({
      occupation: { $in: ["Labour contractor(Thekedaar)"] },
    }); 
    const totalWeldingShops = await Businesses.countDocuments({
      occupation: { $in: ["Welding"] },
    }); 
    const totalElectricalShops = await Businesses.countDocuments({
      occupation: { $in: ["Electrical"] },
    }); 
    const totalPainterContractor = await Businesses.countDocuments({
      occupation: { $in: ["Painter contractor(Thekedaar)"] },
    }); 
    const totalSanitaryShops = await Businesses.countDocuments({
      occupation: { $in: ["Sanitary"] },
    }); 
    const totalPaintShops = await Businesses.countDocuments({
      occupation: { $in: ["Paints"] },
    }); 
    const totalTileGraniteContractor = await Businesses.countDocuments({
      occupation: { $in: ["Tile Granite contractor(Thekedaar)"] },
    }); 
    const totalBuildingMaterialShops = await Businesses.countDocuments({
      occupation: { $in: ["Building material"] },
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
      {
        occupation: "Electrician",
        numberOfPages: Math.ceil(totalElectrician / LIMIT),
      },
      {
        occupation: "Maid",
        numberOfPages: Math.ceil(totalMaid / LIMIT),
      },
      {
        occupation: "Plumber",
        numberOfPages: Math.ceil(totalPlumber / LIMIT),
      },
      {
        occupation: "Welder",
        numberOfPages: Math.ceil(totalWelder / LIMIT),
      },
      {
        occupation: "Carpenter",
        numberOfPages: Math.ceil(totalCarpenter / LIMIT),
      },
      {
        occupation: "Painter",
        numberOfPages: Math.ceil(totalPainter / LIMIT),
      },
      // Businesses
      {
        occupation: "Tile Granite",
        numberOfPages: Math.ceil(totalTileGraniteShops / LIMIT),
      }
      ,
      {
        occupation: "Wood works",
        numberOfPages: Math.ceil(totalWoodWorks / LIMIT),
      },
      {
        occupation: "Labour contractor(Thekedaar)",
        numberOfPages: Math.ceil(totalLabourContractor / LIMIT),
      },
      {
        occupation: "Welding",
        numberOfPages: Math.ceil(totalWeldingShops / LIMIT),
      },
      {
        occupation: "Electrical",
        numberOfPages: Math.ceil(totalElectricalShops / LIMIT),
      },
      {
        occupation: "Painter contractor(Thekedaar)",
        numberOfPages: Math.ceil(totalPainterContractor / LIMIT),
      },
      {
        occupation: "Sanitary",
        numberOfPages: Math.ceil(totalSanitaryShops / LIMIT),
      },
      {
        occupation: "Tile Granite contractor(Thekedaar)",
        numberOfPages: Math.ceil(totalTileGraniteContractor / LIMIT),
      },
      {
        occupation: "Building material",
        numberOfPages: Math.ceil(totalBuildingMaterialShops / LIMIT),
      },{
        occupation: "Paints",
        numberOfPages: Math.ceil(totalPaintShops / LIMIT),
      }
    ]);
  } catch (e) {
    console.log(e.message);
  }
};

//****POSTING NEW ITEMS****
export const postNewUser = async (req, res) => {
  try {
    const {
      fName,
      lName,
      age,
      gender,
      phoneNumber,
      imgUrlArray,
      occupation,
      areaName,
      location,
      tags
    } = req.body;
    //  If there is any field that's not filled show this alert box.
    //  if(!lName|!age|!gender|!phoneNumber|!imgUrlArray|!occupation|!areaName|!location){
    //      return res.status(400).json({message:"Please fill the required credentials!!"})
    //  }
    const phoneNum = await User.findOne({ phoneNumber: phoneNumber });

    if (phoneNum) {
      return res.status(400).json({ message: "Phone number already in use!" });
    }
    // if(!imgUrlArray){
    //   return res.status(401).json({message:"Please try upload your image"})
    // }
    // if(!areaName){
    //   return res.status(401).json({message:"Fill address again"})
    // }
    /*NOW WE'LL USE CLOUDINARY OR PLATFORMS LIKE S3 FOR IMAGE STORAGE AND WILL NOT USE BASE64 FOR ENCODING OF OUR IMAGE TO SAVE INTO OUR DATABASE */
    //         //Save new user in our database
    const newUser = new User({
      fName,
      lName,
      age,
      gender,
      phoneNumber,
      imgUrlArray,
      occupation,
      areaName,
      location,
      tags
    });

    await newUser.save();
    return res.status(201).json({
      message: "Registration succsessful",
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

/*FUN FACT: LONGITUDE COMES FIRST IN A GEOJSON COORDINATE ARRAY SCHEMA NOT LATITUDE :) */

// ****************************###############################################*************************************########################
// #############################****LIST NEW BUSINESS****###############################################################
export const listNewBusiness = async(req, res) => {
  try {
    const {
      bName,
      bAge,
      phoneNumber,
      occupation,
      imgUrlArray,
      ownerImg,
      areaName,
      location,
      tags,
      address
    } = req.body;
    const newBusiness = new Businesses({
      bName,
      bAge,
      phoneNumber,
      occupation,
      imgUrlArray,
      ownerImg,
      areaName,
      location,
      tags,
      address
    })
    await newBusiness.save();
     res.status(201).json({
      message: "Registration succsessful",
    });
  } catch (error) {
    console.log(error.message)
    res
      .status(400)
      .json({ message: "Something bad happend, please try again." });
  }
};

