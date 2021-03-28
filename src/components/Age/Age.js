import React from 'react';
import './Age.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import logo2 from '../../images/logo2.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const Age = () => {
    const classes = useStyles();
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-6">
        <div className="upload">
        <img src={logo2} alt=""/>
            <h1>Correct birthdate give you<br></br>best experience with the<br></br>community. Don't hide it.</h1>
        </div>
        </div>
        <div className="col-6">
        <div className="birthday">
            
            <h1>How old are you?</h1>
            <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <br></br>
            <nav>
            <Link className="button" to="/upload">Next</Link>
            </nav>
        </div>
        </div>
        </div>
        </div>
        </>
    );
};

export default Age;