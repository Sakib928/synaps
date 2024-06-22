import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ id }) => {
  // console.log(id);
  const { data: session = {} } = useQuery({
    queryKey: ["sessionDetails", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/singleSession/${id}`);
      return res.data;
    },
  });
  // console.log(session);
  const { user, payment } = useAuth();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  //   const navigate = useNavigate();
  //   console.log(payment);

  useEffect(() => {
    if (payment) {
      axiosSecure
        .post("/create-payment-intent", {
          payment: payment,
        })
        .then((res) => {
          // console.log(res?.data);
          setClientSecret(res?.data.clientSecret);
        });
    }
  }, [axiosSecure, payment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      // console.log("[error]", error);
      setError(error.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    const { paymentIntent, paymentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      }
    );
    if (paymentError) {
      // console.log("payment error");
    } else {
      // console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // console.log("transaction id :", paymentIntent?.id);
        setTransactionId(paymentIntent?.id);
        // now save the payment in the process
        const payment = {
          studentEmail: user.email,
          sessionId: id,
          title: session?.title,
          tutor: session?.tutor,
          tutorEmail: session?.tutorEmail,
          description: session?.description,
          regiStart: session?.regiStart,
          regiEnd: session?.regiEnd,
          classStart: session?.classStart,
          classEnd: session?.classEnd,
          duration: session?.duration,
        };
        const res = await axiosSecure.post("/bookedSessions", payment);
        // console.log("payment saved", res.data);
        if (res.data?.insertedId) {
          toast.success("payment successful");
        }
      }
    }
  };

  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className="input input-bordered max-w-xl border-2 border-black mx-auto">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-success btn-sm my-4 text-white "
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p>
            Transaction ID:{" "}
            <span className="text-green-600">{transactionId}</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
