let header = document.querySelector('#page-header')
let header = document.querySelector('#page-header')
header.style.textAlign = "left"
let dogImages = document.querySelectorAll('.dog-image')
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}
let dogNames = document.querySelectorAll('dog-name')
dogNames.style.textAlign = "left"
let footer = document.querySelector('page-footer')
footer.style.backgroundColor = "blue"

// Select some elements...