import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import blood from '../../images/blood.jpg';



const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: red[500],
      }
    }));

const Grid3 = () => {
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
    return (
        <>
        <div>
        <Grid container>
      
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '16rem', height: '7rem' }}
      >
          <div className="container">
        <div className="row">
        <div className="col-3">
          {
          <Avatar aria-label="recipe" className={classes.avatar}>
            <Avatar alt="M" src={blood} />
          </Avatar>
        }
        </div>
        <div className="col-9">
        <h5><b>Musa Clinic</b></h5>
        <small>21/3,Los Angeles,CA</small><br></br><small>Monday,2 Jan,11:08 PM</small>
        </div>
        </div>
        </div>
        
      </Box>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '16rem', height: '7rem' }}
      >
          <div className="container">
        <div className="row">
        <div className="col-3">
          {
          <Avatar aria-label="recipe" className={classes.avatar}>
            <Avatar alt="M" src={blood} />
          </Avatar>
        }
        </div>
        <div className="col-9">
        <h5><b>Musa Clinic</b></h5>
        <small>21/3,Los Angeles,CA</small><br></br><small>Monday,2 Jan,11:08 PM</small>
        </div>
        </div>
        </div>
        
      </Box>
    </Grid>
        </div>
        </>
    );
};

export default Grid3;