function openPopup(){

	$( "#popup-area" ).popup( "open", {transition: "pop"});

  }

  function openToastiPhone(message){

	$("#popupBasic").empty();
	
	var str = `<span> ${message} <a href="#" data-rel="back" class="toast-close">OK</a> </span>`;
        myClone1 = $(str);      
        myClone1.appendTo("#popupBasic").trigger('create');

	$( "#popupBasic" ).popup( "open", {positionTo: "#iphone-area", transition: "pop"});

	setTimeout(() => {
	  // Invoke the close() method after 3seconds
	  $( "#popupBasic" ).popup( "close");
	}, 3000);
  }

  function popupConfirm(){
    $( "#popup-remove" ).popup( "close", {transition: "pop"});

  }

  
