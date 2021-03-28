import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo2 from '../../images/logo2.png';
import male from '../../images/male.png';
import female from '../../images/female.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});



const Gender = () => {
    const classes = useStyles();

    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-6">
        <div className="upload">
            <img src={logo2} alt=""/>
            <h1>Defining your gender will let<br></br>us know bring new features<br></br>for mothers health care</h1>       
        </div>
        </div>
        <div className="col-6">
        <div>
        <h1>What Is Your Gender?</h1>
        <div className="row">
        <div class="col-md-5">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={male}
                        title="Male"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Male
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <nav>
                    <Link className="button" to="/location">Select</Link>
                </nav>
                </CardActions>
            </Card>
            </div>
            <div className="col-md-5">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={female}
                        title="Female"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Female
                        </Typography>                        
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <nav>
                    <Link className="button" to="/location">Select</Link>
                </nav>
                </CardActions>
            </Card>
            </div>
            </div>
            </div>
            <br></br>
            <nav>
            <Link className="button" to="/location">Next</Link>
            </nav>
        </div>
        </div>
        </div>
        
        </>
    );
};

export default Gender;