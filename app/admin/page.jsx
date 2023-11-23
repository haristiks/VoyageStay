import React from "react";
import Status from "./components/Status";
import Datas from "./components/Datas";
import getAllUsers from "./actions/getAllUsers";
import getAllListings from "./actions/getAllListings";
import isAdmin from "@/app/actions/isAdmin";
import getReservations from "./actions/getReservations";

async function AdminDashboardPage() {
  const Allusers = await getAllUsers();
  const AllProperties = await getAllListings();
  const Admin = await isAdmin();
  const Reservations = await getReservations();
  console.log(Admin);
  return (
    <>
      <main className="sm:p-10 space-y-6">
        <Status
          Allusers={Allusers}
          Listings={AllProperties}
          Reservations={Reservations}
        />
        <Datas Allusers={Allusers} />
      </main>
    </>
  );
}

export default AdminDashboardPage;
