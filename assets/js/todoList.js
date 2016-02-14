// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

// click on trash icon to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// add new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear input
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

// click on plus icon to show or hide the input
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});