import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Avatar1 from '../Avatar/Avatar1';
import Box from '@material-ui/core/Box';


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

const Profile4 = () => {
    const classes = useStyles();
    return (
            <div>
                
                
        <Grid container>
        
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '30rem', height: '10rem' }}
      >
          <h4>Badges</h4>
          <br></br>
        <div className={classes.root}>
        <Grid container wrap="nowrap" spacing={4}>
          <Grid item>
          <Avatar style={{backgroundColor:"green"}}>
                    C
        </Avatar>
        <footer>Clean</footer>
          </Grid>
          <Grid item>
          <Avatar style={{backgroundColor:"red"}}>
                    P
        </Avatar>
        <footer>Protector</footer>
          </Grid>
          <Grid item>
          <Avatar style={{backgroundColor:"purple"}}>
                    C
        </Avatar>
        <footer>Certified</footer>
          </Grid>
          <Grid item>
          <Avatar style={{backgroundColor:"orange"}}>
                    F
        </Avatar>
        <footer>Fast</footer>
          </Grid>
          <br></br>
          <Grid item>
          <Avatar style={{backgroundColor:"blue"}}>
                    S
        </Avatar>
        <footer>Superman</footer>
          </Grid>
          </Grid>
        
      
    </div>
        
      </Box>
      </Grid>
        </div>
    );
};

export default Profile4;