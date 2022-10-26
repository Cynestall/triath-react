import React from "react";
import { useLocation } from "react-router-dom";

export const Success = () => {
  const location = useLocation();
  console.log(location.state);
  //   {
  //     "amount": "50.00",
  //     "access_key": "key",
  //     "merchant_reference": "12",
  //     "status": "finalized",
  //     "payment_method_name": "Swedbank Eesti",
  //     "customer_iban": null,
  //     "payment_uuid": "uuid",
  //     "iat": 1666734887,
  //     "exp": 1666749287
  // }
  const { amount, payment_method_name, exp } = location.state.payload;
  return (
    <div>
      {amount} {payment_method_name} {exp}
    </div>
  );
};
