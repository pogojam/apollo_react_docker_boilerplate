import { observable, action, autorun } from "mobx";
import { createContext } from "react";

class LayoutStore {
  @observable page = 0;
  @observable drawer = { isOpen: false, side: "left", Component: [] };
  @action changePage = (index) => {
    this.page = index;
    console.log(this.page);
  };
  @action openDrawer = (drawerItem) => {
    this.drawer.isOpen = true;
    this.drawer.Component = drawerItem;
  };

  @action closeDrawer = (drawerItem) => {
    this.drawer.isOpen = false;
    this.drawer.Component = null;
  };
}

const store = (window.store = new LayoutStore());
export default store;

autorun(() => {
  console.log("Logging", store.page);
});
