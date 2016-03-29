//packerry
// initialize Packery
$(document).ready(function() {


  $('.grid').packery({
    // options
    itemSelector: '.grid-item',
    gutter: 20,
    percentPosition: true,
    transitionDuration: '0.5s',
    initLayout: false

  });



  var $grid = $('#bloggrid').packery({
    itemSelector: '#loopitem',
    gutter: 20,
    percentPosition: true,
    transitionDuration: '0.5s',
      initLayout: false
  });


  // bind event
$grid.packery( 'on', 'layoutComplete', function() {
  console.log('layout is complete');
  $grid.packery();
});





  var $stamp = $grid.find('.stamp');
  var isStamped = false;





  function aboutMe() {
    $('.toggle-stamp-button').on('click', function() {
      // This will change the URL fragment. The change is reflected
      // on your browser's address bar as well


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

  // if (window.location.pathname === '/about' && window.location.hash === '#aboutMe') {
  //
  //
  //   $( document ).ready(function() {
  //     $grid.packery('stamp', $stamp);
  //     $('.grid-item--aboutme').addClass("visable");
  //     $('.grid-item--aboutme').removeClass("hidden");
  //     $("html, body").animate({
  //       scrollTop: 0
  //     }, 600);
  //     // trigger layout
  //     $grid.packery('layout');
  //     // set flag
  //     isStamped = !isStamped;
  //     aboutMe();
  //
  //   });
  // }

$grid.infinitescroll({
    // infinite scroll options

    navSelector: ".navi",
    // selector for the paged navigation (it will be hidden)
    nextSelector: ".nextpage",
    // selector for the NEXT link (to page 2)
    itemSelector: "#loopitem",
    // selector for all items you'll retrieve
    debug: false,
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
});

function fire() {

  setInterval(function() {
    $('.grid').infinitescroll('resume');
    $('.grid').infinitescroll('scroll');
  }, 1000);
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
  }
});

// var top = 0;
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 1 && top != 5) {
//         top = 5;
//         $('footer').addClass("sticky");
//     } else if ($(this).scrollTop() <= 5 && top != 0) {
//         top = 0;
//         $('footer').removeClass("sticky");
//     }
// });
