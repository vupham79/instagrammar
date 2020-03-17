import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
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
    paddingTop: 10,
    paddingBottom: 10
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
    // backgroundColor: theme.palette.background.paper
    // padding: theme.spacing(6)
  }
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Album extends React.Component {
  render() {
    const { classes, isLogin } = this.props;
    if (!isLogin) {
      return <Redirect to="/login" />;
    }
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <main>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container>
              {cards.map(card => (
                <Grid
                  item
                  key={card}
                  xs={12}
                  sm={12}
                  md={12}
                  style={{ marginTop: "1rem" }}
                >
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography variant={"caption"}>by Atonio</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <Footer />
        {/* End footer */}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  isLogin: state.user.isLogin
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Album));
