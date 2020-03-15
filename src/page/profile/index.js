import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ExitToApp, AddAPhoto, Add } from "@material-ui/icons";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { withStyles } from "@material-ui/styles";
import { logout } from "../../action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import toastr from "toastr";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  IconButton,
  Avatar,
  TextField,
  Input
} from "@material-ui/core";

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
  large: {}
});

const imgStyles = {
  backgroundSize: "cover",
  height: "10rem",
  width: "10rem",
  borderRadius: "100%"
};

class Profile extends React.Component {
  state = {
    open: false,
    image: null,
    tags: []
  };

  handleBrowseLogo = async e => {
    e.preventDefault();
    const file = e.target.files[0];
    //validating the file
    //check if the file is exists
    if (!file) {
      toastr.error("No image is selected!", "Error");
      return;
    }
    //check if the image size is larger than 1MB
    if (file.size > 1048576) {
      toastr.error("Image size must be less than 1MB!", "Error");
      return;
    }
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg"
    ) {
      var output = document.getElementById("preview");
      output.style.backgroundImage = `url('${URL.createObjectURL(
        e.target.files[0]
      )}')`;
      this.setState({
        image: e.target.files[0].name
      });
    } else {
      toastr.error("Please provide a valid image. (JPG, JPEG or PNG)", "Error");
    }
  };

  renderImage = () => {
    const { image } = this.state;
    if (!image) {
      return (
        <>
          <IconButton
            onClick={() => document.getElementById("selectedFile").click()}
          >
            <AddAPhoto />
          </IconButton>
          <Input
            type="file"
            id="selectedFile"
            onChange={e => this.handleBrowseLogo(e)}
            style={{ display: "none" }}
          />
          Click to upload
        </>
      );
    } else {
      return <></>;
    }
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleChange = tags => {
    this.setState({ tags });
  };

  render() {
    const { classes, logout, isLogin } = this.props;
    const { image } = this.state;
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
                  <Grid item>
                    <Button
                      onClick={this.handleOpen}
                      variant={"contained"}
                      endIcon={<Add />}
                    >
                      Create new memory
                    </Button>
                    <Dialog
                      onClose={this.handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={this.state.open}
                      maxWidth="lg"
                    >
                      <DialogContent dividers>
                        <Grid container>
                          <Grid
                            item
                            sm={6}
                            container
                            id={"preview"}
                            style={{
                              padding: "1rem",
                              backgroundColor: "rgb(239, 239, 239)",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover"
                            }}
                          >
                            <div
                              style={{
                                height: "20rem",
                                width: "40rem",
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                border: !image ? "1px dashed" : "",
                                backgroundColor: "initial"
                              }}
                              // variant="outlined"
                            >
                              {this.renderImage()}
                            </div>
                          </Grid>
                          <Grid
                            item
                            sm={6}
                            container
                            direction={"column"}
                            style={{ padding: "1rem" }}
                          >
                            <Grid item container>
                              <Grid item>
                                <Avatar
                                  alt="Remy Sharp"
                                  src="/static/images/avatar/1.jpg"
                                  className={classes.large}
                                />
                              </Grid>
                              <Grid
                                item
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "0.5rem"
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  style={{ fontWeight: 700 }}
                                >
                                  Vu Pham
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid item container>
                              <Grid item sm={12} xs={12}>
                                <TagsInput
                                  onlyUnique
                                  inputProps={{
                                    placeholder:
                                      "Enter tags for searching purpose",
                                    className: "react-tagsinput-input"
                                  }}
                                  value={this.state.tags}
                                  onChange={this.handleChange}
                                />
                              </Grid>
                              <Grid item>
                                <Typography variant={"caption"}>
                                  Efficient tag will make others easily find
                                  your post
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          autoFocus
                          onClick={this.handleClose}
                          color="secondary"
                          variant={"contained"}
                        >
                          Save
                        </Button>
                      </DialogActions>
                    </Dialog>
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
                        <TagsInput
                          value={this.state.tags}
                          disabled
                          inputProps={{
                            placeholder: null,
                            className: ""
                          }}
                        />
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
