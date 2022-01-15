function openPopup(){

	$( "#popup-area" ).popup( "open", {transition: "pop"});

  }


  function popupConfirm(){
    $( "#popup-remove" ).popup( "close", {transition: "pop"});
    $( "#popup-redeem-confirm" ).popup( "close", {transition: "pop"});
  }


  function nextslide1(){
    $( "#popup-slide-title" ).text("Cooking Safe Food");
    $( "#popup-slide-content").text("We maintain safety and keep clean while making your food")
    $( "#popup-slide-img").attr("src","assets/review.png")
    $( "#popup-slide-btn").attr("onClick","nextslide2()")
  }

  function nextslide2(){
    $( "#popup-slide-title" ).text("Quick Delivery");
    $( "#popup-slide-content").text("Bringing you your favorite foods at the quickest time possible")
    $( "#popup-slide-img").attr("src","assets/food-delivery.png")
    $( "#popup-slide-btn").attr("onClick","nextslide3()")
  }

  function nextslide3(){
    $( "#popup-area" ).popup( "close");
  }

  
