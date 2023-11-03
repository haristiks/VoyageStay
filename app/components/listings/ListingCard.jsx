"use client";

import useCountries from "@/app/hooks/useCountries";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

function ListingCard({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback((e) => {
    e.stopPropagation();

    if (disabled) {
      return;
    }

    onAction?.();
  }, []);

  return <div>ListingCard</div>;
}

export default ListingCard;
