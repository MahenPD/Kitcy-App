

// var POI_Object =
//     {
//         productID: 1,
//         shop: "Nufail bun shop",
//         picture: ["bun.jpg", "cart.png", "cart2.png", "heart.png", "heart2.png", "Sample.mp4"],
//         name: "Chicken Submarine",
//         description: "Home made pasta with sun kissed milk sauce, chilli, olive oil and egg all mixed together Italian pasta....",
//         price: 200,
//         rating: 4,
//         isFavourite : false
//     }

$(document).ready(function () {

    ListOfPOI = JSON.parse(localStorage.POI_Object);

    /* Quantity adjuster */
    // This button will increment the value
    $('[data-quantity="plus"]').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    // This button will decrement the value till 0
    $('[data-quantity="minus"]').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
});

