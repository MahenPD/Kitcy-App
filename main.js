var mailBody;
var itemList = [];
var favList = [];
var userList = [];
var reviewList = [];

window.addEventListener(
  "load",
  function () {
    document.getElementById("stage-one").style.display = "block";
    document.getElementById("stage-two").style.display = "none";
    document.getElementById("stage-three").style.display = "none";
    document.getElementById("stage-four").style.display = "none";
    document.getElementById("stage-five").style.display = "none";

    document.getElementById("stage-one-image").style.display = "block";
    document.getElementById("stage-two-image").style.display = "none";
    document.getElementById("stage-three-image").style.display = "none";
    document.getElementById("stage-four-image").style.display = "none";
    document.getElementById("stage-five-image").style.display = "none";

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
  var foodFavList = JSON.parse(sessionStorage.getItem("foodFavList"));
  var itemname = document.getElementById("item-name").textContent;
  var itemrestaurant = "Cathy Desserts";
  var itemprice = document.getElementById("item-price").textContent;
  var favItem = {
    name: itemname,
    restaurant: itemrestaurant,
    price: itemprice,
  };

  if (foodFavList) {
    foodFavList.push(favItem);
  } else {
    foodFavList = [];
    foodFavList.push(favItem);
  }
  sessionStorage.setItem("foodFavList", JSON.stringify(foodFavList));
  loadFavourites();
}

function loadFavourites() {
  var favourites = JSON.parse(sessionStorage.getItem("foodFavList"));

  var output = "";

  $.each(favourites, function (index, fav) {
    output += `
    <li class="list-group-item">
    <div class="row">
      <div class="col">
        <img src="images/blueberry.jpg" class="fav-list rounded" />
      </div>
      <div class="col text-left p-0">
        <p class="p1">${fav.name}</p>
        <p class="p2">Desserts</p>
        <p class="p1">LKR ${fav.price}</p>
        <a
          href="#popup-remove"
          rel="external"
          data-rel="popup"
          data-transition="pop"
          ><img
            src="../assets/icons/trash-red.svg"
            height="20px"
            alt=""
        /></a>
      </div>
    </div>
  </li>
    `;
  });

  document.getElementById("fav-food-list").innerHTML = output;
}

function handleRegister() {
  var users = JSON.parse(sessionStorage.getItem("listOfUsers"));
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  if (users) {
    users.push(newUser);
  } else {
    users = [];
    users.push(newUser);
  }
  sessionStorage.setItem("listOfUsers", JSON.stringify(users));
}

function handleLogin() {
  var users = JSON.parse(sessionStorage.getItem("listOfUsers"));
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var loggedInUser = users.find((x) => x.email === email);

  if (loggedInUser.password === password) {
    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    window.location.href = "./Home.html";
  } else {
    openToastiPhone("Wrong Credentials Please Try Again");
  }
}

function sendReview() {
  var reviews = JSON.parse(sessionStorage.getItem("reviewList"));
  var reviewByUser = document.getElementById("review").value;
  var rating = 0;
  if (document.getElementById("star4").checked) {
    rating = document.getElementById("star4").value;
  } else if (document.getElementById("star3").checked) {
    rating = document.getElementById("star3").value;
  } else if (document.getElementById("star2").checked) {
    rating = document.getElementById("star2").value;
  } else if (document.getElementById("star1").checked) {
    rating = document.getElementById("star1").value;
  }

  const reviewObject = {
    rating: rating,
    review: reviewByUser,
  };

  if (reviews) {
    reviews.push(reviewObject);
  } else {
    reviews = [];
    reviews.push(reviewObject);
  }

  sessionStorage.setItem("reviewList", JSON.stringify(reviews));
  loadReviews();
}

function loadReviews() {
  var reviews = JSON.parse(sessionStorage.getItem("reviewList"));

  var output = "";

  $.each(reviews, function (index, review) {
    output += `
      <div class="row">
      <div class="col-2">
        <img
          src="../assets/icons/person-yellow.svg"
          alt=""
          class="bg-success rounded-circle p-2"
          height="50px"
        />
      </div>
      <div class="col-8">
        <div class="heading2">${review.review}</div>
        <div class="d-flex align-items-center">
          <img
            src="../assets/icons/star-filled.svg"
            alt=""
            height="23px"
          />
          <p class="mx-1" style="margin-bottom: 0; color: gray">${review.rating}</p>
          <a href="ReplyToRating.html" rel="external">
            <p class="mx-4 text-success" style="margin-bottom: 0">
              Reply
            </p>
          </a>
        </div>
      </div>
    </div>
    <hr />
    `;
  });

  document.getElementById("ratings-container").innerHTML = output;
}

// function listChallenges() {
//   let output = '';
// $.each(tasks, function (index, task) {
//     if (!(user.completedTaskIds.includes(task.id))) {
//         output += `
//         <li class="chal-item list-group-item-action">
//             <span class="chal-name">${task.name}</span>
//             <span class="chal-points">${task.points} coins</span>
//         </li>
//     `;
//     }
// });

//   $('#challenges').html(output).listview('refresh');
// }
