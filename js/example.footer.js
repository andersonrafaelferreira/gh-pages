/*

 <!-- scripts -->
    <!-- <?php echo get_template_directory_uri(); ?> -->

    <!-- smooth scrolling -->
    <script src="static/plugins/smoothScrolling/smooth.jquery.min.js"></script>

    <script>
        // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });

    </script>

    <!-- headroom -->
    <script src="static/plugins/headroom/headroom.min.js"></script>
    <script>
        // grab an element
        var myElement = document.querySelector("header");
        console.log(myElement);
        // construct an instance of Headroom, passing the element
        var headroom = new Headroom(myElement);
        // initialise
        headroom.init();

    </script>

    <!-- owl carousel -->
    <script src="static/plugins/owl.carousel/owl.carousel.min.js"></script>

    <script>
        $(document).ready(function() {
            $("#owl-example").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 1]
            });

            $("#owl-example2").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 2,
                itemsDesktop: [1199, 2],
                itemsDesktopSmall: [979, 1]
            });

        });

    </script>

*/
