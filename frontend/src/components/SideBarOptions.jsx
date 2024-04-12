import React, { useRef } from "react";
import { Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

function SideBarOptions(props) {
  const { Icon, title, className, href } = props;
  const sideBarRef = useRef();
  const location = useLocation();

  const isActive = location.pathname === href; // Check if current location matches href

  return (
    <Button
      onClick={() => {
        window.location.href = href;
      }}
      className={`${className} ${isActive ? "active" : ""}`}
      startIcon={Icon && <Icon />}
    >
      <Link ref={sideBarRef} to="#" />
      {title}
    </Button>
  );
}

export default SideBarOptions;
