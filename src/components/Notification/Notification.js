import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Notification = () => {

    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-6">
            <div>
                <h4>Notifications</h4>
                
        <Grid container>
      
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '15rem', height: '4rem' }}
      >
        <small><b>Musa Clinic</b> posted a blood<br></br>request near you</small>
      </Box>
      </Grid>
      <Grid>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '15rem', height: '4rem' }}
      >
        <small><b>Musa Clinic</b> posted a blood<br></br>request near you</small>
      </Box>
    </Grid>
    <Grid>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '15rem', height: '4rem' }}
      >
        <small><b>Musa Clinic</b> posted a blood<br></br>request near you</small>
      </Box>
    </Grid>
    <br></br>
    <h5>Yesterday</h5>
    <br></br>
    <Grid>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '15rem', height: '4rem' }}
      >
        <small><b>Musa Clinic</b> requested you for<br></br><b>O+</b> blood</small>
      </Box>
    </Grid>
    <Grid>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '15rem', height: '4rem' }}
      >
        <small><b>Musa Clinic</b> earned a new badge</small>
      </Box>
    </Grid>
    <br></br>
    <h6>Yesterday</h6>
    <Grid>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '15rem', height: '4rem' }}
      >
        <small><b>You</b> earned a new badge</small>
      </Box>
    </Grid>
    <Grid></Grid>

        </div>
        </div>
        
        <div className="col-6">
        <h4>History</h4>
        <Grid container>
        <br></br>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '15rem', height: '4rem' }}
      >
        <small>You accepted the request for <b>John<br></br>Adam</b></small>
      </Box>
      </Grid>
      <Grid>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '15rem', height: '4rem' }}
      >
        <small><b>You</b> posted a blood request for your<br></br>brother</small>
      </Box>
    </Grid>
    <br></br>
    <h6>Yesterday</h6>
    <br></br>
    <Grid>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '15rem', height: '4rem' }}
      >
        <small>You Posted a blood request which was expired <b>Republish</b> it</small>
      </Box>
    </Grid>
        </div>
        </div>
        </div>

        </>
    );
};

export default Notification;