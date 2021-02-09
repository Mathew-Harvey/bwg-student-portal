import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import RUG from "react-upload-gallery";
import "react-upload-gallery/dist/style.css";
import "./photo.css"

import { initialState } from "./data";
//todo: make api routes to image server or json data base for images

function Photo() {
  return (
    <Fragment>
        <h1 style={style.title}> My Photo Progress Tracker</h1>

        <br />
      <RUG  initialState={initialState} action="http://example.com/upload"/>

    </Fragment>
  );
}

const style = {
  title: {
    textAlign: "center",
    fontFamily: "Helvetica",
    marginTop: 50
  }
};

export default Photo 