const navbarScroll = () => {
  document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('hidden');
  });
}

export { navbarScroll };

