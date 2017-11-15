$(window).scroll(function () {
    // alert('hello');
    var home__nav = $('.home__nav');
    var popular__events_holdr = Math.round($('.popular__events_holdr').offset().top);
    var scrollTop = $(document).scrollTop();

    // console.log(scrollTop + '; ' + popular__events_holdr);
    if(scrollTop > popular__events_holdr){
        // alert('am there');
        home__nav.css({'display': 'block'});
    }else{
        home__nav.css({'display': 'none'});
    }
});

// $(window).scroll(function(e){
//     var $el = $('.fixedElement');
//     var home__nav = $('.home__nav');
//     var popular__events_holdr = Math.round($('.popular__events_holdr').offset().top);
//     var scrollTop = $(document).scrollTop();
//     // var isPositionFixed = ($el.css('position') == 'fixed');
//     // if ($(this).scrollTop() > 200 && !isPositionFixed){
//     //     $('.fixedElement').css({'position': 'fixed', 'top': '0px'});
//     // }
//     // if ($(this).scrollTop() < 200 && isPositionFixed)
//     // {
//     //     $('.fixedElement').css({'position': 'static', 'top': '0px'});
//     // }
// });
//
// function moveScroller() {
//     var $anchor = $(".home__nav");
//     var $scroller = $('#scroller');
//
//     var move = function() {
//         var st = $(window).scrollTop();
//         var ot = $anchor.offset().top;
//         if(st > ot) {
//             $scroller.css({
//                 position: "fixed",
//                 top: "0px"
//             });
//         } else {
//             $scroller.css({
//                 position: "relative",
//                 top: ""
//             });
//         }
//     };
//     $(window).scroll(move);
//     move();
// }