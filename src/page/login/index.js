import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { login } from "../../action";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "grey",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: 1,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 1
  },
  submit: {
    margin: "3 0 2"
  }
});

class SignInSide extends React.Component {
  state = {
    email: "prc391",
    password: "prc391"
  };

  inputEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  inputPassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    const { classes, isLogin, login } = this.props;
    const { email, password } = this.state;
    if (isLogin) {
      return <Redirect to="/" />;
    }
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={this.inputEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={this.inputPassword}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => login(email, password)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignInSide));
