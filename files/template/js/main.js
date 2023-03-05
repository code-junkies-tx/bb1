const imgContainer = document.querySelector(".bbImages")

const mainImage = '<img class="imgClass" src="../template/images/bb-img.jpeg" alt="bb-img">'



for (let i = 0; i < 3; i++) {
    imgContainer.insertAdjacentHTML("afterbegin" , mainImage);
  }