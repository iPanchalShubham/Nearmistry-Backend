import React,{useState,useEffect} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Typography } from "@mui/material";

const fullInfoModel = ({posts}) => {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
 
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
        <img
      style={{ maxWidth: "100%", maxHeight: "100%" }}
      src={posts?.selectedFile}
      alt="image"
    />
    <div>
        <Typography component="h5" variant="h5">
            {`${posts?.fName.charAt(0).toUpperCase()+ posts?.fName?.slice(1)} ${posts?.lName?posts?.lName.charAt(0).toUpperCase() + posts?.lName?.slice(1):''}`}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Occupation: 
            {`${posts?.occupation?.charAt(0).toUpperCase()+ posts?.occupation?.slice(1)}`} 
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Age: 
             {posts?.age}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            Gender:
              {posts?.gender}
          </Typography>
    </div>
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
