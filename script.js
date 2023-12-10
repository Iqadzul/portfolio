// navbar-fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const backbtn = document.querySelector('#backbtn');
  
    if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
      backbtn.classList.remove('hidden');
      backbtn.classList.add('flex');
    } else {
      header.classList.remove('navbar-fixed');
      backbtn.classList.remove('flex');
      backbtn.classList.add('hidden');
    }
  };
  
  // hamburger
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");
  
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });
  
  // click enyware
  window.addEventListener('click', function(e) {
    if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  });

const contactform = document.getElementById("contact-form");

contactform.addEventListener("submit", function(e){
  e.preventDefault();

  const url = e.target.action;
  const formdata = new FormData(contactform)

  fetch(url, {
    method: "POST",
    body: formdata,
    mode: "no-cors"
  }).then(() => {
    alert("Formulir berhasil dikirim!");
  })
  .catch(() => alert("Error occured"))
})