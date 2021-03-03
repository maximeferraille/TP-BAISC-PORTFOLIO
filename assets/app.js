"use strict"

$(document).ready(function() {
  // Q4 Burger menu appears or disappears when the corresponding button is clicked
  // Bind click on nav button
  $(".navbar-toggler").on("click", function() {
    $("#navbarSupportedContent").toggle();
  });

  // Q5 Bind click on each nav link
  $(".nav-link").on("click", function(event) {
    // Q6 Prevent browser default behavior
    event.preventDefault();

    // Q7 Scroll instantly to this position
    $("html, body").animate({ scrollTop: 500 }, 1000);
  });
});