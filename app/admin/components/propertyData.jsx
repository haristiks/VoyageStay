"use client";

import axios from "@/lib/axios";

import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

async function PropertyData({ properties, Admin }) {
  const toApprove = properties.filter((item) => item.adminApproved == false);
  const router = useRouter();

  const handleApprove = async (listingId) => {
    try {
      const resp = await axios.patch(
        `/api/admin/properties/${listingId}`,
        { adminApproved: true },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Admin?.accessToken}`,
          },
        }
      );
      toast.success(resp.data.message);
      router.refresh();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="row-span-3 bg-white shadow rounded-lg">
      <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
        <span>Pending Property Listings</span>
      </div>
      <div className="overflow-y-auto" style={{ maxHeight: "24rem" }}>
        <ul className="p-6 space-y-6">
          {toApprove?.map((item) => (
            <li className="flex items-center" key={item._id}>
              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src={item.imageSrc || "/images/Placeholder.png"}
                  alt="property image"
                />
              </div>
              <span
                className="text-gray-600 cursor-pointer"
                onClick={() => router.push(`/listings/${item._id}`)}
              >
                {item.title}
              </span>
              {/* <button
                className="ml-auto font-semibold bg-slate-200 rounded p-2"
                onClick={() => router.push(`/admin/${item._id}`)}
              >
                view details
              </button> */}
              <button
                className="ml-auto font-semibold bg-slate-200 rounded p-2"
                onClick={() => handleApprove(item._id)}
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PropertyData;
