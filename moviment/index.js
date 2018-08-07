$('ul.nav li.dropdown').hover(function () {

    $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(0);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(0);
});


function toggleMenu() {
    console.log('toggleMenu');
    var element = document.getElementsByClassName("navbar-toggle");
    element[0].classList.toggle("toggled");
}
