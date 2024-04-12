import React, { useContext } from "react";
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import { ThemeContext } from "../theme/theme.jsx";
import GridViewIcon from "@mui/icons-material/GridView";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import { FaFilePen } from "react-icons/fa6";

function SideBar() {
  const useStyle = useContext(ThemeContext);
  const isActive = true;
  return (
    <aside style={useStyle.component} className={"aside-bar"}>
      <div className="sidebar-title">
        <h1>
          {" "}
          Intelli<span className="Title-highlight">Draft</span>
        </h1>
      </div>
      <div className="aside-bar-container">
        <SideBarOptions
          className={"lib-sub"}
          isActive={isActive}
          Icon={GridViewIcon}
          href={"/dashboard"}
          title={"Dashboard"}
        />
        <SideBarOptions
          className={"lib-sub"}
          isActive={isActive}
          Icon={FaFilePen}
          href={"/generate"}
          title={"Generate Document"}
        />
        <SideBarOptions
          className={"lib-sub"}
          isActive={isActive}
          Icon={InsertDriveFileIcon}
          href={"/summary"}
          title={"Summarize"}
        />
        <SideBarOptions
          className={"lib-sub"}
          isActive={isActive}
          Icon={PlagiarismIcon}
          href={"/home/search"}
          title={"Review"}
        />
        <SideBarOptions
          className={"lib-sub"}
          isActive={isActive}
          Icon={GroupAddIcon}
          href={"/home/search"}
          title={"Connect to Expert Advisor"}
        />
      </div>
    </aside>
  );
}

export default SideBar;
