const navbarScroll = () => {
  document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('hidden');
  });
}

const navbarHighlight = (elOne, elTwo) => {
  elOne.addEventListener('mousemove', function() {
    elTwo.classList.remove('color-grey');
    elTwo.classList.add('color-blue');
  });
  elOne.addEventListener('mouseout', function() {
    elTwo.classList.remove('color-blue');
    elTwo.classList.add('color-grey');
  });
}

export { navbarScroll, navbarHighlight };
