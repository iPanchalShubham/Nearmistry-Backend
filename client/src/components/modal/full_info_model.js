import React,{useState,useEffect} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector } from "react-redux";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Typography } from "@mui/material";

const fullInfoModel = () => {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const User_details =  useSelector(state => state.users)
  
  return (
    <div>
        <Button onClick={handleClickOpen}>
        <MoreHorizIcon/>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Full-information</DialogTitle>
        <DialogContent>
        <Typography component="h5" variant="h5">
            {/* {`${User_details.fName?.charAt(0).toUpperCase()+User_details.fName.slice(1)} ${lastName[0]?lastName[0]?.toUpperCase():''}`} */}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Occupation: 
            {/* {`${User_details.occupation?.charAt(0).toUpperCase()+User_details.occupation?.slice(1)}`} */}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Age: 
            {/* {User_details.age} */}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            Gender:
             {/* {User_details.gender} */}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default fullInfoModel;
