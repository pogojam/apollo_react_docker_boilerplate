import React from "react";
import { observer } from "mobx-react-lite";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import LayoutStore from "../../../state/stors/Layout_Store";

const NavItems = [
  {
    name: "Home",
  },
  {
    name: "Contact",
  },
];
export const Nav = observer(() => {
  const handleChange = (e, newValue) => {
    store.changePage(newValue);
    console.log(store);
  };
  const store = LayoutStore;
  return (
    <AppBar>
      <Tabs value={store.page} onChange={handleChange}>
        {NavItems.map(({ name }, i) => (
          <Tab value={i} label={name} />
        ))}
      </Tabs>
    </AppBar>
  );
});
