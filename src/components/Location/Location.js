import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import logo2 from '../../images/logo2.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const Location = () => {
    const classes = useStyles();
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-6">
        <div className="upload">
            <img src={logo2} alt=""/>
            <h1>Please provide correct<br></br>address. This information<br></br>will keep safe</h1>
        </div>
        </div>
        <div className="col-6">
        <div>
            <h1>Where Do You Live?</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                <TextField label="Street Address" id="filled-size-normal" defaultValue="" variant="filled" />
                </div>
                <div>                    
                    <TextField label="City" id="filled-size-normal" defaultValue="" variant="filled" />                                        
                </div>
                <div>
                    <TextField label="Postal Code" id="filled-size-normal" defaultValue="" variant="filled" />
                </div>
            </form>
            <br></br>
            <nav>
            <Link className="button" to="/age">Next</Link>
            </nav>
        </div>
        </div>
        </div>
        </div>
        </>
    );
};

export default Location;