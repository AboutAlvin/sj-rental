"use strict";function swiperjs(){document.querySelectorAll(".js-swiper").forEach(function(e,t){var n=JSON.parse(e.getAttribute("data-options")),r=e.querySelector(".swiper-button-prev"),s=e.querySelector(".swiper-button-next"),o=new Swiper(e,n);!1==n.navigation&&(r.style.display="none",s.style.display="none"),null!=e.querySelector(".wsb-countdown")&&o&&new countdown})}swiperjs();