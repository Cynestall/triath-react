// https://docs.montonio.com/docs/api/payments
export const generatePaymentPayload = (data) => {
  const payload = {
    amount: data.totalAmount,
    currency: "EUR",
    access_key: process.env.REACT_APP_PAYMENT_ACCESS_KEY,
    merchant_reference: data.transactionId,
    checkout_first_name: data.firstName,
    checkout_last_name: data.lastName,
    checkout_email: data.email,
    checkout_phone_number: data.phoneNumber,
    checkout_city: data.cityCounty,
    checkout_address: data.address,
    checkout_postal_code: data.zipCode,
    checkout_products: data.products,
    merchant_return_url: "http://localhost:3000/redirect/",
    merchant_notification_url: "https://montonio.com/orders/payment_webhook",
  };

  return payload;
};
