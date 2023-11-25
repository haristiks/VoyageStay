"use client";

import { useRouter, useSearchParams } from "next/navigation";

import React from "react";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

function PaginationControls({ hasNextPage, hasPrevPage }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "5";

  return (
    <div className="flex gap-2">
      <button
        // className="bg-blue-500 text-white p-1"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        <BiCaretLeft/>
      </button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        // className="bg-blue-500 text-white p-1"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        <BiCaretRight/>
      </button>
    </div>
  );
}

export default PaginationControls;
