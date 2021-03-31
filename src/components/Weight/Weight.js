import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import logo2 from '../../images/logo2.png';
import scale from '../../images/scale.png';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        maxWidth: 245,
    },
    media: {
        height: 120,
        width: 100,
    },
});

const Weight = () => {
    const classes = useStyles();
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-6">
        <div className="upload">
            <img src={logo2} alt=""/>
            <h1>Note: You can not donate<br></br>blood if you're under weight.<br></br>Minimum weight for<br></br>donation required 50 KG</h1>       
        </div>
        </div>
        <div className="col-6">
         <div>
        <h1>How Much Do You Weight?</h1>
        <div className="row">
        <div class="col-md-5">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={scale}
                        title="Weight 50-"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Less than Fifty KG
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <nav>
                    <Link className="button" to="/gender">Select</Link>
                </nav>
                </CardActions>
            </Card>
            </div>
            <div className="col-md-5">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={scale}
                        title="Female"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Greater Than Fifty KG
                        </Typography>                        
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <nav>
                    <Link className="button" to="/gender">Select</Link>
                </nav>
                </CardActions>
            </Card>
            </div>
            
        </div>
        </div>
        <br></br>
            <nav>
            <Link className="button" to="/gender">Next</Link>
            </nav>
        </div>
        </div>
        </div>
        
        </>
    );
};

export default Weight;