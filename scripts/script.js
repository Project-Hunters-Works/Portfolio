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

window.addEventListener('scroll', function(){

    if(head.getBoundingClientRect().top < window.innerHeight - 450){
        head.classList.add('fade-top');
    }

    if(circleHead.getBoundingClientRect().top < window.innerHeight - 450){
        circleHead.classList.add('fade-top');
    }

    if(prev.getBoundingClientRect().top < window.innerHeight - 550){
        prev.classList.add('fade-left');
    }

    if(descriptionP.getBoundingClientRect().top < window.innerHeight - 200){
        descriptionP.classList.add('fade-left');
    }
    
    if(next.getBoundingClientRect().top < window.innerHeight - 550){
        next.classList.add('fade-right');
    }

    if(descriptionHead.getBoundingClientRect().top < window.innerHeight - 200){
        descriptionHead.classList.add('fade-right');
    }

    if(orbit.getBoundingClientRect().top < window.innerHeight - 400){
        orbit.classList.add('fade-bottom');
    }

    items.forEach(item =>{
        if(item.getBoundingClientRect().top < window.innerHeight - 400){
        item.classList.add('fade-bottom');
    
        // if we dont want the items to come from bottom-right
        // setInterval(function(){
        //     item.classList.remove('fade-bottom');
        //     item.style.opacity='1';
        // },2000)
    }
    })

    

    
})
