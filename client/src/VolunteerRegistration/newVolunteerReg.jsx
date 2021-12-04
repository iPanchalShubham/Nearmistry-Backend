import React from "react";
import { useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";
import { sendVolunData } from "../actions/actions";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles"
import { useDispatch } from "react-redux";

const orange = "#F2A74B";
const textLight = "#eaf2f4";
const textDark = "#0D0D0D";
const borderLight = "rgba(206,212,218, .993)";

const useStyles = makeStyles((theme) => ({
  mainSome: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    display: "block",
    width: "auto",
    [theme.breakpoints.up(400 + theme.spacing(2))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    position: "relative",
    marginTop: theme.spacing(2),
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    position: "relative",
    backgroundColor: theme.palette.info.dark,
    
  },

  icon: {
    width: "80px",
    height: "80px",
    color: "rgba(131,153,167,0.79)"
  },
  
  form: {
    margin: theme.spacing(4)
  },
  labels: {
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    fontSize: "12px",
    lineHeight: "5px",
    fontFamily: "fantasy",
    fontWeight: 300,
    opacity: 0.45,
    color: `${textDark} !important`
  },
  
  inputs: {
    position: "relative",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontFamily: "icon",
    color: textDark,
    fontSize: "14px",
    padding: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
    borderRadius: "8px",
    border: "1.4px solid",
    boxShadow: "1px 2px 20px rgba(169,198,217,0.29457423) ",
    borderColor: borderLight,
    
  },
  
  button: {
    color: "#fff",
    background: "#3f51b5",
    position: "relative",
    fontWeight: 400,
    fontFamily: "Raleway, sans-serif",
    overflow: "hidden",
    marginTop: theme.spacing(6),
    padding: `${theme.spacing(1.6)}px`,
    border: "none",
    borderRadius: "8px",
    letterSpacing: "3px",
    
    "&::before, &::after": {
      position: "absolute",
      content: '""',
      boxSizing: "border-box",
      borderRadius: "8px",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 1
    },
    "&::before": {
      borderBottom: "2px solid rgba(255,255,255,.58)",
      borderTop: "2px solid rgba(255,255,255,.58)",
      transform: "scale(0,1)"
    },
    "&::after": {
      borderLeft: "3px solid rgba(255,255,255,.58)",
      borderRight: "3px solid rgba(255,255,255,.58)",
      transform: "scale(1,0)"
    },
    "&:hover::before": {
      transform: "scale(1,1)",
      transition: "transform cubic-bezier(0.85,.36,.8,.42) 0.3s"
    },
    "&:hover::after": {
      transform: "scale(1,1)",
      transition: "transform cubic-bezier(0.85,.36,.8,.42) .2s"
    },
    "&::first-letter": {
      color: orange
    },
    "&:hover": {
      background: "rgb(55 5 255)",
      color: textLight
    }
  },
  error: {
    border: `1.2px solid ${red[900]}`,
    background: "rgba(169,198,217,0.29457423)",
    color: red[900],
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Raleway, sans-serif",
    display: "flex",
    alignItems: "center",
    paddingBottom: theme.spacing(3)
  },
  
  passwordEye: {
    color: "rgba(131,153,167,0.9)",
    opacity: 0.7
  }
}));

const Registration = () => {
  const [state,setState] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    fName:"",
    lName:"",
    hidePassword: true,
    error: null,
    errorOpen: false
  }) ;
  const  dispatch = useDispatch()
  
  const errorClose = e => {
    setState({
      ...state,errorOpen: false
    });
  };

  const passwordMatch = () => state.password === state.passwordConfirm;

  const showPassword = () => {
    setState(prevState => ({ ...state,hidePassword: !prevState.hidePassword }));
  };

  const isValid = () => {
    if (state.email === "") {
      return false;
    }
    return true;
  };
  
  const submitRegistration = e => {
    e.preventDefault();
    if (!passwordMatch()) {
      return setState({
        ...state,errorOpen: true,
        error: "Passwords don't match"
      });
    }
    console.log("this.props.newUserCredentials", {...state});
    //dispath to userActions
    dispatch(sendVolunData({...state}))
  };

    const classes  = useStyles();
    return (
      <div className={classes.mainSome}>
        <CssBaseline />

        <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography variant = "h5" >
          Create your account
        </Typography>
          <form
            className={classes.form}
            onSubmit={(e) => submitRegistration(e)}
          >
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="fName" className={classes.labels}>
                firstName
              </InputLabel>
              <Input
                name="fName"
                autoComplete="name"
                className={classes.inputs}
                disableUnderline={true}
                onChange={(e) => setState({...state,fName:e.target.value})}
              />
            </FormControl>
            <FormControl  fullWidth margin="normal">
              <InputLabel htmlFor="lName" className={classes.labels}>
              Lastname
              </InputLabel>
              <Input
                name="lName"
                autoComplete="name"
                className={classes.inputs}
                disableUnderline={true}
                onChange={(e) => setState({...state,lName:e.target.value})}
              />
            </FormControl>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="email" className={classes.labels}>
                e-mail
              </InputLabel>
              <Input
                name="email"
                type="email"
                autoComplete="email"
                className={classes.inputs}
                disableUnderline={true}
                onChange={(e) => setState({...state,email:e.target.value})}
              />
            </FormControl>

            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="password" className={classes.labels}>
                password
              </InputLabel>
              <Input
                name="password"
                autoComplete="password"
                className={classes.inputs}
                disableUnderline={true}
                onChange={(e) => setState({...state,password:e.target.value})}
                type={state.hidePassword ? "password" : "input"}
                endAdornment={
                  state.hidePassword ? (
                    <InputAdornment position="end">
                      <VisibilityOffTwoToneIcon
                        fontSize="medium"
                        className={classes.passwordEye}
                        onClick={() => showPassword()}
                      />
                    </InputAdornment>
                  ) : (
                    <InputAdornment position="end">
                      <VisibilityTwoToneIcon
                        fontSize="medium"
                        className={classes.passwordEye}
                        onClick={() => showPassword()}
                      />
                    </InputAdornment>
                  )
                }
              />
            </FormControl>

            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="passwordConfirm" className={classes.labels}>
                confrim password
              </InputLabel>
              <Input
                name="passwordConfirm"
                autoComplete="passwordConfirm"
                className={classes.inputs}
                disableUnderline={true}
                onChange={(e) => setState({...state,passwordConfirm:e.target.value})}
                type={state.hidePassword ? "password" : "input"}
                endAdornment={
                  state.hidePassword ? (
                    <InputAdornment position="end">
                      <VisibilityOffTwoToneIcon
                        fontSize="medium"
                        className={classes.passwordEye}
                        onClick={() => showPassword()}
                      />
                    </InputAdornment>
                  ) : (
                    <InputAdornment position="end">
                      <VisibilityTwoToneIcon
                        fontSize="medium"
                        className={classes.passwordEye}
                        onClick={() => showPassword()}
                      />
                    </InputAdornment>
                  )
                }
              />
            </FormControl>
            <Button
              disabled={!isValid()}
              disableRipple
              fullWidth
              variant="outlined"
              className={classes.button}
              type="submit"
              onClick={(e) => submitRegistration(e)}
            >
              Join
            </Button>
          </form>

          {state.error ? (
            <Snackbar
              variant="error"
              key={state.error}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              open={state.errorOpen}
              onClose={(e) => errorClose(e)}
              autoHideDuration={3000}
            >
              <SnackbarContent
                className={classes.error}
                message={
                  <div>
                    <span style={{ marginRight: "8px" }}>
                      <ErrorIcon fontSize="large" color="error" />
                    </span>
                    <span> {state.error} </span>
                  </div>
                }
                action={[
                  <IconButton
                    key="close"
                    aria-label="close"
                    onClick={(e) => errorClose(e)}
                  >
                    <CloseIcon color="error" />
                  </IconButton>
                ]}
              />
            </Snackbar>
          ) : null}
        </Paper>
      </div>
    );
  }


export default Registration;
