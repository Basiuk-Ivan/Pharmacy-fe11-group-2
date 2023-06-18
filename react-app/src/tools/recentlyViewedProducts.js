const recentlyViewedProducts = item => {
  const viewedItems = JSON.parse(localStorage.getItem('viewedProducts')) || [];
  if (!viewedItems.includes(item)) {
    viewedItems.unshift(item);
  } else {
    const itemIndex = viewedItems.indexOf(item);
    viewedItems.splice(itemIndex, 1);
    viewedItems.unshift(item);
  }
  localStorage.setItem('viewedProducts', JSON.stringify(viewedItems));
};

export default recentlyViewedProducts;
