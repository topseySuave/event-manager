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

$(document).on('click', '#search__view', function () {
    var search__modal = $('.search__modal');
    search__modal.addClass('search__pane');
});

$(document).on('click', '.search__back_btn', function () {
    var search__back_btn = $('.search__back_btn');
    $('#search__modal').modal('close');
    $('.modal-overlay').css({'display': 'none'});
});


