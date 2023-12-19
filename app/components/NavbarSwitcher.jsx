"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navabr/Navbar";
import Nav from "../admin/components/Nav";

function NavbarSwitcher({ Admin }) {
  const pathname = usePathname();
 

  const isAdminPage = pathname.startsWith("/admin");

  return isAdminPage ? <Nav Admin={Admin} /> : <Navbar />;
}

export default NavbarSwitcher;
