import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo2 from '../../images/logo2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const SignIn = () => {
    const classes = useStyles();
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-6">
        <div className="upload">
            <img src={logo2} alt=""/>
        </div>
        </div>
        <div className="col-6">
        <h1>Sign In</h1>
        <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Email or Username"
          defaultValue="@gmail.com"
          variant="outlined"
        />
        <br></br>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      </div>
    </form>
    <br></br>
        <nav>
            <Link className="button" to="/requestScreen">Login</Link>
        </nav>
        <br></br>
        <nav>
        <Link to="/">Forgot Password</Link>
        </nav>
        <br></br>
        <p>Don't have an account?</p><nav><Link to="/about">Sign Up</Link></nav>
        </div>
        </div>
        </div>
        
    </>
    );
};


export default SignIn;