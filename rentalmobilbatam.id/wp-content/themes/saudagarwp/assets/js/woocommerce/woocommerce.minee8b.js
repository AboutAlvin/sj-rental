function accountFormLogin(){let t=document.querySelector(".js-account-form");if(null==t)return!1;let e=t.querySelector(".js-account-login"),l=t.querySelector(".js-account-register"),n=t.querySelectorAll(".rt-form-login, .account-login-title"),r=t.querySelectorAll(".rt-form-register, .account-register-title");null!==e&&e.addEventListener("click",t=>{n.forEach(t=>{t.style.display="block"}),r.forEach(t=>{t.style.display="none"})}),null!==l&&l.addEventListener("click",t=>{r.forEach(t=>{t.style.display="block"}),n.forEach(t=>{t.style.display="none"})})}function quantityCountInput(){window.addEventListener("load",t=>{let e=document.querySelectorAll('.rt-qty input[type="hidden"]');e.forEach(t=>{t.parentElement.style.display="none"})}),document.addEventListener("click",t=>{let e=t.target.closest(".rt-qty span");if(e&&document.contains(e)){t.preventDefault();let l=e.closest(".rt-qty").querySelector(".qty"),n=parseInt(l.value)||1,r=parseInt(l.getAttribute("max")),i=parseInt(l.getAttribute("min")),o=parseInt(l.getAttribute("step"))||1;if(n>=r){if(l.style.setProperty("pointer-events","none"),n>=r&&e.classList.contains("plus")){let a=localize.stock;alert(a.replace("%s",r))}}else l.style.setProperty("pointer-events","auto");e.classList.contains("plus")?r&&r<=n?l.value=r:isNaN(n)||null==n?l.value=1:l.value=n+o:i&&i>=n?l.value=i:n>i&&(l.value=n-o)}})}function quantityLimitMax(){let t=document.querySelectorAll('.js-quantity-change input[name="quantity"]');t.forEach(t=>{t.addEventListener("keyup",e=>{let l=parseInt(e.target.value),n=parseInt(t.getAttribute("max"));if(!isNaN(n)&&l>n){e.target.value=n;let r=localize.stock;alert(r.replace("%s",n))}})})}function orderbyWidth(){let t=document.querySelector(".orderby");if(null==t)return!1;let e=t.options[t.selectedIndex].text;t.style.width=7*e.length+40+"px"}accountFormLogin(),quantityCountInput(),quantityLimitMax(),orderbyWidth();