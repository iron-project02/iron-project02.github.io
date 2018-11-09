window.onload = () => {
  console.log(`Running!`);
};

window.onscroll = e => {
  const nav = document.getElementById(`navbar`);
  if (e.target.scrollingElement.scrollTop > 100) nav.classList.add(`nav-fixed`);
  else nav.classList.remove(`nav-fixed`);
};