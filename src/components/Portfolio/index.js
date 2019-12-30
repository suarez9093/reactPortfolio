import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import pic from "./img/dbz.png";
import dbzThumbnail from "./img/dbzThumbnail.png"
import toyStory from "./img/toyStory.jpg";
import realEstate from "./img/realEstate.jpg";
import youTube from "./img/youtubeClone.jpg";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  card: {
    maxWidth: 145,
  },
  media: {
    height: 200,
  },
  img: {
    backgroundColor: "blue"
  }
});

const myStyles = {
  img: {
    width: 140,
    height: 200,
 
  }
}
export default function Portfolio() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} spacing={4}>
        <Grid item={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={dbzThumbnail}
                title="Dragon Ball Z Hangman"
                style={myStyles.img}
                onClick={() => {
                 window.location = window.location.href="www.google.com"
                }}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={realEstate}
                title="Real Estate App"
                style={myStyles.img}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={toyStory}
                title="Toy Story"
                style={myStyles.img}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={youTube}
                title="You Tube Clone"
                style={myStyles.img}
              />
            </CardActionArea>
          </Card>
        </Grid>
        {/* <Grid item={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={pic}
                title="Contemplative Reptile"
                style={myStyles.img}
              />
            </CardActionArea>
          </Card>
        </Grid> */}
      </Grid>
    </div>
  )
}
