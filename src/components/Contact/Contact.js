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

const Contact = () => {
    const classes = useStyles();
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-6">
        <div className="upload">
            <img src={logo2} alt=""/>
            <h1>Please provide correct<br></br>phone no. This information<br></br>will keep safe</h1>
        </div>
        </div>
        <div className="col-6">
        <h1>Contact Information</h1>
          <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
          id="outlined-number"
          label="Phone No"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br></br>
        <TextField
          id="Alternative Phone No"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br></br>
        <TextField
          id="outlined-helperText"
          label="Social(Optional)"
          defaultValue="https:/"
          variant="outlined"
        />
      </div>
    </form>
    <br></br>
    <nav>
         <Link className="button" to="/group">Next</Link>
    </nav>
    </div>
    </div>
    </div>
        </>
    );
};

export default Contact;