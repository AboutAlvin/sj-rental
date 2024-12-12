"use strict";function slideUp(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:500;t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.boxSizing="border-box",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,window.setTimeout(function(){t.style.display="none",t.style.removeProperty("height"),t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property")},e)}function slideDown(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:500,a=(t.style.removeProperty("display"),window.getComputedStyle(t).display),a=(t.style.display=a="none"===a?"block":a,t.offsetHeight);t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,t.offsetHeight,t.style.boxSizing="border-box",t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.height=a+"px",t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),window.setTimeout(function(){t.style.removeProperty("height"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property")},e)}function animateCSS(i,n,o,r){return new Promise(function(t,e){var a="animate__".concat(n);i&&(i.classList.add("animate","animate__animated",a,"is-active"),o&&i.style.setProperty("--animate-duration","".concat(o,"ms")),r&&i.style.setProperty("--animate-delay",r),i.addEventListener("animationend",function(){0<n.search("In")?i.classList.remove("animate__animated",a):i.classList.remove("animate","animate__animated",a,"is-active"),t("Animation ended")},{once:!0}))})}function jAnimateCSS(i,n,o,r){return new Promise(function(t,e){var a="animate__".concat(n);i.length&&(i.addClass("animate animate__animated  ".concat(a," is-active")),o&&i.css("--animate-duration","".concat(o,"ms")),r&&i.css("--animate-delay",r),i.on("animationend",function(){0<n.search("In")?i.removeClass("animate__animated ".concat(a)):i.removeClass("animate animate__animated ".concat(a," is-active")),i.off("animationend")}))})}function toogleAnimate(){var t=document.querySelectorAll(".js-animate");document.querySelectorAll(".animate_toggle");t.forEach(function(t){var e=t.getAttribute("data-target")?t.getAttribute("data-target"):t.getAttribute("href"),a=t.getAttribute("data-target")?document.querySelectorAll('[data-target="'.concat(e,'"]')):document.querySelectorAll('[href="'.concat(e,'"]')),i=document.querySelector(e),n=(i.querySelectorAll(".js-animate-close"),{animateIn:i.getAttribute("data-animatein")?i.getAttribute("data-animatein"):"fadeIn",animateOut:i.getAttribute("data-animateout")?i.getAttribute("data-animateout"):"fadeOut",duration:i.getAttribute("data-duration")?i.getAttribute("data-duration"):"300"});t.addEventListener("click",function(t){t.currentTarget.classList.contains("is-active")?(a.forEach(function(t){t.classList.remove("is-active")}),i.classList.remove("animate_toggle"),"slideUp"==n.animateOut?slideUp(i):animateCSS(i,n.animateOut,n.duration)):(a.forEach(function(t){t.classList.add("is-active")}),i.classList.add("animate_toggle"),"slideDown"==n.animateIn?slideDown(i):animateCSS(i,n.animateIn,n.duration))}),document.addEventListener("click",function(t){var e=window.event.target,a=document.querySelectorAll(".animate_toggle"),i=document.querySelectorAll(".js-animate.is-active");(e.classList.contains(".js-animate")||e.closest(".js-animate")||e.closest(".animate_toggle"))&&!e.classList.contains("js-animate-close")||(i.forEach(function(t){t.classList.remove("is-active")}),a.forEach(function(t){var e={animateOut:t.getAttribute("data-animateout")?t.getAttribute("data-animateout"):"fadeOut",duration:t.getAttribute("data-duration")?t.getAttribute("data-duration"):"300"};t.classList.remove("animate_toggle"),"slideUp"==e.animateOut?slideUp(t):animateCSS(t,e.animateOut,e.duration)}))})})}function animateHover(){document.querySelectorAll(".js-hover").forEach(function(t){t.addEventListener("mouseenter",function(t){t.currentTarget.classList.add("is-hover")}),t.addEventListener("mouseleave",function(t){t.currentTarget.classList.remove("is-hover")})})}function animateClick(){document.querySelectorAll(".js-click").forEach(function(t){t.addEventListener("click",function(t){t.preventDefault();t=t.currentTarget;t.classList.contains("is-clicked")?t.classList.remove("is-clicked"):t.classList.add("is-clicked")})})}function checkboxDropdown(){document.querySelectorAll(".js-checkbox-toggle").forEach(function(t){var e=t.getAttribute("data-target"),a=t.querySelector("input[type='checkbox']"),i=document.querySelector(e);1==a.checked&&(i.style.display="block"),a.addEventListener("change",function(t){t.currentTarget;(1==a.checked?slideDown:slideUp)(i)})})}toogleAnimate(),animateHover(),animateClick(),checkboxDropdown();