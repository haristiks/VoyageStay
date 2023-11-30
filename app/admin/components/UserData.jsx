"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";


function UserData({ Allusers }) {
  const router = useRouter();
  return (
    <div className="row-span-3 bg-white shadow rounded-lg">
      <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
        <span>Users</span>
      </div>
      <div className="overflow-y-auto" style={{ maxHeight: "24rem" }}>
        <ul className="p-6 space-y-6">
          {Allusers?.map((user) => (
            <li className="flex items-center" key={user._id}>
              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
      
                 <Image
                  alt="user avatar"
                  src={user.image || "/images/Placeholder.png"}
                />
              </div>
              <span className="text-gray-600">{user.name}</span>
              <button
                className="ml-auto font-semibold bg-slate-200 rounded p-2"
                onClick={() => router.push(`/admin/${user._id}`)}
              >
                Manage
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserData;
