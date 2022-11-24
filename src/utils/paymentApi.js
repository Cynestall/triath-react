// https://docs.montonio.com/docs/api/payments

const jose = require("jose");

const secret = new TextEncoder().encode(
  process.env.REACT_APP_PAYMENT_SECRET_KEY
);

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
    merchant_return_url: "http://localhost:3000/redirect/",
    merchant_notification_url: "https://montonio.com/orders/payment_webhook",
  };

  return payload;
};

export async function generateToken(payload) {
  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setExpirationTime("10m")
    .sign(secret);

  return jwt;
}

export async function decodeToken(payment_token) {
  const { payload } = await jose.jwtVerify(payment_token, secret, {
    algorithms: ["HS256"],
  });

  return payload;
}
