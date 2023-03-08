let bbThreeImages = '' 

const bbImage = '<img src="bb-img.jpeg" alt="bbImg">'

for (let i = 0; i < 3; i++) {
    bbThreeImages += bbImage
    document.querySelector("#bbImages").innerHTML = bbThreeImages
}

