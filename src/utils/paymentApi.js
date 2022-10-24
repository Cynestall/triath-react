// https://docs.montonio.com/docs/api/payments

const jose = require("jose");

export async function generateToken() {
  const payload = {
    amount: 50,
    currency: "EUR",
    access_key: process.env.REACT_APP_PAYMENT_ACCESS_KEY,
    merchant_reference: "4",
    merchant_return_url: "http://localhost:3000/collection",
    merchant_notification_url: "https://montonio.com/orders/payment_webhook",
    payment_information_unstructured: "Tarmos",
  };

  const secret = new TextEncoder().encode(
    process.env.REACT_APP_PAYMENT_SECRET_KEY
  );

  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setExpirationTime("10m")
    .sign(secret);

  return jwt;
}
