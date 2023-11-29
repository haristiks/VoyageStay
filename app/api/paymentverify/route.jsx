import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import crypto from "crypto";
import getCurrentUser from "@/app/actions/getCurrentUser";
import toast from "react-hot-toast";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req, res) {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    totalPrice,
    startDate,
    endDate,
    listingId,
  } = await req.json();
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  console.log("id==", body);

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  const currentUser = await getCurrentUser();

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    console.log(Payment);

    await axios
      .post(
        `/api/users/${currentUser?._id}/reservations`,
        {
          totalPrice,
          startDate,
          endDate,
          listingId,
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser?.accessToken}`,
          },
        }
      )
      .then(() => {
        toast.success("listing reserved");
        setDateRange(initialDateRange);
        //Redirect to /trips
        router.push("/trips");
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });

    //  return NextResponse.redirect(new URL('/paymentsuccess', req.url));
  } else {
    return NextResponse.json(
      {
        message: "fail",
      },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json(
    {
      message: "success",
    },
    {
      status: 200,
    }
  );
}
