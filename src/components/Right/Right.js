import React, { useContext } from "react";
import Paper from "./Paper/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { green, pink, red, yellow } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import ClearIcon from "@material-ui/icons/Clear";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "@material-ui/core";
import { ResumeContext } from "../../contexts/ResumeContext";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    
  },
  red: {
    backgroundColor: red[500],
    margin: 10,
  },
  yellow: {
    backgroundColor: yellow[500],
    margin: 10,
  },
}));

function Right() {
  const { setContent } = useContext(ResumeContext);
  const classes = useStyles();
  const handleDeleteDate = (event) => {
    event.preventDefault();
    localStorage.clear();
    setContent({
      header: {},
      professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
      education: {},
      additional: [],
    });
  };
  const handleSaveToPDF = (event) => {
    event.preventDefault();
    window.print();
  };

  return (
    <div className="right">
      <div className={classes.root}>
        <Link href="#" onClick={handleDeleteDate}>
          <Tooltip title="Delete All informations" placement="right">
            <Avatar className={classes.red}>
              <ClearIcon />
            </Avatar>
          </Tooltip>
        </Link>
        <Link href="#" onClick={handleSaveToPDF}>
          <Tooltip title="export to PDF" placement="right">
            <Avatar className={classes.yellow}>
              <PictureAsPdfIcon />
            </Avatar>
          </Tooltip>
        </Link>
      </div>
      <Paper />
    </div>
  );
}

export default Right;
