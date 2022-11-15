export const formatPrice = (number) => {
  const formattedPrice = new Intl.NumberFormat("et-EE", {
    style: "currency",
    currency: "EUR",
  }).format(number);
  return formattedPrice;
};
