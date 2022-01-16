var mailBody;
var itemList = [];
var favList = [];

window.addEventListener(
  "load",
  function () {
    document.getElementById("stage-one").style.display = "block";
    document.getElementById("stage-two").style.display = "none";
    document.getElementById("stage-three").style.display = "none";
    document.getElementById("stage-four").style.display = "none";
    document.getElementById("stage-five").style.display = "none";
    // document.getElementById("stage-six").style.display = "none";

    document.getElementById("stage-one-image").style.display = "block";
    document.getElementById("stage-two-image").style.display = "none";
    document.getElementById("stage-three-image").style.display = "none";
    document.getElementById("stage-four-image").style.display = "none";
    document.getElementById("stage-five-image").style.display = "none";
    // document.getElementById("stage-six-image").style.display = "none";

    setTimeout(() => {
      document.getElementById("stage-one").style.display = "none";
      document.getElementById("stage-two").style.display = "block";

      document.getElementById("stage-one-image").style.display = "none";
      document.getElementById("stage-two-image").style.display = "block";
    }, 3000);

    setTimeout(() => {
      document.getElementById("stage-two").style.display = "none";
      document.getElementById("stage-three").style.display = "block";

      document.getElementById("stage-two-image").style.display = "none";
      document.getElementById("stage-three-image").style.display = "block";
    }, 6000);

    setTimeout(() => {
      document.getElementById("stage-three").style.display = "none";
      document.getElementById("stage-four").style.display = "block";

      document.getElementById("stage-three-image").style.display = "none";
      document.getElementById("stage-four-image").style.display = "block";
    }, 9000);

    setTimeout(() => {
      document.getElementById("stage-four").style.display = "none";
      document.getElementById("stage-five").style.display = "block";

      document.getElementById("stage-four-image").style.display = "none";
      document.getElementById("stage-five-image").style.display = "block";
    }, 12000);

    // setTimeout(() => {
    //   document.getElementById("stage-five").style.display = "none";
    //   document.getElementById("stage-six").style.display = "block";

    //   document.getElementById("stage-five-image").style.display = "none";
    //   document.getElementById("stage-six-image").style.display = "block";
    // }, 15000);
  },
  false
);

// $(document).ready(function () {
//   $("#land-text").delay(2000).slideDown(500);
// });

function sendFavList(email) {
  var Flist = JSON.parse(sessionStorage.getItem("itemList"));
  mailBody =
    "<html> " +
    "  <body>" +
    "<h1>Your Favourites List</h1>" +
    '  <div id="restuarants" class="ui-body-d">' +
    "<h3>Your Favourite Dishes</h3>" +
    '     <div class="search-tiles dioni-delight">' +
    "        <div>" +
    '         <p class="category-name" style="' +
    '">' +
    // Flist[0].name +
    "Blueberry Cheesecake" +
    " By " +
    // Flist[0].restaurant +
    "Cathys Dessert" +
    " <br /> " +
    "Cheese Raviolli" +
    " By " +
    // Flist[0].restaurant +
    "Mummys Delight" +
    " <br /> " +
    "Ramen Miso" +
    " By " +
    // Flist[0].restaurant +
    "Sushi Kai" +
    " <br /> " +
    "Beef Burger" +
    " By " +
    // Flist[0].restaurant +
    "Street Burger" +
    " <br /> " +
    "Cordon Bleu" +
    " By " +
    // Flist[0].restaurant +
    "Diners Lounge" +
    " <br /> " +
    "</p>" +
    "        </div>" +
    "     </div>" +
    "     </div>" +
    "   </div>" +
    "  </body>" +
    "</html>";
  sendEmail(email);
}

function sendEmail(emailId) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "kitcyfood123@gmail.com",
    Password: "kitcy123",
    To: emailId,
    From: "kitcyfood123@gmail.com",
    Subject: "Favourites List",
    Body: mailBody,
  }).then(function (message) {
    alert("mail sent Successfully");
  });
}

function enableButton(id) {
  len = document.getElementById(id).value.length;

  if (len == 10) {
    document.getElementById("btnOTPtest").disabled = false;
    phoneNumber = document.getElementById(id).value;
  } else {
    document.getElementById("btnOTPtest").disabled = true;
  }
}

function addFavourite() {
  var itemname = document.getElementById("item-name").textContent;
  var itemrestaurant = "Cathy Desserts";
  var favItem = { name: itemname, restaurant: itemrestaurant };
  favList.push(favItem);
  sessionStorage.setItem("favList", JSON.stringify(favList));
}
