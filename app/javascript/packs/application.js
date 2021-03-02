// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// -----------------------------------------------------------------------------
// External
import 'bootstrap';

// Import functions here:
import { navbarScroll } from '../components/navbar';
import { navbarHighlight } from '../components/navbar';

// Element Selectors
const about = document.getElementById('about-section');
const solutions = document.getElementById('solutions-section');
const contact = document.getElementById('contact-section');

const aboutNavbar = document.getElementById('about-navbar');
const solutionsNavbar = document.getElementById('solutions-navbar');
const contactNavbar = document.getElementById('contact-navbar');

// Call functions:
document.addEventListener('turbolinks:load', () => {
  navbarScroll();
  navbarHighlight(about, aboutNavbar);
  navbarHighlight(solutions, solutionsNavbar);
  navbarHighlight(contact, contactNavbar);
});
