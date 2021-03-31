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
import Grid1 from '../Grid1/Grid1';
import Grid2 from '../Grid2/Grid2';
import Grid3 from '../Grid3/Grid3';
import GridH1 from '../GridH1/GridH1';
import Profile from '../Profile/Profile';
import Profile2 from '../Profile2/Profile2';
import Notification from '../Notification/Notification';
import Badge from '../Badge/Badge';
import logo2 from '../../images/logo2.png';
import './RequestScreen.css';
import poster from '../../images/poster.png';
import Avatar1 from '../Avatar/Avatar1';
import Profile3 from '../Profile3/Profile3';
import Profile4 from '../Profile4/Profile4';
import Carousel1 from '../Carousel1/Carousel1';
import Profile5 from '../Profile5/Profile5';
import SimpleMap from '../SimpleMap/SimpleMap';
import Statistic from '../Statistic/Statistic';






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
        <div className="req">
            <img src={logo2} alt=""/>
        </div>      
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
      <br></br>
      <div className="req2">
        <img src={poster} alt=""/>
      </div>
      </div>
      <div className="col-10">
      <TabPanel value={value} index={0}>
      <div className="container">
        <div className="row">
        <div className="col-6">
        <House></House>
        <Carousel1></Carousel1>
        <Profile5></Profile5>
        <Statistic></Statistic>
        </div>
        <div className="col-6">
            <SimpleMap></SimpleMap>
        
        </div>
        </div>
        
        </div>
        
      </TabPanel>
    
      
      
      <TabPanel value={value} index={1}>
      <div className="container">
        <div className="row">
        <div className="col-5">
        <Profile></Profile>
        </div>
        <div className="col-7">
        <Profile2></Profile2>
        <br></br>
        <Profile4></Profile4>
        </div>
        </div>
        </div>
      </TabPanel>
      
      
      
      <TabPanel value={value} index={2}>
        <Notification></Notification>
      </TabPanel>
      
      
      
      <TabPanel value={value} index={3}>
          <h5>Donations</h5>
          <br></br>
      <Grid3></Grid3>
      <br></br>
      <div className="container">
        <div className="row">
        <div className="col-6">
        <Grid2></Grid2>
      </div>
      <div className="col-6">
        
        <Grid1></Grid1>
        </div>
        </div>
        </div>
        
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
