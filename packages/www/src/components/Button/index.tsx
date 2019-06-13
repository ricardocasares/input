import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { Button, withStyles } from "@material-ui/core";
import indigo from "@material-ui/core/colors/indigo";
import { ButtonProps } from "@material-ui/core/Button";

type CallToActionProps = {
  classes?: any;
  className?: string;
};

const CallToAction: FunctionComponent<CallToActionProps & ButtonProps> = ({
  classes,
  children,
  className,
  ...other
}) => {
  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children}
    </Button>
  );
};

export default withStyles({
  root: {
    color: "white",
    background: indigo[400],
    padding: "10px 20px",
    "&:hover": {
      background: indigo[400]
    }
  }
})(CallToAction);
