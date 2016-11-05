
function Validate(obj) {
	var nick = document.getElementById('nick').value;
	var email = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;
	var re_pass = document.getElementById('re-pass').value;
	var wind;
	var errors="";
	wind = window.open("res.html","","");
	if (nick=="" || pass=="" || re_pass=="" || email=="")
	{
		errors += "Все поля должны быть заполнены!!";

		
		wind.document.write('Все поля должны быть заполнены!!<br>');
	}
	if (pass!=re_pass)
	{
		errors+="Пароли не совпадают!!\n";

		wind.document.write('Пароли не совпадают!!<br>');
		wind.document.write(pass + ' != ' + re_pass);

	}
	
	var rg = /(?=(.*\d){2}(?=(.*[a-z]{2}))(?=(.*[A-Z]{2})))/;

	if (!rg.test(pass))
	{
		errors+="Пароль слишком простой!!\n";
		wind.document.write('Пароль слишком простой!!<br>');
	}
	if (pass.length>9 || pass.length<6)
	{
		errors+="Слишком  пароль!!\n";

		
		wind.document.write('Слишком короткий пароль!!<br>');

	}

	var reg = /^\w+@\w+\.\w{2,4}$/i;
	if (!reg.test(email))
	{
		errors+="Неправильный e-mail адрес!!\n";


		wind.document.write('Неправильный e-mail адрес!! ' + email + '<br>');
	}
	
	if(errors=="")
	{
		wind.document.write('все ок');
		return true;
	}
	else
	{
		return false;
	}
}

function digitalWatch() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	document.getElementById("digital_watch").innerHTML = hours + ":" + minutes + ":" + seconds;
	setTimeout("digitalWatch()", 1000);
}

function mo()
{
	document.getElementById('help').style.display = 'block';
}

function mout()
{
	document.getElementById('help').style.display = 'none';
}

function show_info(){
	if(document.getElementById('info-more').style.display === 'none')
	{
		document.getElementById('info-more').style.display = 'block'
	}
	else
	{
		document.getElementById('info-more').style.display = 'none'
	}
}

function moveup(){

}

function move(e){
	for (i = 1; i < 4; i++)
	{
		var name ="active_";
		var name_buff ="active_";
		if(e == -1)
		{
			name+=i;
			if(document.getElementById(name).style.backgroundColor == 'red')
			{
				if(i < 3)
				{
					document.getElementById(name).style.backgroundColor = 'white';
					name_buff += i+1; 
					document.getElementById(name_buff).style.backgroundColor = 'red';
					break;
				}
			}
		}
		else
		{
			
			name+=i;
			if(document.getElementById(name).style.backgroundColor == 'red')
			{
				if(i > 1)
				{
					document.getElementById(name).style.backgroundColor = 'white';
					name_buff += i-1; 
					document.getElementById(name_buff).style.backgroundColor = 'red';
					break;
				}
			}
		}
		
		
	}
	
}

function add(){
	for (i = 1; i < 4; i++)
	{
		var name ="active_";
		name += i;
		if(document.getElementById(name).style.backgroundColor == 'red')
		{
			name += '_3';
			if(document.getElementById(name).innerHTML == "пусто")
			{
				document.getElementById(name).innerHTML = "заказано";
			}
			else
			{
				document.getElementById(name).innerHTML = "пусто";
			}
			break;
		}
	}
}

function canculate(){
	var wind;
	var name = "active_";
	wind = window.open("res.html","","");
	for(i = 1; i< 4; i++)
	{
		var name_buf = "active_";
		var name = "active_";
		name += i;
		name_buf += i;
		name_buf += "_1";
		name += "_3";
		if(document.getElementById(name).innerHTML == "заказано")
		{
			wind.document.write(document.getElementById(name_buf).innerHTML + "<br />")
		}
	}
}

function mouse_move(e){
	for (i = 1; i < 4; i++)
	{
		var name ="active_";
		name += i;
		if(document.getElementById(name).style.backgroundColor == 'red')
		{
			document.getElementById(name).style.backgroundColor = 'white'
		}
	}
	e.style.backgroundColor = "red";
	
}