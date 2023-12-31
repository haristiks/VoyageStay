"use client";

import Container from "@/app/components/Container";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function Nav({ Admin }) {
  const router = useRouter();

  return (
    <div className="fixed w-full bg-slate-800 z-10 shadow-sm text-white">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div
              className="cursor-pointer"
              onClick={() => router.push("/admin")}
            >
              Voyage Stay
            </div>
            <div
              className="w-full md:w-auto py-2 cursor-pointer "
              onClick={() => router.push("/admin")}
            >
              Admin Dashboard
            </div>
            {Admin && (
              <div className="relative">
                <div className="flex flex-row items-center gap-3 ">
                  <div
                    className="
            
             text-sm
             font-semibold
             py-3
             px-4
             rounded-full
             hover:bg-slate-700
             transition
             cursor-pointer
            "
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Sign Out
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Nav;
