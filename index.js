import express from "express";
import routes from "./appRoute/routes.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
//DOTENV
dotenv.config({ path: "./.env" });


//Middleware Routes
app.use(cors({
  origin:["https://nearmistry.com","http://localhost:3000"]
}));

//JSON parser
app.use(express.json({ limit: "5mb" }));

// Connection to DB
// const db ; //Put your db string here
mongoose
  .connect(process.env.MONGODB_URI , {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
      console.log("Wait....\n Handshake confirmed.");
    
  })
  .catch((e) => console.log(e));
app.use("/volunteerSection", routes);
if (process.env.NODE_ENV == "production") {
  app.use("/volunteerSection", routes);
}
app.listen(process.env.PORT || 5000, () =>
  console.log(`Application Running on port ${process.env.PORT || 5000}`)
);
