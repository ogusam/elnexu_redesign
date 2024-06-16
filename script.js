<<<<<<< HEAD
=======
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


>>>>>>> a8907db14d6274c31c5ea838c1285481afb1ad32


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

  


/*contact form */

document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Phone number validation regex (basic example)
  const phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;    



  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault();  // Prevent form submission
  }

  if (!phonePattern.test(phone)) {
      alert('Please enter a valid 11-digit phone number.');
      event.preventDefault();  // Prevent form submission
  }

  event.preventDefault();
    
  // Form submission logic here (e.g., send data to server)
  
  // Display success message
  document.getElementById('successMessage').style.display = 'block';
  
  // Clear the form
  document.getElementById('contactForm').reset();

});



function changeTerminalCount(amount) {
  const terminalInput = document.getElementById('terminals');
  let currentCount = parseInt(terminalInput.value);
  currentCount += amount;
  if (currentCount < 0) currentCount = 0;
  terminalInput.value = currentCount;
}

function changeTerminal(amount) {
  const terminalInput = document.getElementById('pos');
  let currentCount = parseInt(terminalInput.value);
  currentCount += amount;
  if (currentCount < 0) currentCount = 0;
  terminalInput.value = currentCount;
}

document.getElementById('business-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted successfully!');
});
