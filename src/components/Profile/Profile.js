import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import profile from '../../images/profile.jpg';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    root2: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
      },
  }));

const Profile = () => {
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
        <div>
             <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            A+
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Anshu Priya"
        subheader="Beginner Donor"
      />
      <CardMedia
        className={classes.media}
        image={profile}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <h2>Info</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut quis deserunt.</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <p>Show more</p>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <div>
                
                
                <Grid container>
                
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{ width: '25rem', height: '10rem' }}
              >
                  <h4>Badge
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  </h4>
                  <br></br>
                <div className={classes.root2}>
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
                  <Avatar style={{backgroundColor:"orange"}}>
                            F
                </Avatar>
                <footer>Fast</footer>
                  </Grid>
                  <br></br>
                  
                  </Grid>
                
              
            </div>
                
              </Box>
              </Grid>
                </div>
        </CardContent>
      </Collapse>
    </Card>
        </div>
    );
};

export default Profile;