class form{constructor(){this.form=".js-form-overlay",this.input=".js-form-overlay .rt-form__input",this.openAll(),this.open()}openAll(){document.querySelectorAll(this.input).forEach(s=>{0<s.value.length?s.closest(this.form).classList.add("is-active"):s.closest(this.form).classList.remove("is-active")})}open(){document.querySelectorAll(this.input).forEach(s=>{s.addEventListener("focus",s=>{s=s.currentTarget;this.openAll(),s.closest(this.form).classList.add("is-active")})})}}new form;