const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});

const navBar = document.querySelectorAll('.nav-link[data-goto]');
if(navBar.length > 0) {
  navBar.forEach(navItem => {
    navItem.addEventListener('click', onNavBarClick)
  })

  function onNavBarClick(e) {
    const navBarLink = e.target;
    if(navBarLink.dataset.goto && document.querySelector(navBarLink.dataset.goto)) {
      const gotoBlock = document.querySelector(navBarLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

      if(nav.classList.contains('is-active')) {
        hamburger.classList.remove('is-active');
        nav.classList.remove('is-active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      })
      e.preventDefault();
    }
  }
}