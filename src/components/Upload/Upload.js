import React from 'react';
import './Upload.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import logo2 from '../../images/logo2.png';
import logo3 from '../../images/logo3.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));




const Upload = () => {
    const classes = useStyles();
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-6">
        <div className="upload">
            <img src={logo2} alt=""/>
            <h1>Please do not use a model<br></br>doll or avatar. Please keep<br></br>faith in yourself. You're<br></br>beautiful too.</h1>
        </div>
        </div>
        <div className="col-6">
        <div className="up">
            <img src={logo3} alt=""/>
        </div>
        <br></br>
        <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
    <br></br>
            <nav>
            <Link className="button" to="/header">Start Journey</Link>
            </nav>
    </div>
    </div>
    </div>
    
        </>
        

    );
};

export default Upload;