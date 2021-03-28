import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import logo2 from '../../images/logo2.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Group = () => {
    const classes = useStyles();
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-6">
        <div className="upload">
            <img src={logo2} alt=""/>
            <h1>Your blood group need to be<br></br>accurate. If you don't know<br></br>about it please contact<br></br>nearest clinic</h1>
        </div>
        </div>
        <div className="col-6">
        <div><h1>What is Your<br></br>Blood Group?</h1>
        <div className={classes.root}>
      <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
        <Button>A+</Button>
        <Button>A-</Button>
        <Button>B+</Button>
      </ButtonGroup>
      <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
        <Button>B-</Button>
        <Button>O+</Button>
        <Button>O-</Button>
      </ButtonGroup>
      <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
        <Button>AB+</Button>
        <Button>AB-</Button>
      </ButtonGroup>
    </div>
        <nav>
            <Link className="button" to="/weight">Next</Link>
        </nav>
    </div>
    </div>
    </div>
    </div>
    </>
    );
};

export default Group;