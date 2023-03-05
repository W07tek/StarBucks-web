const smallCoffe = document.querySelectorAll('.select-coffee img'); 

const bigCoffee = document.querySelector('.bigCoffee img'); 

const bigCircle1 = document.querySelector('.left-circle');
const bigCircle2 = document.querySelector('.right-circle');

const circle = document.querySelector('.inside-circle');


const nav = document.querySelector('nav'); 

const burger = document.querySelector('.burger'); 
 
  const body = document.querySelector('body'); 


smallCoffe.forEach((coffee) => { 
   coffee.addEventListener('click', (e) => {    
   
   let number = e.target.id
   
    bigCoffee.src = e.target.src;  
    console.log(number);
    // circle.style.background = 'var(--insideCircle'+number+')'
    circle.style.background = 'var(--insideCircle'+number+')'
    bigCircle1.style.background = 'var(--insideCircle'+number+')'
    bigCircle2.style.background = 'var(--insideCircle'+number+')'
   
  
    });
  });

    burger.addEventListener('click',function(){ 
      console.log('dd');
    nav.classList.toggle('active');   
    burger.classList.toggle('active');
    body.classList.toggle('active');  
    

  })