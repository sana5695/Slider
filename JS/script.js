let  Images = [];

function getImages(){
  for(let  i = 0; i <= 2; i++ ){
    Images.push(`./img/${i}.png`);
  };
  return Images;
}

getImages();

function initSlider() {
  
if ( !Images || !Images.length) {return;}
let sliderImages = document.querySelector('.img_output');
let sliderArrows = document.querySelectorAll('.slider_arrows');
let sliderDots = document.querySelector('.dot');
let sliderLinks = document.querySelector('.nav');
let citySlider = document.querySelector('.box1');
let areaSlider = document.querySelector('.box2');
let durationSlider = document.querySelector('.box3');

const cityName = ['Rostov-on-Don <br> LCD admiral', 'Sochi<br>Thieves', 'Rostov-on-Don<BR>Patriotic' ];
const area = ['81 m2', '105 m2', '93 m2' ];
const duration = ['3.5 months', '4 months', '3 months' ];


initImages();
initArrows();
initDots();
initLinks();

function initImages () {

    Images.forEach((value, index) => {
      
      let imageDiv = `<div class="output n${index} ${index === 0 ? "active" : ""}" 
      style="background-image:url(${value});"data-index="${index}"></div>`;

      sliderImages.innerHTML += imageDiv;
       
    });

  }




function initArrows() {

  sliderArrows.forEach(arrow => {

    arrow.addEventListener("click", function() {

      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      console.log(curNumber);
      let nextNumber;
      if (arrow.classList.contains("left")) {

        nextNumber = curNumber === 0? Images.length - 1 : curNumber - 1;

      } else {

        nextNumber = curNumber === Images.length - 1? 0 : curNumber + 1;

      }

      moveSlider(nextNumber);    

    });

  });

  }


  function initDots() {

    Images.forEach((value, index) => {

      let dot = `<div class="dots n${index} ${index === 0? "dots-active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;

    });

    sliderDots.querySelectorAll(".dots").forEach(dot => {

      dot.addEventListener("click", function() {    

        moveSlider(this.dataset.index);
        sliderDots.querySelector('.dots-active').classList.remove('dots-active');
        this.classList.add('dots-active');    

      });

    });

}

function initLinks() {

  sliderLinks.querySelectorAll(".nav-links").forEach(link => {

    link.addEventListener("click", function() {   

      moveSlider(this.dataset.index);
      sliderLinks.querySelector('.link_active').classList.remove('link_active');
      this.classList.add('link_active');     

    });

  });

}

function moveSlider (num){

    sliderImages.querySelector('.active').classList.remove('active');
    sliderImages.querySelector(".n" + num).classList.add('active');
    sliderDots.querySelector('.dots-active').classList.remove('dots-active');
    sliderDots.querySelector(".n" + num).classList.add('dots-active');
    sliderLinks.querySelector('.link_active').classList.remove('link_active');
    sliderLinks.querySelector(".nav" + num).classList.add('link_active');
    citySlider.querySelector('.text_box').innerHTML = `<p class="text_box">${cityName[num]}</p>`;
    areaSlider.querySelector('.text_box').innerHTML = `<p class="text_box">${area[num]}</p>`;
    durationSlider.querySelector('.text_box').innerHTML = `<p class="text_box">${duration[num]}</p>`;

  }

}

document.addEventListener("DOMContentLoaded", initSlider);