import React from "react";
import { Typography, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Instagrammar
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = theme => ({
  icon: {
    // marginRight: theme.spacing(2)
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper
    // padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    // marginTop: theme.spacing(4)
  },
  cardGrid: {
    // paddingTop: theme.spacing(8),
    // paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "60%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: "black",
    color: "white",
    padding: "1.5rem"
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          INSTAGRAMMAR
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Save every moment in your life!
        </Typography>
        <Copyright />
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
