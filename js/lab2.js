function mouse_move(e){
	$('tr').css("background-color", "white");
	$(e).css("background-color", "red");
}

function move(pos){
//	$('tr').css("background-color", "white");
	if(pos === 1)
	{

		$('tr[backgroundClor="red"]').css("background-color", "white");
	}
	else
	{
		$(e).next().next().css("background-color", "red");
	}
}