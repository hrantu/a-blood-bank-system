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

const About = () => {
    const classes = useStyles();
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-6">
        <div className="upload">
            <img src={logo2} alt=""/>
            <br></br>
            <h1>Provide your real name for<br></br>your identity. Your name will<br></br>be used for search</h1>
        </div>
        </div>
        <div className="col-6">
        <h1>Let Us Know<br></br>About You</h1>
        <br></br>
        <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue=""
          variant="outlined"
        />
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
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
            <Link className="button" to="/contact">Next</Link>
        </nav>
        </div>
        </div>
        </div>

    </>
    );
};

export default About;