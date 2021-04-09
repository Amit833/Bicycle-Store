export const addToBasket = (
  emtArray,
  basket,
  type,
  id,
  img,
  price,
  setBasketQuantity
) => {
  // if item isn't included in the array of values of basket objects, add the item to the basket
  if (emtArray.indexOf(type) === -1)
    basket.push({ item: type, id, img, price, quantity: 1 });

  // if item is already in the basket, increment quantity
  basket.forEach((item) => item.item === type && item.quantity++);
  setBasketQuantity(basket.reduce((acc, item) => (acc += item.quantity), 0));

  return basket;
};
