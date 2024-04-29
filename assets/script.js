const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let slideActive = 0
let dotActive = 0
let image = document.querySelector(".banner-img")
let tagLine = document.querySelector("#banner p")

/* récupérer le conteneur dans une variable*/
let containerDots = document.querySelector(".dots")
for (let i = 0; i < slides.length; i++) {
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
let firstDot = dots[0]
firstDot.classList.add('dot_selected')

/* CARROUSEL */
arrowLeft.addEventListener("click", () => {
	dots[slideActive].classList.remove('dot_selected')
	if (slideActive > 0) {
		slideActive--
	} else {
		slideActive = slides.length - 1
	}
	dots[slideActive].classList.add('dot_selected')
	image.src = "assets/images/slideshow/" + slides[slideActive].image
	tagLine.innerHTML = slides[slideActive].tagLine
})

arrowRight.addEventListener("click", () => {
	dots[slideActive].classList.remove('dot_selected')
	if (slideActive < slides.length - 1) {
		slideActive++
	} else {
		slideActive = 0
	}
	dots[slideActive].classList.add('dot_selected')
	image.src = "assets/images/slideshow/" + slides[slideActive].image
	tagLine.innerHTML = slides[slideActive].tagLine
})



