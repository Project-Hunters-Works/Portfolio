/* POPUP-IMAGES */

document.querySelectorAll('.carousel-image img').forEach(item =>{
    item.onclick = () =>{
         document.querySelector('.popup-image').style.display= 'block';
         document.querySelector('.popup-image img').src =item.getAttribute('src');

    }
});

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display= 'none';
}

/* FADE ANIMATIONS */

let head = document.querySelector('.carousel-head');
let items = document.querySelectorAll('.carousel-item-container');
let prev = document.querySelector('.carousel-control-prev');
let next = document.querySelector('.carousel-control-next');
let circleHead = document.querySelector('.circle-head');
let orbit = document.querySelector('.orbit');
let descriptionHead = document.querySelector('.circle-description h2');
let descriptionP = document.querySelector('.circle-description p');
let future = document.querySelector('.future');

window.addEventListener('scroll', function(){

    if((head.getBoundingClientRect().top < window.innerHeight - 150) && (head.getBoundingClientRect().top > -150)){
        head.classList.add('fade-top');
    }else{
        head.classList.remove('fade-top');
    }

    if((circleHead.getBoundingClientRect().top < window.innerHeight - 150)  && (circleHead.getBoundingClientRect().top > -150)){
        circleHead.classList.add('fade-top');
    }else{
        circleHead.classList.remove('fade-top');
    }

    if((prev.getBoundingClientRect().top < window.innerHeight - 550) && (prev.getBoundingClientRect().top > -150)){
        prev.classList.add('fade-left');
    }else{
        prev.classList.remove('fade-left');
    }

    if((descriptionP.getBoundingClientRect().top < window.innerHeight - 100)&& (descriptionP.getBoundingClientRect().top > -150)){
        descriptionP.classList.add('fade-left');
    }else{
        descriptionP.classList.remove('fade-left');
    }
    
    if((next.getBoundingClientRect().top < window.innerHeight - 550)&& (next.getBoundingClientRect().top > -150)){
        next.classList.add('fade-right');
    }else{
        next.classList.remove('fade-right');
    }

    if((descriptionHead.getBoundingClientRect().top < window.innerHeight - 100) && (descriptionHead.getBoundingClientRect().top > -150)){
        descriptionHead.classList.add('fade-right');
    }else{
        descriptionHead.classList.remove('fade-right');
    }

    if((orbit.getBoundingClientRect().top < window.innerHeight - 50)&& (orbit.getBoundingClientRect().top > -150)){
        orbit.classList.add('fade-bottom');
    }else{
        orbit.classList.remove('fade-bottom');
    }

    items.forEach(item =>{
        if((item.getBoundingClientRect().top < window.innerHeight - 400)&& (item.getBoundingClientRect().top > -150)){
        item.classList.add('fade-bottom');
    
        // if we dont want the items to come from bottom-right
        // setInterval(function(){
        //     item.classList.remove('fade-bottom');
        //     item.style.opacity='1';
        // },2000)
    }else{
        item.classList.remove('fade-bottom');
    }
    })

    if((future.getBoundingClientRect().top < window.innerHeight -400) && (future.getBoundingClientRect().top > -400)){
        future.style.opacity = '1';
    }else{
        future.style.opacity= '0';
    }
  
})

