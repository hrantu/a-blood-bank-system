import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SignIn from '../SignIn/SignIn';
import About from '../About/About';
import House from '../House/House';
import Globe from '../Globe/Globe';
import Grid1 from '../Grid1/Grid1';
import Grid2 from '../Grid2/Grid2';
import Grid3 from '../Grid3/Grid3';
import GridH1 from '../GridH1/GridH1';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));
  

const RequestScreen = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <>
        <div className="container">
        <div className="row">
        <div className={classes.root}>
        <div className="col-2">      
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        // aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="Profile" {...a11yProps(1)} />
        <Tab label="Notifications" {...a11yProps(2)} />
        <Tab label="Donors" {...a11yProps(3)} />
        <Tab label="Customize" {...a11yProps(4)} />
      </Tabs>
      </div>
      <div className="col-10">
      <TabPanel value={value} index={0}>
        <House></House>
        {/* <GridH1></GridH1> */}
      </TabPanel>
    
      
      
      <TabPanel value={value} index={1}>
        <Grid1></Grid1>
        <Grid2></Grid2>
        <Grid3></Grid3>
      </TabPanel>
      
      
      
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      
      
      
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      
      
      
      <TabPanel value={value} index={4}>
        <About></About>
      </TabPanel>
      </div>
    
      
    </div>
    </div>
    </div>
    </>
    );
};

export default RequestScreen;