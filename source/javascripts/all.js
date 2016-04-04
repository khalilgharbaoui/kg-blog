$(document).ready(function() {
  var $grid = $('.grid').packery({
    // disable initial layout
    itemSelector: '.grid-item',
    gutter: 20,
    percentPosition: true,
    transitionDuration: '0.5s',
    initLayout: true,
    columnWidth: 1,
    resize: true

  });
  // bind event
  // $grid.packery('on', 'layoutComplete', function() {});
  // trigger initial layout
  $grid.imagesLoaded().progress(
    function() {
      $grid.packery();
    });


    var $stamp = $grid.find('.stamp');
    var isStamped = false;


    function aboutMe() {
      $('.toggle-stamp-button').on('click', function() {
        // stamp or unstamp element

        if (isStamped) {
          $grid.packery('unstamp', $stamp);
          $('.grid-item--aboutme').removeClass("visable");
          $('.grid-item--aboutme').addClass("hidden");
          $("html, body").animate({
            scrollTop: 0
          }, 600);

        } else {
          $grid.packery('stamp', $stamp);
          $('.grid-item--aboutme').addClass("visable");
          $('.grid-item--aboutme').removeClass("hidden");
          $("html, body").animate({
            scrollTop: 0
          }, 600);

        }
        // trigger layout
        $grid.packery('layout');
        // set flag
        isStamped = !isStamped;

      });

    }
    aboutMe();


    $grid.infinitescroll({
      // infinite scroll options
      navSelector: ".navi",
      // selector for the paged navigation (it will be hidden)
      nextSelector: ".nextpage",
      // selector for the NEXT link (to page 2)
      itemSelector: ".grid-item",
      // selector for all items you'll retrieve
      debug: true,
      // enable debug messaging ( to console.log )
      animate: true,
      extraScrollPx: 350,
      localMode: false
    }, function(newItems) {
      var $newItems = $(newItems);

      $grid.packery('appended', $newItems);
      // this one make blog posts drageble
      // $newItems.each( makeEachDraggable );
      $grid.infinitescroll('pause');

    });
    $grid.infinitescroll('pause');

    // // make all grid-items draggable
    // $grid.find('#looitem').each( function( i, gridItem ) {
    //   var draggie = new Draggabilly( gridItem );
    //   // bind drag events to Packery
    //   $grid.packery( 'bindDraggabillyEvents', draggie );
    // });
    // $grid.find('#loopitem').each( makeEachDraggable );
    // // bind draggabilly events to item elements

    // function makeEachDraggable( i, gridItem ) {
    //   // make element draggable with Draggabilly
    //   var draggie = new Draggabilly( gridItem );
    //   // bind Draggabilly events to Packery
    // $grid.packery( 'bindDraggabillyEvents', draggie );
    // }
    if (window.location.pathname === '/about/' ||
    window.location.pathname === '/my-work/' ||
    window.location.pathname === '/blog/'
  ) {

      $("#back-button").hide();
      $("#about-me-button").show();
      $("#my-work-button").show();
      $("#blog-button").show();
      $("#contact-me-button").show();
    }
    else {
      $("#back-button").show();
      $("#about-me-button").hide();
      $("#my-work-button").hide();
      $("#blog-button").hide();
      $("#contact-me-button").hide();

    }




    // portfolio flipper start

    function flipThis(e) {
    var $this;
    if($(e.currentTarget).prop('tagName')=="BUTTON")
        $this = $(this).closest('.grid-item-large');
    else
        $this = $(this);
    console.log($this);
    var card = $this.find('.flipcard');
    var front = $this.find('.flipcard-front');
    var back = $this.find('.flipcard-back');
    var tallerHight = Math.max(front.height(), back.height()) + 'px';
    var visible = front.hasClass('ms-front-flipped') ? back : front;
    var invisible = front.hasClass('ms-front-flipped') ? front : back;
    var hasTransitioned = false;
    var onTransitionEnded = function () {
        hasTransitioned = true;
        card.css({
            'min-height': '0px'
        });
        visible.css({
            display: 'none',
        });
        // setting focus is important for keyboard users who might otherwise
        // interact with the back of the card once it is flipped.
        invisible.css({
            position: 'relative',
            display: 'inline-block',
        }).find('button:first-child,a:first-child').focus();
    }

    // portfolio flipper end


    // this is bootstrap support, but you can listen to the browser-specific
    // events directly as well
    card.one($.support.transition.end, onTransitionEnded);

    // for browsers that do not support transitions, like IE9
    setTimeout(function () {
        if (!hasTransitioned) {
            onTransitionEnded.apply();
        }
    }, 2000);

    invisible.css({
        position: 'absolute',
        display: 'inline-block'
    });

    card.css('min-height', tallerHight);
    // the IE way: flip each face of the card
    front.toggleClass('ms-front-flipped');
    back.toggleClass('ms-back-flipped');
    // the webkit/FF way: flip the card
    card.toggleClass('card-flipped');
}

$('button.flip-it').click(flipThis);
$('div.flip-it').click(flipThis);




  });

  function fire() {

    var tt = setInterval(function() {
      $('.grid').infinitescroll('resume');
      $('.grid').infinitescroll('scroll');

    }, 500);

    setTimeout(function() {
      clearInterval(tt);
    }, 5000);
  }

  function resumeInfiniteScroll(event) {
    event.preventDefault();
    fire();
  }
  var top = 0;
  $(window).scroll(function() {
    if ($(this).scrollTop() > 98 && top != 100) {
      top = 100;
      $('header').addClass("sticky");

    } else if ($(this).scrollTop() <= 100 && top != 0) {
      top = 0;
      $('header').removeClass("sticky");

      $('.social-footer li a').removeClass('hovered');

    }
  });

  $(window).on("scroll", function() {
    $('.social-footer li a').toggleClass('hovered');
  });

  $(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});
