import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";
import FullInfoModel from '../../modal/full_info_model'
const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: 338,
      height: 202,
      margin: "auto",
      padding: 10,
    },
    details: {
      display: "flex",
      flexDirection: "column",
      justifyItems: "space-between",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      borderRadius: 5,
      width: 155,
    },
    knowMore: {
      fontSize: 11,
    },
    knowMoreBox:{
      marginBottom:11
    },
   
  })
);

const User = ({ User_details }) => {
  const classes = useStyles();
 const lastName  = User_details?.lName.split('')
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}

        image={User_details?.resizedBase64}
        title={`${User_details.fName} ${User_details?.lName}`}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {`${User_details.fName.charAt(0).toUpperCase()+User_details.fName.slice(1)} ${lastName[0]?lastName[0]?.toUpperCase():''}`}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Occupation: {`${User_details.occupation.charAt(0).toUpperCase()+User_details.occupation.slice(1)}`}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Age: {User_details.age}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            Gender: {User_details.gender}
          </Typography>
            <Button style={{padding:0,margin:0}} >
          <FullInfoModel style={{padding:0}} posts = {User_details} color = 'primary'/>
            </Button>
            <Button  variant="outlined" size="small" color="primary" className={classes.callNow}>
              <PhoneIcon fontSize="small" color="primary" /><a style = {{textDecoration:'none'}} href= {`tel:${User_details.phoneNumber}`}> Call Now</a>
            </Button>
        </CardContent>
      </div>
    </Card>
  );
};
export default User;
