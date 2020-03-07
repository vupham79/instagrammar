import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ExitToApp } from "@material-ui/icons";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { withStyles } from "@material-ui/styles";
import { logout } from "../../action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
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
  }
});

const imgStyles = {
  backgroundSize: "cover",
  height: "10rem",
  width: "10rem",
  borderRadius: "100%"
};

class Profile extends React.Component {
  render() {
    const { classes, logout, isLogin } = this.props;
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
              <Grid
                item
                container
                justify={"space-around"}
                style={{ padding: "2.5rem" }}
              >
                <Grid
                  item
                  style={{
                    ...imgStyles,
                    backgroundImage: `url('https://instagram.fsgn2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/75210456_579499619528579_387326348391088128_n.jpg?_nc_ht=instagram.fsgn2-1.fna.fbcdn.net&_nc_ohc=RfKlrQyVPLEAX-NZnoG&oh=136f466f0f2a308ee8327a18673ca7f1&oe=5E8E2255')`
                  }}
                />
                <Grid item container sm={6} direction={"column"}>
                  <Grid item container spacing={2}>
                    <Grid item>
                      <Typography variant={"h5"}>vuph</Typography>
                    </Grid>
                    <Grid item onClick={logout}>
                      <ExitToApp color={"secondary"} />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant={"subtitle1"}>5 posts</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant={"body1"}>
                      This is description
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container spacing={4}>
                {cards.map(card => (
                  <Grid item key={card} xs={12} sm={12} md={12}>
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

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Profile));
