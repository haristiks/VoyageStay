"use client";

import Container from "@/app/components/Container";
import { categories } from "@/app/components/navabr/Categories";
import { useCallback, useEffect, useMemo, useState } from "react";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import { makePayment } from "@/app/actions/makePayment";

import axios from "@/lib/axios";
import toast from "react-hot-toast";
import ListingReservation from "@/app/components/listings/ListingReservation";
import { loadStripe } from "@stripe/stripe-js";
import { NextResponse } from "next/server";
import Image from "next/image";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

function ListingClient({ listing, reservations = [], currentUser }) {


  const loginModal = useLoginModal();
  const router = useRouter();

  const disabledDates = useMemo(() => {
    let dates = [];

    reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const [isLoading, setIsloading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState(initialDateRange);

  const onCreateReservation = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    setIsloading(true);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

    // makePayment({
    //   totalPrice,
    //   startDate: dateRange.startDate,
    //   endDate: dateRange.endDate,
    //   listingId: listing?._id,
    // });
    try {
      const resp = await axios.post(
        `/api/users/reservations`,
        {
          totalPrice,
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          listingId: listing?.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser?.accessToken}`,
          },
        }
      );

      const result = stripe.redirectToCheckout({
        sessionId: resp.data.id,
      });

      setDateRange(initialDateRange);

      NextResponse("result :", result);

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsloading(false);
    }

    // .then(() => {
    //   toast.success("listing reserved");

    //   //Redirect to /trips
    //   router.push("/trips");
    // })
  }, [totalPrice, dateRange, listing?.id, currentUser, loginModal]);

  const category = useMemo(() => {
    return categories.find((item) => item.label == listing.category);
  }, [listing]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );

      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
            <div className="order-first mb-10 md:order-last md:col-span-3">
              <div className="w-full h-[30vh] overflow-hidden rounded-xl relative mb-2">
                <Image
                  alt="Image"
                  src="/images/myOffer.jpeg"
                  fill
                  className="object-cover w-full"
                />
                <div className="absolute bottom-2 right-2">
                  <h1 className="bg-inherit p-2 rounded font-bold drop-shadow-md border-dashed border-2 border-orange-600">
                    use promo : <span className="text-white"> FLAT50 </span>
                  </h1>
                </div>
              </div>
              <ListingReservation
                price={listing.price}
                totalPrice={totalPrice}
                onChangeDate={(value) => {
                  setDateRange(value);
                }}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ListingClient;
