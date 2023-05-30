import { Button, CircularProgress } from "@mui/material";
import React from "react";
import "./BackNextBtnComponent.css";

const BackNextBtnComponent = (props) => {
  return (
    <div className="back-next-btn-cont">
      {props.tab === 0 ? null : (
        <Button
          onClick={props.onBack}
          className="outlined-btn"
          sx={{ marginRight: "20px" }}
          variant="outlined">
          {props.backTitle}
        </Button>
      )}
      {props.loading ? (
        <CircularProgress size={25} />
      ) : (
        <Button type="submit" className="contained-btn" variant="contained">
          {props.nextTitle}
        </Button>
      )}
    </div>
  );
};

export default BackNextBtnComponent;
