$(window).scroll(function () {
    var home__nav = $('.home__nav');
    var popular__events_holdr = $('.popular__events_holdr').offset().top;
    var scrollTop = $(document).scrollTop();

    if(scrollTop > popular__events_holdr){
        home__nav.css({'display': 'block'});
    }else{
        home__nav.css({'display': 'none'});
    }
});