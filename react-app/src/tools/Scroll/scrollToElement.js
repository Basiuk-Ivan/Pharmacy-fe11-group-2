export const scrollToElement = elementId => {
  const element = document.getElementById(elementId);
  if (element) {
    const scrollTopPosition = element.getBoundingClientRect().top + window.pageYOffset - 150;
    window.scrollTo({ top: scrollTopPosition, behavior: 'smooth' });
  }
};
