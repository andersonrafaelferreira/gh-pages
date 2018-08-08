$(document).ready(function () {

    if ($(document).width() > 1024) {

        $('ul.nav li.dropdown').hover(function () {

            $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(200);
        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(100);
        });

        console.log('bigger screen than a mobile mobile');


    } else {
        console.log('mobile does not apply');
    }
});

/*
function toggleMenu() {
    console.log('toggleMenu');
    var element = document.getElementsByClassName("navbar-toggle");
    element[0].classList.toggle("toggled");
}
*/

document.querySelector('.navbar-toggle').addEventListener('click', function () {
    document.querySelector('.navbar-toggle').classList.toggle("toggled");
    console.log('querySelected');
});
