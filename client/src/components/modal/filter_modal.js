import React,{useState,useEffect} from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FilterListIcon from "@material-ui/icons/FilterList";
import { useDispatch } from "react-redux";
import {sendFilterVariables} from "../../actions/actions.js"
import FormControlLabel from '@material-ui/core/FormControlLabel';
const FormDialog = () => {
const dispatch = useDispatch()
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };
  
  const handleFilterVariables = () => {
    setOpen(!open);
    dispatch(sendFilterVariables(filterVariables))
  };

  const [filterVariables,setFilterVariables] = useState({painter:'Painter',labour:'Labour',raj_mistri:'Raj mistri',helper:'Helper'})
  const [checkVar,setCheckVar] = useState({painter:true,helper:true,labour:true,raj_mistri:true,})
  
  const handlePaintVars = (e)=>{
    setFilterVariables({...filterVariables,[e.target.name]:e.target.value})
    setCheckVar({...checkVar,[e.target.name]:!checkVar.painter})
  }
  const handleLabVars = (e)=>{
    setFilterVariables({...filterVariables,[e.target.name]:e.target.value})
    setCheckVar({...checkVar,[e.target.name]:!checkVar.labour})
  }
  const handleHelpVars = (e)=>{
    setFilterVariables({...filterVariables,[e.target.name]:e.target.value})
    setCheckVar({...checkVar,[e.target.name]:!checkVar.helper})
  }
  const handleRajVars = (e)=>{
    setFilterVariables({...filterVariables,[e.target.name]:e.target.value})
    setCheckVar({...checkVar,[e.target.name]:!checkVar.raj_mistri})
  }
  
  return (
    <div>
      <Button style={{ color: "white" }} size="large" onClick={handleClickOpen}>
        <FilterListIcon />
        Filter
        </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        disablePortal = {true}
        disableScrollLock={ true }
      >
        <DialogTitle id="form-dialog-title">Filter</DialogTitle>
        <DialogContent>
          <FormControlLabel
        control={
          <Checkbox
          onChange = {(e) => handlePaintVars(e)}
           checked = {checkVar.painter}
           value ={!checkVar.painter?"Painter":''}          
            name="painter"
            color="primary"
          />
        }
        label="Painter"
      />
       <FormControlLabel
      control={
        <Checkbox
          onChange={(e) => handleLabVars(e)}
          checked = {checkVar.labour}
          value = {!checkVar.labour?'Labour':''}
          name="labour"
          color="primary"
        />
      }
      label="Labour"
    /> <FormControlLabel
    control={
      <Checkbox
      onChange={(e) => handleHelpVars(e)}
        checked = {checkVar.helper}
        name="helper"
        value = {!checkVar.helper?'Helper':''}
        color="primary"
      />
    }
    label="Helper"
  /><FormControlLabel
  control={
    <Checkbox
    onChange={(e) => handleRajVars(e)}
      checked = {checkVar.raj_mistri}
      name="raj_mistri"
      value = {!checkVar.raj_mistri?'Raj mistri':''}
      color="primary"
    />
  }
  label="Raj mistri"
/>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick = {handleFilterVariables}  color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default FormDialog;
