import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import pic from "./img/dbz.png"
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
    // maxWidth: 100,
    // maxHeight: 100,
    backgroundPosition: 50
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
                image={pic}
                title="Contemplative Reptile"
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
                image={pic}
                title="Contemplative Reptile"
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
                image={pic}
                title="Contemplative Reptile"
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
                image={pic}
                title="Contemplative Reptile"
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
                image={pic}
                title="Contemplative Reptile"
                style={myStyles.img}
              />
            </CardActionArea>
          </Card>
          </Grid>
        </Grid>
    </div>
      )
    }
