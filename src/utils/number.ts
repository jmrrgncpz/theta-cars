export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(price);
};
