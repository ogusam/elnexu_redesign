const nav =document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav_toggle-open');
const closeNavBtn = document.querySelector('#nav_toggle-close');

const openNav =()=>{
    nav.style.display ='flex';
    openNavBtn.style.display ='none';
    closeNavBtn.style.display ='inline-block';
}

openNavBtn.addEventListener('click', openNav)

const closeNav =()=>{
    nav.style.display ='none';
    openNavBtn.style.display ='inline-block';
    closeNavBtn.style.display ='none';
}

closeNavBtn.addEventListener('click', closeNav)



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Learn more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  function moreFunction() {
    var dots = document.getElementById("dot");
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("MyBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Learn more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }



  
  

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
  btns.forEach((btn)=>{
    btn.classList.remove("active");
  });
  slides.forEach((slide)=>{
    slide.classList.remove("active");
  });

  contents.forEach((content)=>{
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};
  btns.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
      sliderNav(i);
    });
  });




  const Btns = document.querySelectorAll(".Nav-btn");
const Slides = document.querySelectorAll(".Img-slide");
const Contents = document.querySelectorAll(".Content");

var SliderNav = function(manual){
  Btns.forEach((btn)=>{
    btn.classList.remove("active");
  });
  Slides.forEach((slide)=>{
    slide.classList.remove("active");
  });

  Contents.forEach((content)=>{
    content.classList.remove("active");
  });

  Btns[manual].classList.add("active");
  Slides[manual].classList.add("active");
  Contents[manual].classList.add("active");
};
  Btns.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
      SliderNav(i);
    });
  });

  





