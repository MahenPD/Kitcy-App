var mailBody;
var itemList = [];
var favList = [];
var userList = [];
var reviewList = [];

function openToastiPhone(message) {
  $("#popupBasic").empty();

  var str = `<span> ${message} <a href="#" data-rel="back" class="toast-close">OK</a> </span>`;
  myClone1 = $(str);
  myClone1.appendTo("#popupBasic").trigger("create");

  $("#popupBasic").popup("open", {
    positionTo: "#iphone-area",
    transition: "pop",
  });

  setTimeout(() => {
    // Invoke the close() method after 3seconds
    $("#popupBasic").popup("close");
  }, 3000);
}

function sendFavList(email) {
  var list = JSON.parse(sessionStorage.getItem("foodFavList"));

  var listTemp = "";

  $.each(list, function (index, item) {
    listTemp += `
    ${item.name} -
    ${item.restaurant} <br/> 
    `;
  });

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
    listTemp +
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
  var image = "images/blueberry.jpg";
  var itemprice = document.getElementById("item-price").textContent;
  var favItem = {
    name: itemname,
    restaurant: itemrestaurant,
    price: itemprice,
    image: image,
  };

  if (foodFavList) {
    foodFavList.push(favItem);
  } else {
    foodFavList = [];
    foodFavList.push(favItem);
  }
  sessionStorage.setItem("foodFavList", JSON.stringify(foodFavList));
  openToast("Added item to your favourite list");
}

function handleRemoveFav(favName = "Blueberry Cheesecake") {
  $("#popup-remove").popup("close", { transition: "pop" });
  var favourites = JSON.parse(sessionStorage.getItem("foodFavList"));
  var filteredFavs = favourites.filter((f) => f.name !== favName);
  sessionStorage.setItem("foodFavList", JSON.stringify(filteredFavs));
  loadFavourites();
  openToast("Removed item from your favourite list");
}

function loadFavourites() {
  var favourites = JSON.parse(sessionStorage.getItem("foodFavList"));

  var output = "";

  $.each(favourites, function (index, fav) {
    output += `
    <li class="list-group-item">
    <div class="row">
      <div class="col">
        <img src="${fav.image}" class="fav-list rounded" />
      </div>
      <div class="col text-left p-0">
        <p class="p1">${fav.name}</p>
        <p class="p2">Desserts</p>
        <p class="p1">${fav.price}</p>
        <a
          href="#popup-remove"
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

  var gameUser = new Object();

  gameUser.id = 12;
  gameUser.name = "Jane Doe";
  gameUser.totalWinnings = 520;
  gameUser.completedTasksNos = 5;
  gameUser.completedTaskIds = [];
  gameUser.score = 2640;
  gameUser.level = 26;
  gameUser.img =
    "https://i.pinimg.com/736x/9c/91/e0/9c91e06b6538e8bb941314a25207835f.jpg";

  localStorage.removeItem("gameUser");

  localStorage.gameUser = JSON.stringify(gameUser);

  sessionStorage.setItem("listOfUsers", JSON.stringify(users));
  window.location.href = "./VerifyEmail.html";
}

function handleLogout() {
  sessionStorage.setItem("firstLogin", JSON.stringify(false));
  window.location.href = "./Login.html";
}

function handleLogin() {
  var users = JSON.parse(sessionStorage.getItem("listOfUsers"));
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var loggedInUser = users.find((x) => x.email === email);

  if (loggedInUser.password === password) {
    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    sessionStorage.setItem(
      "foodFavList",
      JSON.stringify([
        {
          name: "Ramen Miso",
          price: 1800,
          restaurant: "Japanese",
          image: "images/ramen.png",
        },
        {
          name: "Cheese Ravioli",
          price: 1800,
          restaurant: "Pasta",
          image: "images/ravioli.png",
        },
        {
          name: "Beef Burger",
          price: 1800,
          restaurant: "Fast Food",
          image: "images/burger.png",
        },
      ])
    );

    sessionStorage.setItem(
      "reviewList",
      JSON.stringify([
        {
          rating: 5,
          review: "So soft and creamy. I loved it!",
        },
        {
          rating: 3,
          review: "Good Stuff!",
        },
      ])
    );

    var gameUser = new Object();

    gameUser.id = 12;
    gameUser.name = "Jane Doe";
    gameUser.totalWinnings = 520;
    gameUser.completedTasksNos = 5;
    gameUser.completedTaskIds = [];
    gameUser.score = 2640;
    gameUser.level = 26;
    gameUser.img =
      "https://i.pinimg.com/736x/9c/91/e0/9c91e06b6538e8bb941314a25207835f.jpg";

    localStorage.removeItem("gameUser");

    localStorage.gameUser = JSON.stringify(gameUser);

    sessionStorage.setItem("firstLogin", JSON.stringify(true));

    window.location.href = "./Home.html";
  } else {
    openToast("Wrong Credentials Please Try Again");
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
  document.getElementById("review").innerHTML = "";
  loadReviews();
  openToast("Rating and review added successfully");
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
      <div class="reply-cmt-1" id="review-name">${review.review}</div>
      <div class="d-flex align-items-center">
      <img
      src="../assets/icons/star-filled.svg"
      alt=""
      class="reply-star"
      />
      <p class="mx-1" style="margin-bottom: 0; color: gray">${review.rating}</p>
        <p class="mx-4 text-success" style="margin-bottom: 0" onclick="goToReplyRating()">
          Reply
        </p>
      </div>
    </div>
  </div>
    <hr />
    `;
  });

  document.getElementById("ratings-container").innerHTML = output;
}

function addToCart() {
  var cartItems = JSON.parse(sessionStorage.getItem("cart"));
  var itemName = document.getElementById("item-name").textContent;
  var itemPrice = document.getElementById("item-price").textContent.split(" ");
  var itemQuantity = document.getElementById("itemQuantity").value;
  var cartItemObj = {
    name: itemName,
    price: parseInt(itemPrice[1]),
    totalPrice: parseInt(itemPrice[1]) * parseInt(itemQuantity),
    quantity: itemQuantity,
    category: "Dessert",
  };

  if (cartItems) {
    cartItems.push(cartItemObj);
  } else {
    cartItems = [];
    cartItems.push(cartItemObj);
  }
  sessionStorage.setItem("cart", JSON.stringify(cartItems));
  openToast("Item Added to cart successfully");
}

function loadCart() {
  var cartItems = JSON.parse(sessionStorage.getItem("cart"));

  var output = "";
  var totalAmount = 0;

  if (!cartItems || cartItems === 0) {
    output += `
    <li class="list-group-item m-5">
    <div class="row center-element">
    <h1 class="heading1 bold text-center" style="font-size: 20px; margin: 30px">No Cart Items</h1>
    </div>
    </li>
    `;
  } else {
    $.each(cartItems, function (index, item) {
      output += `
        <li class="list-group-item">
                <div class="row">
                  <div class="col">
                    <img src="images/blueberry.jpg" class="fav-list rounded" />
                  </div>
                  <div class="col text-left p-0">
                    <p class="p1" id="item-name">${item.name}</p>
                    <p class="p2">Desserts</p>
                    <p class="p3">LKR ${item.totalPrice}</p>
                    <div class="d-flex">
                      <div class="counter d-flex">
                        <button
                          data-role="none"
                          id="minus"
                          class="incerement-button minus-btn"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          id="quantity"
                          data-role="none"
                          class="kitcy-input-2 text-center quantity-btn"
                          value="${item.quantity}"
                        />
                        <button
                          data-role="none"
                          class="incerement-button plus-btn"
                          id="plus"
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <i
                          ><img
                            src="../assets/icons/trash-red.svg"
                            class="ai-trash-can"
                            alt=""
                        /></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
    `;
    });

    cartItems.map((item) => (totalAmount += item.totalPrice));
  }

  document.getElementById("cart-items-list").innerHTML = output;
  document.getElementById("cart-total").innerHTML = totalAmount;
}

function loadCheckoutDetails() {
  var cartItems = JSON.parse(sessionStorage.getItem("cart"));

  var output = "";
  var totalAmount = 0;

  $.each(cartItems, function (index, item) {
    output += `
    <div class="row">
        <div class="col">
              <h3 class="check-h4">${item.name} X ${item.quantity}</h3>
            </div>
            <div class="col d-flex flex-column align-items-end">
              <h3 class="check-h4">LKR ${item.totalPrice}</h3>
        </div>
        </div>
    `;
  });

  if (cartItems) {
    cartItems.map((item) => (totalAmount += item.totalPrice));
  }

  totalAmount += 90;

  document.getElementById("checkout-section").innerHTML = output;
  document.getElementById("totalAmount").innerHTML = parseInt(totalAmount);
}

function handleSendReply() {
  var allReplies = JSON.parse(sessionStorage.getItem("replies"));

  var reply = document.getElementById("reply-message-input").value;
  var message = document.getElementById("message-reply-input").textContent;

  var replyObj = {
    reply: reply,
    message: message,
  };

  if (allReplies) {
    allReplies.push(replyObj);
  } else {
    allReplies = [];
    allReplies.push(replyObj);
  }

  sessionStorage.setItem("replies", JSON.stringify(allReplies));
  loadReplies();
}

function loadReplies() {
  var replies = JSON.parse(sessionStorage.getItem("replies"));

  var output = "";
  var messageOutput = "";

  if (replies) {
    $.each(replies, function (index, reply) {
      output += `
    <div class="row">
    <div class="col-2">
      <img
        src="../assets/icons/person-yellow.svg"
        alt=""
        class="bg-success"
        height="50px"
      />
    </div>
    <div class="col-8">
      <div class="reply-cmt-1">${reply.message}</div>
      <div class="d-flex align-items-center">
        <img
          src="../assets/icons/star-filled.svg"
          alt=""
          class="reply-star"
        />
        <p class="mx-1" style="margin-bottom: 0; color: gray">4.0</p>
        <p class="mx-4 text-success" style="margin-bottom: 0">Reply</p>
      </div>
    </div>
  </div>
  <div class="d-flex flex-nowrap mx-3 mt-3">
    <img
      src="../assets/icons/reply-handlesvg.svg"
      alt=""
      class=""
      height="20px"
      width="20px"
    />
    <div class="mx-3">${reply.reply}</div>
  </div>
  <hr />
    `;
    });
  } else {
    output += `
    <div class="row">
  </div>
    `;
  }

  var selectedReview = JSON.parse(sessionStorage.getItem("selectedReview"));

  messageOutput += `
  <div class="col-2">
  <img
    src="../assets/icons/person-yellow.svg"
    alt=""
    class="bg-success"
  />
</div>
<div class="col-8">
  <div class="reply-cmt-1" id="message-reply-input">${selectedReview}</div>
  <div class="d-flex align-items-center">
    <img
      src="../assets/icons/star-filled.svg"
      alt=""
      class="reply-star"
    />
    <p class="mx-1" style="margin-bottom: 0; color: gray">4.0</p>
  </div>
</div>
    `;

  document.getElementById("reply-container").innerHTML = output;
  document.getElementById("message-to-reply").innerHTML = messageOutput;
}

function goToReplyRating(review = "So Soft and creamy. Loved It!") {
  sessionStorage.setItem("selectedReview", JSON.stringify(review));
  window.location.href = "./ReplyToRating.html";
}

function handleAccountUpdate() {
  var users = JSON.parse(sessionStorage.getItem("listOfUsers"));
  var email = document.getElementById("email-edit").value;
  var loggedInUser = users.find((x) => x.email === email);

  var newFirstName = document.getElementById("firstname-edit").value;
  var newLastName = document.getElementById("surname-edit").value;
  var newEmail = document.getElementById("email-edit").value;

  loggedInUser.firstName = newFirstName;
  loggedInUser.lastName = newLastName;
  loggedInUser.email = newEmail;

  sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
}
