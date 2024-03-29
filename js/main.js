// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 9.048900, lng: 7.526560 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function() {
    if (this.window.scrollY > 150) {
        document.querySelector('#navbar').computedStyleMap.opacity = 0.7;
    }else {
        document.querySelector('#navbar').computedStyleMap.opacity = 1;
    }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 70
            },
            800
        );
    }
});
