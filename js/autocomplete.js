let placeSearch, autocomplete;
const componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
};

function initAutocomplete() {
    // Create the autocomplete object, restricting the search predictions to
    // geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('location'), { types: ['geocode'] });

    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);

    // Bias the location results to Beverly Hills area
    var geolocation = {
        lat: 34.07362,
        lng: - 118.40036
    };
    var circle = new google.maps.Circle(
        { center: geolocation, radius: 5000 });
    autocomplete.setBounds(circle.getBounds());

    /*  Alternatively can be based on user location     */
   
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         var geolocation = {
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude
    //         };
    //         var circle = new google.maps.Circle(
    //             { center: geolocation, radius: position.coords.accuracy });
    //         autocomplete.setBounds(circle.getBounds());
    //     });
    // }
}

function fillInAddress() {
    // Get the place details from the autocomplete object.
    const place = autocomplete.getPlace();

    for (let component in componentForm) {
        // document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    for (let i = 0; i < place.address_components.length; i++) {
        let addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
            let val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
            document.getElementById('submit').disabled = false;
        }
    }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         var geolocation = {
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude
    //         };
    //         var circle = new google.maps.Circle(
    //             { center: geolocation, radius: position.coords.accuracy });
    //         autocomplete.setBounds(circle.getBounds());
    //     });
    // }
    var geolocation = {
        lat: 34.07362,
        lng: - 118.40036
    };
    var circle = new google.maps.Circle(
        { center: geolocation, radius: position.coords.accuracy });
    autocomplete.setBounds(circle.getBounds());
}

const display = {
    school: document.getElementById('school_name'),
    phone: document.getElementById('school_number'),
    address: document.getElementById('school_address'),
    error: document.getElementById('no_results')
}