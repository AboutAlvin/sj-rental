"use strict";function wfc_different_address(){var i=document.querySelectorAll(".woocommerce-billing-fields .address-field, #billing_city_field, #billing_company_field"),e=document.querySelector("#ship-to-different-address-checkbox");if(null==e)return!1;1==e.checked&&i.forEach(function(e){slideUp(e)}),e.addEventListener("change",function(e){1==e.currentTarget.checked?i.forEach(function(e){slideUp(e)}):i.forEach(function(e){e.classList.contains("is-hidden")||slideDown(e)})})}wfc_different_address();