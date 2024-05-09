export const calculateOverlayPosition = (event, element, overlay) => {
  if (!event) return;
  const x = event.pageX - element.getBoundingClientRect().left;
  const y = event.pageY - element.getBoundingClientRect().top - window.scrollY;

  overlay.style.top = `${y}px`;
  overlay.style.left = `${x}px`;
};
