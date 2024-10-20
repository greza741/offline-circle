import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Typography } from "@mui/material";

interface Props {
  path: string;
  name: string;
  icon: {
    inactive: string;
    active: string;
  };
}

const Items: React.FC<Props> = ({ path, name, icon }) => {
  return (
    <NavLink to={path} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <div
          className={`left-bar-icons ${isActive ? "active" : ""}`}
          style={{
            paddingLeft: "20px",
            display: "flex",
            alignItems: "flex-start",
            color: "white",
            gap: "20px",
            paddingTop: "20px",
          }}
        >
          <Icon
            icon={isActive ? icon.active : icon.inactive}
            style={{ fontSize: "1.5rem" }}
          />
          <Typography fontWeight={"500"} fontSize={"1.2rem"}>
            {name}
          </Typography>
        </div>
      )}
    </NavLink>
  );
};

export default Items;
