import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import antu from '../../images/antu.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Avatar1 = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <Avatar alt="M" src={antu} />
                {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
        
            </div>
        </div>
    );
};

export default Avatar1;