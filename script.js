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
  
  