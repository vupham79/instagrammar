import React, { Component } from "react";
import {
  Avatar,
  Paper,
  TextField,
  Grid,
  Input,
  Button
} from "@material-ui/core";
import { ImageSearch } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setNewImage } from "../action/post";
import toastr from "toastr";

const useStyles = theme => ({
  input: {
    color: "red"
  }
});

const imgStyles = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "6rem",
  height: "6rem"
};

class Feed extends Component {
  state = {
    logo: null
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
      output.src = URL.createObjectURL(e.target.files[0]);
      this.setState({
        logo: e.target.files[0].name
      });
      this.props.setNewImage(file);
    } else {
      toastr.error("Please provide a valid image. (JPG, JPEG or PNG)", "Error");
    }
  };

  render() {
    return (
      <Paper>
        <Grid container>
          <Grid item sm={4}>
            <Button
              variant={"contained"}
              color={"default"}
              endIcon={<ImageSearch />}
              onClick={() => document.getElementById("selectedFile").click()}
            >
              Browse
            </Button>
            <img
              style={{ ...imgStyles, width: "auto" }}
              alt=""
              id={"preview"}
              src={""}
            />
          </Grid>
          <Input
            type="file"
            id="selectedFile"
            onChange={e => this.handleBrowseLogo(e)}
            style={{ display: "none" }}
          />
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  image: state.post.image
});

const mapDispatchToProps = dispatch => ({
  setNewImage: file => dispatch(setNewImage(file))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(Feed));
