import React from "react";
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

export default function NewsCard({ articles, index }) {
  const classes = useStyles();
  function onClick() {
    window.open(articles[index].url, "_blank");
  }

  if (articles.length) {
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={articles[index].urlToImage}
            title="Article Photo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {articles[index].title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {articles[index].description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={onClick}>
            Article link
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    return <div>Type something</div>;
  }
}
