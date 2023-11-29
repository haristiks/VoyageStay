import React from "react";
import Success from "./Success";
import axios from "@/lib/axios";
import getCurrentUser from "../actions/getCurrentUser";



export default async function page({ searchParams }) {
  const { rid } = searchParams;
  const currentUser = await getCurrentUser();

  const resp = await axios
    .patch(
      `/api/users/${currentUser?._id}/conformreservation`,
      {
        reservId: rid,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser?.accessToken}`,
        },
      }
    )


  return (
    <>
      <Success data={resp?.data.message}/>
    </>
  );
}
