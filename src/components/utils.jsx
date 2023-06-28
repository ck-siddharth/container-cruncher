export const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const topOffset = element.offsetTop;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };
  