$(document).ready(function () {
    if(localStorage.app != undefined){
        var filterObject = JSON.parse(localStorage.app);
        filterAndDisplay(filterObject);
    }
})


let items = [
    {
        id: 1,
        name: "BBQ Chicken Thigh",
        deliverFee: 90,
        Dietary: "",
        price: 900,
        deliverTime: 50,
        img: "images/mgg-vitchakorn-J5ZivsKiu9c-unsplash 1.png"
    },
    {
        id: 2,
        name: "Cheese Ravioli",
        deliverFee: 90,
        Dietary: "",
        price: 600,
        deliverTime: 30,
        img: "images/ravioli1.png"
    },
    {
        id: 3,
        name: "Ramen Miso",
        deliverFee: 90,
        Dietary: "gluten-free",
        price: 800,
        deliverTime: 20,
        img: "images/ramen1.png"
    },
    {
        id: 4,
        name: "Blueberry Cheesecake",
        deliverFee: 90,
        Dietary: "vegetarian",
        price: 900,
        deliverTime: 50,
        img: "images/blueberry.jpg"
    },
    {
        id: 5,
        name: "BBQ Chicken Thigh",
        deliverFee: 90,
        Dietary: "",
        price: 900,
        deliverTime: 50,
        img: "images/mgg-vitchakorn-J5ZivsKiu9c-unsplash 1.png"
    },
    {
        id: 6,
        name: "Meat Pie",
        deliverFee: 90,
        Dietary: "",
        price: 1200,
        deliverTime: 40,
        img: "images/meatpie.jpg"
    },
    {
        id: 7,
        name: "Choc Chip Cookies",
        deliverFee: 90,
        Dietary: "gluten-free",
        price: 800,
        deliverTime: 30,
        img: "images/cookies.jpg"
    },
    {
        id: 8,
        name: "Puff Pastries with Ground Meat",
        deliverFee: 90,
        Dietary: "",
        price: 500,
        deliverTime: 50,
        img: "images/pastries.jpg"
    },

];




function filterAndDisplay(filterObj) {
    price = filterObj.price;
    dietary = filterObj.dietary;
    deliveryFee = filterObj.deliveryFee;
    sort = filterObj.sort;

    console.log(price, dietary, deliveryFee, sort)


    $("#filter-results").empty();

    var result = items;

    if (dietary != undefined) {
        result = result.filter(function (item) {
            console.log(item.Dietary, dietary)
            return item.Dietary == dietary;
        });
    }

    if (deliveryFee != undefined) {
        result = result.filter(function (item) {
            console.log(item.deliverFee, deliveryFee)

            return item.deliverFee == deliveryFee;
        });
    }

    if (price != undefined) {
        result = result.filter(function (item) {
            console.log(item.price, price)

            return item.price >= price && item.price <= price+500;
        });
    }

    if(sort == "favs"){
        

    }else if(sort == "popular"){

    }else if(sort == "rating"){
        result.sort(function(a,b){
            return a.price-b.price
        });
        
    }else if(sort == "delivery"){
        result.sort(function(a,b){
            return a.deliverTime-b.deliverTime
        });

    }

    
    let output = '';
    $.each(result, function (index, item) {


        output += `
            
            <div class="col-sm-12 col-md-6 col-xl-3">
            <div class="card food-card-filter">
            <a href="FoodItem.html" rel="external">
            <div class="filter-card-img" style="background-position: center; background-size: cover; background-image: url('${item.img}')">
              </div>
            </a>
            <img class="yellow" src="images/yellowstroke.png" />

            <div class="card-body">
              <div class="row">
                <div class="col-8">
                  <p class="card-text p1">${item.name}</p>
                  <p class="card-text p2">${item.deliverTime} - ${item.deliverTime + 5} min</p>
                </div>
                <div class="col-4">
                  <p class="card-text p1">LKR ${item.price}</p>
                  <p class="card-text p2">${item.Dietary}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        `;

    });

    myClone1 = $(output);
    myClone1.appendTo("#filter-results").trigger("create");

    

}

function saveFilterValues(){
    price = $('input:radio[name=radio-choice-h-2]:checked').val();
    dietary = $('input:radio[name=radio-choice-h-4]:checked').val();
    deliveryFee = $('input:radio[name=radio-choice-h-3]:checked').val();
    sort = $('input:radio[name=radio-choice-w-6]:checked').val();

    var filterObj = new Object();
    filterObj.price = price;
    filterObj.dietary = dietary;
    filterObj.deliveryFee = deliveryFee;
    filterObj.sort = sort;

    localStorage.clear();

    localStorage.app= JSON.stringify(filterObj);

    document.location.href = 'filter-results.html';
}

