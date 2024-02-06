let autocomplete;
let address1Field;
let address2Field;
let postCodeField;

function initAutocomplete()
{
    address1Field = document.querySelector("#address_address1");
    address2Field = document.querySelector("#address_address2");
    postCodeField = document.querySelector("#address_postalCode");
  
    autocomplete = new google.maps.places.Autocomplete(address1Field, {
            componentRestrictions: { country: ["fr"] },
            fields: ["address_components", "geometry"],
            types: ["address"],
        });

    address1Field.focus();

    autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress()
{
    const place = autocomplete.getPlace();
}

window.initAutocomplete = initAutocomplete;