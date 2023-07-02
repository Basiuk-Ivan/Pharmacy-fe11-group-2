export const updateQuantity = async productItem => {
  const res = await fetch(
    // `http://localhost:3004/api/product/${productItem.id}`
    `${process.env.VITE_API_URL}/api/product/${productItem.id}`,

    {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        quantity: productItem.quantityStore - productItem.quantity
      })
    }
  );
  return res.json();
};
