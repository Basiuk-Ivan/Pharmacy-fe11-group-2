export const updateRating = async (productItem, newValue) => {
  const res = await fetch(
    // `http://localhost:3004/api/product/${productItem.id}`
    `${process.env.VITE_API_URL}/api/product/${productItem.id}`,

    {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        ratingTotal: productItem.ratingTotal + newValue,
        ratingClick: productItem.ratingClick + 1
      })
    }
  );
  return res.json();
};
