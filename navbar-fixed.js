/* Fixed Navbar Scrolling */

// init nav object from dom
var nav = $('nav');
// get heigth of the nav
var navHeight = nav.outerHeight();

// click-trigger
$('a[href*="#"]:not([href="#"])').click(function(event) {
  scrollToSection(this);
  event.preventDefault();
});

// scroll-trigger
$(document).scroll(function() {
  activateSection();
});

// get target position and scrolls to it
scrollToSection = (self) => {
  // get the target href
  var href = $(self).attr('href');

  // get the target position
  var targetPos = $(href).offset().top - navHeight + 5;

  // scroll to target
  $('html, body').animate({
    scrollTop: targetPos
  }, 600);
}

// updates active section on scroll
activateSection = () => {
  // get all sections
  var sections = $('.section');

  // store current position on the page when scroll is triggered
  var pos = $(document).scrollTop();

  // check all sections to find the top one
  sections.each(function() {

    // get the top & bottom position of the section
    var top = $(this).offset().top - navHeight;
    var bottom = top + $(this).outerHeight();

    // if the current position is higher (deeper on the page) than the top of the section and it is smaller (heiger on the page) than the bottom of the section, it is the active section.
    if (pos >= top && pos <= bottom) {
      // store the id of this section
      var id = $(this).attr('id');

      if (id) {   // if an id is given, activate the section in the nav
        nav.find('a').removeClass('active');
        nav.find('a[href="#' + id + '"]').addClass('active');
      }
    }
  });
}
