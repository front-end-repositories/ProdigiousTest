var requestURL = 'https://raw.githubusercontent.com/jennymanrique2411/ProdigiousTest/master/cards.json';
var request = new XMLHttpRequest();
var cardsDiv = document.querySelector(".card");

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var jsonObj = request.response;
  populateCards(jsonObj);
}

function populateCards(jsonObj) {
	var cards = jsonObj['cards'], 
		insideDiv;

	for(var i = 0; i < cards.length; i++) {
		var title = document.createElement('h4'),
		    subtitle = document.createElement('p'),
		    description = document.createElement('h1'),
		    footer = document.createElement('p'),
		    image = document.createElement('img');

		footer.className = "footer";
		
		title.textContent = cards[i].title;
		subtitle.textContent = cards[i].subtitle;
		description.textContent = cards[i].body;
		footer.textContent = cards[i].footer;

		insideDiv = ".card" + cards[i].id;
		cardsDiv = document.querySelector(insideDiv);

		if(cards[i].type === "arrowCard") {
			title.className = "blackTitle";
			subtitle.className = "blackDesc";
			image.setAttribute("src", cards[i].image);
			image.className = "imgCard";
			cardsDiv.appendChild(image);
		}

		cardsDiv.appendChild(title);
		cardsDiv.appendChild(subtitle);
		cardsDiv.appendChild(description);
		cardsDiv.appendChild(footer);
	}
}

function dropdownMenu() {
	var x = document.getElementById("dropdownClick");

	if(x.className === "topnav") {
		x.className += " responsive";
		/* change top nav to top nav responsive */
	} else {
		x.className = "topnav";
	}	
}

function submitForm() {
	$("form").submit(function(){
		$(".form-col").hide();
		$(".response").show();
		 event.preventDefault();
	});
}
