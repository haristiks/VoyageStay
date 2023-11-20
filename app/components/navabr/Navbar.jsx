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
  const isAdminDashbord = pathname == "/admin/dashboard";

  if (isAdminPage) {
    return null;
  }

  if (isAdminDashbord) {
    return (
      <div className="fixed w-full bg-slate-800 z-10 shadow-sm text-white">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <div>Voyage Stay</div>
              <div className="w-full md:w-auto py-2 ">Admin Dashboard</div>
              <div className="relative">
                <div className="flex flex-row items-center gap-3 ">
                  <div
                    className="
             hidden
             md:block
             text-sm
             font-semibold
             py-3
             px-4
             rounded-full
             hover:bg-slate-700
             transition
             cursor-pointer
            "
                  >
                    Sign Out
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Categories />
        </div>
      </div>
    );
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
