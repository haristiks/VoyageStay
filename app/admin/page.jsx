import React from "react";
import Status from "./components/Status";
import Datas from "./components/Datas";
import getAllUsers from "./actions/getAllUsers";
import getAllListings from "./actions/getAllListings";
import isAdmin from "@/app/actions/isAdmin";

async function AdminDashboardPage() {
  const Allusers = await getAllUsers();
  const AllProperties = await getAllListings();
  const Admin = await isAdmin();
  return (
    <>
      <main className="sm:p-10 space-y-6">
        <Status Allusers={Allusers} Listings={AllProperties} />
        <Datas Allusers={Allusers} />
      </main>
    </>
  );
}

export default AdminDashboardPage;