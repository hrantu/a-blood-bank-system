import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import antu2 from '../../images/antu2.jpg';
import Avatar1 from '../Avatar/Avatar1';
import LikeB from '../LikeB/LikeB';


const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
},
paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
},
image: {
    width: 40,
    height: 40,
},
img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
},
}));

const Grid1 = () => {
const classes = useStyles();
return (
    <>
    
        <div className={classes.root}>
        
            <Paper className={classes.paper}>
            <h3>Reviews</h3>
            <br></br>
                <Grid container spacing={2}>
                
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            
                            <Avatar1></Avatar1>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Ashik Prottoy
            </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Dec 27
            </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ut voluptas tempore
            </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    <LikeB></LikeB>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1"></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
        <br></br>
        {/* Another */}
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            {/* <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" /> */}
                            <Avatar1></Avatar1>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Ashik Prottoy
            </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Dec 27
            </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. voluptatem commodi tempora nobis unde magnam!
            </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    <LikeB></LikeB>
                                    
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1"></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    </>
);
};

export default Grid1;