if(window.location.pathname === '/'){
    $(window).scroll(function () {
        let home__nav = $('.home__nav');
        let popular__events_holdr = $('.popular__events_holdr').offset().top;
        let scrollTop = $(document).scrollTop();

        if(scrollTop > popular__events_holdr){
            home__nav.css({'display': 'block'});
        }else{
            home__nav.css({'display': 'none'});
        }
    });
}

$(document).on('click', '#search__view', function () {
    let search__modal = $('#search__modal');
    search__modal.addClass('search__pane');
    search__modal.modal('open');
});

$(document).on('click', '.search__back_btn', function () {
    let search__back_btn = $('.search__back_btn');
    $('#search__modal').modal('close');
    $('.modal-overlay').css({'display': 'none'});
});
