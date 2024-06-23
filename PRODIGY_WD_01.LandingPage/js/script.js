let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}
const headerE1 = document.querySelector('.header');


window.addEventListener('scroll',()=>
{
   if(window.scrollY > 50)
   {
      headerE1.classList.add('header-scrolled');
     
   }
   else if(window.scrollY <=50)
   {
      headerE1.classList.remove('header-scrolled');
    
   }
})
var swiper = new Swiper(".home-slider", {
   spaceBetween: 30,
   centeredSlides:true,
   clickable:true,
   autoplay: {
    delay: 5500,
    disableOnInteration:true,
   },
   pagination: {
     el: ".dot-container",
     clickable: true,
   },
   loop:true,
});
var swiper = new Swiper(".reviews-slider", {
   spaceBetween: 20,
   grabCursor:true,
   loop:true,
   pagination: {
     el: ".dot-container",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});