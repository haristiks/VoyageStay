import { MoonIcon } from "@heroicons/react/24/solid";
import React from "react";
import LogOutButton from "./Header/LogOutButton";
import Notifications from "./Header/Notifications";
import SearchBox from "./Header/SearchBox";
import UserMenu from "./Header/UserMenu";

const Header = ({ mobileNavsidebar, setMobileNavsidebar }) => {
  return (
    <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
      <MoonIcon
        className="h-12 stroke-slate-600 cursor-pointer sm:hidden"
        onClick={() => setMobileNavsidebar(!mobileNavsidebar)}
      />
      <SearchBox />

      <div className="flex flex-shrink-0 items-center ml-auto">
        <UserMenu />
        <div className="border-l pl-3 ml-3 space-x-1">
          <Notifications />
          <LogOutButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
