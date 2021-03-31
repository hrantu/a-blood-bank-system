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




const Profile3 = () => {
    const classes = useStyles();
    return (
        <div>
             <div className={classes.root}>
                 
      
        <Grid container wrap="nowrap" spacing={4}>
          <Grid item>
          <Avatar style={{backgroundColor:"red"}}>
                    A
        </Avatar>
          </Grid>
          <Grid item>
          <Avatar style={{backgroundColor:"red"}}>
                    B
        </Avatar>
          </Grid>
          <Grid item>
          <Avatar style={{backgroundColor:"red"}}>
                    C
        </Avatar>
          </Grid>
          <Grid item>
          <Avatar style={{backgroundColor:"red"}}>
                    D
        </Avatar>
        
          </Grid>
          <Grid item>
          <Avatar style={{backgroundColor:"red"}}>
                    E
        </Avatar>
        
          </Grid>
          <br></br>
          <Grid item>
          <Avatar style={{backgroundColor:"red"}}>
                    E
        </Avatar>
        
          </Grid>
          
          
        </Grid>
        
      
    </div>
        </div>
    );
};

export default Profile3;