import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Payment = () => {
  const { id } = useParams();
  //   console.log("payment session id", id);
  return (
    <div>
      <SectionTitle
        heading={"Payment Gateway"}
        subheading={"continue payment for purchase"}
      />
      <Elements stripe={stripePromise}>
        <CheckoutForm id={id} />
      </Elements>
    </div>
  );
};

export default Payment;
