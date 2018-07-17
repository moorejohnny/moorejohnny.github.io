$(document).ready(() => {

  /* sticky navbar */
  window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }


  /****************/
  /* FOR ROTATION */
  /****************/
  var $ltr = $('.rotate');
  var $win = $(window);

  $win.on('scroll', function() {
    var top = $win.scrollTop() * 1.8;
    if (top > 360){
      top = 360
    }
    $ltr.css('transform', 'rotate(' + top + 'deg)');
  });

  /***************/
  /* FOR SCALING */
  /***************/
  var $ltr2 = $('.scale');

  $win.on('scroll', function() {
    var grow = (($win.scrollTop() / 64) / 2) + 1;
    //$ltr2.css('transform', 'scale(' + grow + ')');
    $ltr2.css('transform', 'scale(' + grow + ')');
  });

  /***************/
  /* FOR SPACING */
  /***************/
  var $ltr3 = $('.push');

  $win.on('scroll', function () {
    var topo = $win.scrollTop() / 6;
    $ltr3.css('letter-spacing', topo);
  });

  /*******************/
  /* FOR 'M' SPACING */
  /*******************/
  var $m = $('.m');

  $win.on('scroll', function () {
    var topoo = $win.scrollTop() / 2;
    $m.css('padding-top', topoo);
  });


  /**************************/
  /*** TITLE TEXT SPACING ***/
  /**************************/

  $('.title').on('mouseenter', (event) => {
      $(event.currentTarget).addClass('title-active')
    }).on('mouseleave', event => {
      $(event.currentTarget).removeClass('title-active')
  });

  /*************************/
  /*** ROTATION ANIMATION **/
  /*************************/

  $('.icon').on('click', event => {
    $(event.currentTarget).rotate({ count:4, duration:0.6, easing:'ease-out' });
  })


  /****************/
  /*** ANIMATION **/
  /****************/

  var $desc = $('.desc');
  $desc.waypoint(function (direction) {
    if (direction == 'down') {
      $desc.addClass('desc-animate');
    } else {
      $desc.removeClass('desc-animate');
    }
  }, {offset: '80%'});

  var $ghost = $('.ghost');
  $ghost.waypoint(function (direction) {
    if (direction == 'down') {
      $ghost.addClass('ghost-animate');
    } else {
      $ghost.removeClass('ghost-animate');
    }
  }, {offset: '80%'});

  /******************************/
  /* offset for navbar jumping */
  /******************************/
  var shiftWindow = function() { scrollBy(0, -47) };
  window.addEventListener("hashchange", shiftWindow);
  function load() {
    if (window.location.hash) shiftWindow();
  }

});
