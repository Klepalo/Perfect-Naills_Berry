"use strict";

jQuery(document).ready(function () {
  jQuery(".header_burger").click(function (event) {
    jQuery(".header_burger,.header_menu").toggleClass("active");
    jQuery("body").toggleClass("lock");
  });
});