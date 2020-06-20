import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const NavItems = [
  {
    name: "Home",
  },
  {
    name: "Contact",
  },
];
export const Nav = () => {
  const handleClick = (name) => (e) => {};
  const handleChange = (e, newValue) => {};

  const history = useHistory();
  return (
    <AppBar>
      <Tabs value={value} onChange={handleChange}>
        {NavItems.map(({ name }) => (
          <Tab value={"/" + name} label={name} />
        ))}
      </Tabs>
    </AppBar>
  );
};
