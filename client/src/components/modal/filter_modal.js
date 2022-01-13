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
import Form from "../form/form.js";
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

  const [filterVariables,setFilterVariables] = useState({painter:'Painter',labour:'Labour',raj_mistry:'Raj Mistry',helper:'Helper',welder:"Welder",tileGraniteWorkers:"Tile Granite worker"})
  const [checkVar,setCheckVar] = useState({painter:true,helper:true,labour:true,raj_mistry:true,welder:true,tileGraniteWorkers:true})
  
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
    setCheckVar({...checkVar,[e.target.name]:!checkVar.raj_mistry})
  }
  const handleWeldVars = (e)=>{
    setFilterVariables({...filterVariables,[e.target.name]:e.target.value})
    setCheckVar({...checkVar,[e.target.name]:!checkVar.welder})
  }
  const handleTileGraniteWorkersVars = (e)=>{
    setFilterVariables({...filterVariables,[e.target.name]:e.target.value})
    setCheckVar({...checkVar,[e.target.name]:!checkVar.tileGraniteWorkers})
  }
  console.log(filterVariables,checkVar)
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
      checked = {checkVar.raj_mistry}
      name="raj_mistry"
      value = {!checkVar.raj_mistri?'Raj Mistry':''}
      color="primary"
    />
  }
  label="Raj Mistry"
/>
<FormControlLabel
  control={
    <Checkbox
    onChange={(e) => handleWeldVars(e)}
      checked = {checkVar.welder}
      name="welder"
      value = {!checkVar.welder?'Welder':''}
      color="primary"
    />
  }
  label="Welder"
/>
<FormControlLabel
control={
  <Checkbox
  onChange = {(e)=>handleTileGraniteWorkersVars(e)}
  checked = {checkVar.tileGraniteWorkers}
  name="tile_granite"
  value={!checkVar.tileGraniteWorkers?'Tile Granite worker':''}
  color="primary"
  />
}
label = "Tile Granite workers"
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
