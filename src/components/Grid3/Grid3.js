import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Grid3 = () => {
    return (
        <div>
        <Grid container>
      
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '8rem', height: '5rem' }}
      >
        boxShadow={3}
      </Box>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '8rem', height: '5rem' }}
      >
        boxShadow={3}
      </Box>
    </Grid>
        </div>
    );
};

export default Grid3;