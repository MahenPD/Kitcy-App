function openToast(message){

	$("#popupBasic").empty();
	
	var str = `<span> ${message} <a href="#" data-rel="back" class="toast-close">OK</a> </span>`;
        myClone1 = $(str);      
        myClone1.appendTo("#popupBasic").trigger('create');

	$( "#popupBasic" ).popup( "open", {positionTo: "#toast-area", transition: "pop"});

	setTimeout(() => {
	  // Invoke the close() method after 3seconds
	  $( "#popupBasic" ).popup( "close");
	}, 3000);
  }

  