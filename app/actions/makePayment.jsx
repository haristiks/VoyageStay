

export const makePayment = async ({
  totalPrice,
  startDate,
  endDate,
  listingId,
}) => {
  // "use server"
  const key = process.env.RAZORPAY_KEY_ID;
  console.log(key);
  // Make API call to the serverless API
  const data = await fetch("http://localhost:3000/api/razorpay");
  const { order } = await data.json();
  console.log(order.id);
  const options = {
    key: process.env.RAZORPAY_KEY_ID,
    name: "voyagestay",
    currency: order.currency,
    amount: order.amount,
    order_id: order.id,
    description: "Understanding RazorPay Integration",
    // image: logoBase64,
    handler: async function (response) {
      // if (response.length==0) return <Loading/>;
      console.log(response);

      const data = await fetch("http://localhost:3000/api/paymentverify", {
        method: "POST",
        // headers: {
        //   // Authorization: 'YOUR_AUTH_HERE'
        // },
        body: JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          totalPrice,
          startDate,
          endDate,
          listingId,
        }),
      });

      const res = await data.json();

      console.log("response verify==", res);

      if (res?.message == "success") {
        console.log("redirected.......");
        router.push(
          "/paymentsuccess?paymentid=" + response.razorpay_payment_id
        );
      }

      // Validate payment at server - using webhooks is a better idea.
      // alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);
    },
    prefill: {
      name: "mmantratech",
      email: "mmantratech@gmail.com",
      contact: "000000000",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();

  paymentObject.on("payment.failed", function (response) {
    alert("Payment failed. Please try again. Contact support for help");
  });
};
