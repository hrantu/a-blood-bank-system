import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Profile2 = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
            <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Donation" {...a11yProps(0)} />
          <Tab label="Request" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className="container">
        <div className="row">
        <div className="col-3">
            <small>Dec</small>
            <h3>7</h3>
            </div>
            <div className="col-6">
                <h4>Saint Sebastine Hospital</h4>
                <small>1 Bag Blood</small>
            </div>
            <div className="col-3">
                <footer>6 day ago</footer>
            </div>
            </div>
            </div>
            <br></br>
            <div className="container">
        <div className="row">
        <div className="col-3">
            <small>Dec</small>
            <h3>7</h3>
            </div>
            <div className="col-6">
                <h4>Saint Sebastine Hospital</h4>
                <small>1 Bag Blood</small>
            </div>
            <div className="col-3">
                <footer>6 day ago</footer>
            </div>
            </div>
            </div>
            <br></br>
            <div className="container">
        <div className="row">
        <div className="col-3">
            <small>Dec</small>
            <h3>7</h3>
            </div>
            <div className="col-6">
                <h4>Saint Sebastine Hospital</h4>
                <small>1 Bag Blood</small>
            </div>
            <div className="col-3">
                <footer>6 day ago</footer>
            </div>
            </div>
            </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="container">
        <div className="row">
        <div className="col-3">
            <small>Dec</small>
            <h3>11</h3>
            </div>
            <div className="col-6">
                <h4>You requested for blood</h4>
                <small>1 Bag B+ Blood</small>
            </div>
            <div className="col-3">
                <footer>3 day ago</footer>
            </div>
            </div>
            </div>
            <br></br>
            <div className="container">
        <div className="row">
        <div className="col-3">
            <small>Dec</small>
            <h3>11</h3>
            </div>
            <div className="col-6">
                <h4>You requested for blood</h4>
                <small>1 Bag B+ Blood</small>
            </div>
            <div className="col-3">
                <footer>3 day ago</footer>
            </div>
            </div>
            </div>
            <br></br>
            <div className="container">
        <div className="row">
        <div className="col-3">
            <small>Dec</small>
            <h3>11</h3>
            </div>
            <div className="col-6">
                <h4>You requested for blood</h4>
                <small>1 Bag B+ Blood</small>
            </div>
            <div className="col-3">
                <footer>3 day ago</footer>
            </div>
            </div>
            </div>
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </div>
        </div>
    );
};

export default Profile2;