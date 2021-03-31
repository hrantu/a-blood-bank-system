import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import graph from '../../images/graph.jpg';

const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: red[500],
      }
    }));


const Statistic = () => {
    return (
        <div>
        <Grid container>
      
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '18rem', height: '12rem' }}
      >
        <h7><b>Statistics</b></h7>
        <br></br>
        <small>New patient</small>
        <img style={{ width: '16rem', height: '7rem' }} src={graph} alt=""/>
      </Box>
      </Grid>
      </div>
    );
};

export default Statistic;