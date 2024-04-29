const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let slideActive = 0
let dotActive = 0
let image = document.querySelector(".banner-img")
let tagLine = document.querySelector("#banner p")


// console.log(tagLine)
// console.log(image)
// console.log(slides)
// console.log(slideActive)

/* récupérer le conteneur dans une variable*/
let containerDots = document.querySelector(".dots")
for(let i = 0; i<slides.length; i++) {
	let dot = document.createElement('div')
	dot.classList.add('dot')
	containerDots.appendChild(dot)
	
}
/*
* récupérer les flèches gauche et droite du carrousel 
*/
let arrowLeft = document.querySelector(".arrow_left")

let arrowRight = document.querySelector(".arrow_right")


/* récupérer les bullet points  */
let dots = document.querySelectorAll(".dot")
console.log(dots)
let firstDot = dots[0]
console.log(firstDot)
firstDot.classList.add('dot_selected')

// console.log(containerDots)



/* CARROUSEL */ 
arrowLeft.addEventListener("click", ()=>{
	console.log("J'ai cliqué sur la flèche de gauche.")
	dots[slideActive].classList.remove('dot_selected')
	console.log("slideActive début de la fonction : "+ slideActive)
	if(slideActive > 0){
		slideActive-- 
		
	}else{
		slideActive = slides.length-1 
		
	}
	console.log("fin de la fonction " + slideActive)
	console.log(slides[slideActive].image)
	
	dots[slideActive].classList.add('dot_selected')
	image.src = "assets/images/slideshow/" + slides[slideActive].image
	tagLine.innerHTML = slides[slideActive].tagLine
	
	
})

arrowRight.addEventListener("click", ()=>{
	console.log("J'ai cliqué sur la flèche de droite.")
	dots[slideActive].classList.remove('dot_selected')
	if(slideActive < slides.length-1){
		slideActive++ 
		
	}else{
		slideActive = 0 
		
	}
	console.log(slideActive)
	console.log(slides[slideActive].image)
	dots[slideActive].classList.add('dot_selected')
	image.src = "assets/images/slideshow/" + slides[slideActive].image
	tagLine.innerHTML = slides[slideActive].tagLine
	
})

/* créer un point par objet (image+texte) du tableau */


/* pour faire avancer le bullet point avec la diapo en cours,
j'ai besoin de ces deux variables 
*/ 
// if(slideActive == dotActive){
	 
	// firstDot.classList.add('dot_selected')

// }else{
// 	firstDot.classList.remove('dot_selected')
// }


