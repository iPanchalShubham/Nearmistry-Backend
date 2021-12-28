import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FileBase from 'react-file-base64';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useDispatch } from "react-redux";
import { postUser } from "../../actions/actions.js";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Project ltd.
      </Link>
      { new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.dark,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  marginBot: {
    marginBottom: theme.spacing(1),
  },
  formControl: {
    marginBottom: theme.spacing(0.5),
    marginLeft: theme.spacing(1.7),
    minWidth: 150,
  },fileInput:{
    display:'flex',
    padding:'7px 0px',
    alignItems:'center',
    '& div':{
      marginRight:theme.spacing(3)
    }
  }
}));
const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    fName: "",
    lName: "",
    age: "",
    gender: "",
    phoneNumber: "",
    selectedFile:"",
    occupation:""
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUser(userInfo));
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography  varient = "h5">
          Let's Help.
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              required
                id="input-firstName*"
                label="First name"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, fName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="input-lName"
                label="Last name"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, lName: e.target.value })
                }
              />
            </Grid>
            <Grid
            required
              className={classes.marginBot}
              container
              spacing={1}
              alignItems="flex-end"
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  id="input-phoneNumber"
                  label="Phone no."
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phoneNumber: e.target.value })
                  }
                />
              </Grid>
              <FormControl className={classes.formControl}>
                <InputLabel required id="simple-select-label">Occupation</InputLabel>
                <Select
                  labelId="simple-select-label"
                  id="simple-select"
                  defaultValue = {''}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, occupation: e.target.value })
                  }
                >
                  <MenuItem value="Raj mistri">Raj mistri</MenuItem>
                  <MenuItem value="Labour">Labour</MenuItem>
                  <MenuItem value="Painter">Painter</MenuItem>
                  <MenuItem value="Helper">Helper</MenuItem>
                  <MenuItem value="Welder">Welder</MenuItem>
                </Select>
              </FormControl>
              
            
            </Grid>
            <div className={classes.fileInput}>
              <div>
              <FormControl className={classes.formControl}>
                <InputLabel required id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue = {''}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, age: e.target.value })
                  }
                >
                  <MenuItem value="Above 20">Above 20</MenuItem>
                  <MenuItem value="Above 30">Above 30</MenuItem>
                  <MenuItem value="Above 40">Above 40</MenuItem>
                  <MenuItem value="Above 50">Above 50</MenuItem>
                  <MenuItem value="Above 60">Above 60</MenuItem>
                </Select>
              </FormControl>
              </div>
                    <FileBase label = 'file' multiple = {false} onDone = {({base64})=>setUserInfo({...userInfo,selectedFile:base64})}/></div>
                    
            <FormControl className={classes.formControl} component="fieldset">
              <RadioGroup
                row
                aria-label="gender"
                name="gender1"
                  defaultValue = {''}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, gender: e.target.value })
                }
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
           
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            submit
          </Button>
          <Grid container justifyContent="center">
            <Grid item style = {{color:"red"}}>
             <em>NOTE:- This is a volunteer page, for any kinds of illegal, abusive and offensive activities the doer would be punished!</em>
            </Grid>
          </Grid>
          <Typography variant = "h5" color="textPrimary">
            Thank you. ❤️
          </Typography>
          
        </form>
      </div>
    </Container>
  );
};
export default Form;
