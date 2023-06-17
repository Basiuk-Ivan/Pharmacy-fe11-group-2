import { roundPrice } from './roundPrice';

export const countSum = (cartItem, productArr) => {
  const combinedArray = cartItem.map(item1 => {
    const item3 = productArr.find(item3 => item3.id === item1.id);
    return { ...item1, ...item3, quantity: item1.quantity };
  });

  let cartSumWithoutDiscount = 0;
  let sumDiscount = 0;
  let sumWithDiscount = 0;

  combinedArray.forEach(item => {
    cartSumWithoutDiscount += Number(item.price * item.quantity);
    sumWithDiscount += (roundPrice(item) * item.quantity);
    sumDiscount += Number(item.price * item.quantity) - (roundPrice(item) * item.quantity);
  });

  return { cartSumWithoutDiscount, sumWithDiscount, sumDiscount };
};
