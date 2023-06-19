import { roundPrice } from './roundPrice';

export const countSum = (cartItem, productArr) => {
  const combinedArray = cartItem.map(item1 => {
    const arr2 = productArr.find(item2 => item2.id === item1.id);
    return { ...item1, ...arr2, quantity: item1.quantity };
  });

  let cartSumWithoutDiscount = 0;
  let sumDiscount = 0;
  let sumWithDiscount = 0;

  combinedArray.forEach(item => {
    cartSumWithoutDiscount += Number(item.price * item.quantity);
    sumWithDiscount += (roundPrice(item) * item.quantity);
    sumDiscount += Number(item.price * item.quantity) - (roundPrice(item) * item.quantity);
  });

  localStorage.setItem('cartSumWithoutDiscount', JSON.stringify(cartSumWithoutDiscount));
  localStorage.setItem('sumWithDiscount', JSON.stringify(sumWithDiscount));
  localStorage.setItem('sumDiscount', JSON.stringify(sumDiscount));

  return { cartSumWithoutDiscount, sumWithDiscount, sumDiscount };
};
