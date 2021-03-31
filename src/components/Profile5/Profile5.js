import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Avatar1 from '../Avatar/Avatar1';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }));

const Profile5 = () => {
    const classes = useStyles();
    return (
            <div>
                
                
        <Grid container>
        
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '25rem', height: '7rem' }}
      >
          <h7><b>Menu</b></h7>
          <br></br>
        <div className={classes.root}>
        <Grid container wrap="nowrap" spacing={4}>
          <Grid item>
          <Avatar style={{backgroundColor:"green"}}>
                    B
        </Avatar>
        <footer>Book</footer>
          </Grid>
          <Grid item>
          <Avatar style={{backgroundColor:"red"}}>
                    D
        </Avatar>
        <footer>Donation</footer>
          </Grid>
          <Grid item>
          <Avatar style={{backgroundColor:"purple"}}>
                    D
        </Avatar>
        <footer>Donors</footer>
          </Grid>
          <Grid item>
          <Avatar style={{backgroundColor:"orange"}}>
          <nav>
            <Link to="/requestScreen">L</Link>
           </nav>
        </Avatar>
        <footer>My List</footer>
          </Grid>
          
          </Grid>
        
      
    </div>    
      </Box>
      </Grid>
     
      <Grid container>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '25rem', height: '7rem' }}
      >
          <h7><b>Requests</b></h7>
          <br></br>
        <div className={classes.root}>
        <Grid container wrap="nowrap" spacing={4}>
          <Grid item>
          <Avatar style={{backgroundColor:"green"}}>       
            <nav>
            <Link to="/contact">U</Link>
           </nav>
        </Avatar>
        <footer>Urgent</footer>
          </Grid>
          <Grid item>
          <Avatar style={{backgroundColor:"red"}}>
                    P
        </Avatar>
        <footer>My Request</footer>
          </Grid>
          <Grid item>
          <Avatar style={{backgroundColor:"purple"}}>
                    C
        </Avatar>
        <footer>Post Request</footer>
          </Grid>
          
          
          </Grid>
        
      
    </div>
        
      </Box>
      </Grid>
        </div>
    );
};

export default Profile5;