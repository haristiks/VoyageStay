"use client";

import { suspendUser } from "../actions/SuspendUser";
import { unSuspendUser } from "../actions/UnSuspendUser";

function ActionButton({ actionLabel, actionId }) {
  const handleSuspend = () => {
    suspendUser(actionId);
  };

  const handleUnSuspend = () => {
    unSuspendUser(actionId);
  };

  return (
    <div
      className={`${
        actionLabel == "unsuspend"
          ? "bg-blue-500 active:bg-blue-600"
          : "bg-pink-500 active:bg-pink-600"
      } uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1`}
      style={{ transition: "all .15s ease" }}
      onClick={actionLabel == "suspend" ? handleSuspend : handleUnSuspend}
    >
      {actionLabel}
    </div>
  );
}

export default ActionButton;
