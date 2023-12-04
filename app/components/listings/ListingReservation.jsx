"use client";

import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";

function ListingReservation({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">₹ {price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />

      <div className="p-4 relative">
        <input
          type="text"
          className="
        peer
        w-full
        p-4
        pt-4
        font-bold
        bg-white
        border-2
        rounded-md
        outline:non hover:outline"
          placeholder="Have a Promo Code ?"
        />

        <button className="absolute right-6 bottom-7 bg-rose-500 text-white px-3 py-2 rounded"> APPLY </button>
      </div>

      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>

      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>₹ {totalPrice}</div>
      </div>
    </div>
  );
}

export default ListingReservation;
