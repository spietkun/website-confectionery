function klikam_noc() {
	
	var click_noc_on= 1;
	sessionStorage.setItem('klik1', click_noc_on);
}

function cofamklik() {
	
	 sessionStorage.removeItem('klik1');
}

function zmien_tlo() {
	var bufor1 = sessionStorage.getItem('klik1');
		if(bufor1)
		{
			document.getElementById("main").style.backgroundColor = "#262626";
			document.getElementById("main").style.color = "white";
		}
		else
		{
			document.getElementById("main").style.backgroundColor = "#e2e2e2";
			document.getElementById("main").style.color = "black";
		}
}


function klikam_mot() {
	
	var click_mot= 2;
	localStorage.setItem('klik2', click_mot);
}

function cofam_mot() {
	
	 localStorage.removeItem('klik2');
}

function zmien_mot() {
	var bufor2 = localStorage.getItem('klik2');
		if(bufor2)
		{
			document.getElementById("header1").style.backgroundImage = "url('images/24.jpg')";
		}
		else
		{
			document.getElementById("header1").style.backgroundImage = "url('images/19.jpg')";
			
		}
}



var el= document.getElementById("ukryj");
if (el)
{
	el.addEventListener("click", function(){
	document.getElementById('chowany').style.display="none";
});
}
var el2=document.getElementById("pokaż");
if (el2)
{
	el2.addEventListener("click", function(){
	document.getElementById('chowany').style.display="block";
});
}


function pokaz_tekst() {
	var paragraf = document.createElement("P");
	
	
	var tekst = document.createTextNode("Nigdy nie przestawaj eksperymentować!");
	var main = document.getElementsByTagName('main')[0];
	paragraf.appendChild(tekst);
	main.appendChild(paragraf);		
}


function pokaz_li() {
	var paragraf = document.createElement("li");
	
	
	var tekst = document.createTextNode("Idź pod prąd!");
	var main = document.getElementsByTagName('main')[0];
	paragraf.appendChild(tekst);
	main.appendChild(paragraf);		
}




$(document).ready(function(){
    $("#zniknij").click(function(){
        $(this).fadeOut("slow");
    
    });
});


$(function() {
            var kraje  =  [
               "Polska",
               "Ukraina",
               "Rosja",
               "Czechy",
            ];
            $( "#autocomplete" ).autocomplete({
               source: kraje
            });
         });

		 
$( function() {
    $( "#wybierz_date" ).datepicker();
  } );
      