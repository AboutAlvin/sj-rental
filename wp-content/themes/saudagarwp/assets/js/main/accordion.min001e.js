class Accordion{constructor(){this.component=".js-accordion",this.item=".rt-accordion__item",this.title=".rt-accordion__title",this.content=".rt-accordion__content",this.toggle="data-toggle",this.open()}deleteAll(){document.querySelectorAll(this.component).forEach(t=>{var e=t.querySelectorAll(this.item),t=t.querySelectorAll(this.content);e.forEach(t=>{t.classList.remove("is-active")}),t.forEach(t=>{t.style.display="none"})})}open(){document.querySelectorAll(this.component).forEach(t=>{var e=t.querySelectorAll(this.item);let o=t.getAttribute(this.toggle);e.forEach(t=>{t=t.querySelector(this.title);t&&t.addEventListener("click",t=>{"true"===o&&this.deleteAll();var t=t.currentTarget.closest(this.item),e=t.querySelector(this.content);(t.classList.contains("is-active")?(t.classList.remove("is-active"),slideUp):(t.classList.add("is-active"),slideDown))(e)})})})}}document.addEventListener("DOMContentLoaded",()=>{new Accordion});