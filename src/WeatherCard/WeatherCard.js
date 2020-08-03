import React, { useState, useEffect } from "react";
import FetchMap from "../FetchMap";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function WeatherCard() {
  const classes = useStyles();
  const [tempData, updateData] = useState({});
  const [url, updateUrl] = useState(
    "https://store-images.s-microsoft.com/image/apps.24777.9007199266246197.1102bb94-3d65-417b-bd4a-5e4abd0fc759.6352bf26-e71f-40c8-ad7d-ff92f6fecc6d?mode=scale&q=90&h=200&w=200&background=%230078D4"
  );

  useEffect(() => {
    let mapUrl = FetchMap();
    updateUrl(mapUrl);
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=eeecd6b92074562daba49e0799564c07&units=imperial"
    )
      .then((data) => data.json())
      .then((data) => {
        updateData(() => data.main);
      });
  }, []);
  //"https://store-images.s-microsoft.com/image/apps.24777.9007199266246197.1102bb94-3d65-417b-bd4a-5e4abd0fc759.6352bf26-e71f-40c8-ad7d-ff92f6fecc6d?mode=scale&q=90&h=200&w=200&background=%230078D4"
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url}
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Current temperature: {tempData.temp}F
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Feels like: {tempData.feels_like}F
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Minimum temperature: {tempData.temp_min}F
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Maximum temperature: {tempData.temp_max}F
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Article link
        </Button> */}
      </CardActions>
    </Card>
  );
}
