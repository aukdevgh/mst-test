 document.addEventListener("DOMContentLoaded", function () {
            const header = document.querySelector(".header");
            window.addEventListener("scroll", function () {
                if (window.scrollY > 10) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }
            });
        });

function myFunction(x) {
  x.classList.toggle("change");

  const menu = document.querySelector('.nav-side-menu')
  const isOpen = menu.classList.contains('open')

  if(!isOpen) {
    menu.classList.add('open')
  } else {
    menu.classList.remove('open')
  }
}
