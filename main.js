window.addEventListener(
  "load",
  function () {
    document.getElementById("stage-one").style.display = "block";
    document.getElementById("stage-two").style.display = "none";
    document.getElementById("stage-three").style.display = "none";
    document.getElementById("stage-four").style.display = "none";
    document.getElementById("stage-five").style.display = "none";
    document.getElementById("stage-six").style.display = "none";

    document.getElementById("stage-one-image").style.display = "block";
    document.getElementById("stage-two-image").style.display = "none";
    document.getElementById("stage-three-image").style.display = "none";
    document.getElementById("stage-four-image").style.display = "none";
    document.getElementById("stage-five-image").style.display = "none";
    document.getElementById("stage-six-image").style.display = "none";

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

    setTimeout(() => {
      document.getElementById("stage-five").style.display = "none";
      document.getElementById("stage-six").style.display = "block";

      document.getElementById("stage-five-image").style.display = "none";
      document.getElementById("stage-six-image").style.display = "block";
    }, 15000);
  },
  false
);

$(document).ready(function () {
  $("#land-text").delay(2000).slideDown(500);
});

function sendFavList() {
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
    Flist[0].name +
    " By " +
    Flist[0].restaurant +
    "</p>" +
    "        </div>" +
    "     </div>" +
    "     </div>" +
    "   </div>" +
    "  </body>" +
    "</html>";
  sendEmail();
}

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "email.foodlabs@gmail.com",
    Password: "foodlabs123",
    To: "shashane.2017315@iit.ac.lk,gevin.2016375@iit.ac.lk,pubudu.2017154@iit.ac.lk,aravindhan.2016059@iit.ac.lk",
    From: "email.foodlabs@gmail.com",
    Subject: "Favourites List",
    Body: mailBody,
  }).then(function (message) {
    alert("mail sent Successfully");
  });
}
