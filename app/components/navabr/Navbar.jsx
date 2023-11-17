"use client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Categories from "./Categories";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";


function Navbar() {
  const { data: session } = useSession();
  const currentUser = session?.user;
  const pathname = usePathname();

  const isAdminPage = pathname == "/admin";

  if (isAdminPage) {
    return null;
  }

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
        <Categories />
      </div>
    </div>
  );
}

export default Navbar;
