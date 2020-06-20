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
  const handleClick = (name) => (e) => {
    console.log(e.target.value);
    console.log(name);
  };

  const history = useHistory();
  return (
    <AppBar>
      <Tabs>
        {NavItems.map(({ name }) => (
          <Tab value={"/" + name} label={name} onClick={handleClick(name)} />
        ))}
      </Tabs>
    </AppBar>
  );
};
