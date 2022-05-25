// variables
// home
let homeSection = document.querySelector('#home')
// features 
let featuresSection = document.querySelector('#features')
let featuresCards = document.querySelectorAll('.features-top .card')
let maskFull = document.querySelectorAll('.mask.full')
let circleFill = document.querySelectorAll('.circle .fill')
// about us
let aboutUsSection = document.querySelector('#about-us')
// services
let servicesSection = document.querySelector('#services')
let servicesRow1Cards = document.querySelectorAll('#services .row1 .card')
let servicesRow2Cards = document.querySelectorAll('#services .row2 .card')
// portfolio
let portfolioSection = document.querySelector('#portfolio')
// manual slider navigate
var portfolioSliderCounter=0
var leftBtn = document.querySelector('.left')
var righttBtn = document.querySelector('.right')
// contact us
let contactUsSection = document.querySelector('#contact-us')
let contactUsContainer = document.querySelector('.contact-us-container')

// navbar toggler btn
document.querySelector('.toggler-btn').addEventListener('click',function(e){
    this.classList.toggle('close')
})
// onscroll animations
window.onscroll = function(){
    // make navbar fixed
    fixNavbarOnScroll()
    // toggle active link
    toggleActiveNavLinkOnScroll()
    // start features section animarion
    featuresSectionScrollAnimation()
    // start about us section animarion
    aboutUsSectionScrollAnimation()
    // start services section animarion
    servicesSectionScrollAnimation()
    // start portfolio section animarion
    portfolioSectionScrollAnimation()
    // start contact us section animarion
    contactUsSectionScrollAnimation()
}

// toggle the black and white image in features section
featuresCards.forEach((card)=>{
    card.addEventListener('mouseover',function(e){
        this.children[1].setAttribute('src',`img/features-icon-white-0${card.dataset.num}.png`)
    })
    card.addEventListener('mouseout',function(e){
        this.children[1].setAttribute('src',`img/features-icon-black-0${card.dataset.num}.png`)
    })
})
// toggle opacity of hover content in portfolio section
document.querySelectorAll('#portfolio .card-img .hover-content').forEach(card=>{
    card.addEventListener('mouseover',function(){
        card.style.opacity=1
    })
    card.addEventListener('mouseout',function(){
        card.style.opacity=0
    })
})

// get left or right slide in portfolio section
leftBtn.addEventListener('click',function(){
    leftSlide();
})
righttBtn.addEventListener('click',function(){
    rightSlide()
})
////// functions //////
// navbar
function fixNavbarOnScroll(){
    if(window.scrollY >= 300){
        document.querySelector('nav').setAttribute('style',' position: fixed !important; top: 0;') 
    }
    else{
        document.querySelector('nav').setAttribute('style',' position: static !important;')
    }
}
function toggleActiveNavLinkOnScroll(){
    if(window.scrollY >= homeSection.offsetTop && window.scrollY + 100 < featuresSection.offsetTop){
        document.querySelector('.active').classList.remove('active')
        document.querySelector('#homenav').classList.add('active')
    }
    else if(window.scrollY >= featuresSection.offsetTop - 100 && window.scrollY + 100 < aboutUsSection.offsetTop){
        document.querySelector('.active').classList.remove('active')
        document.querySelector('#Features').classList.add('active')
    }
    else if(window.scrollY >= aboutUsSection.offsetTop - 100 && window.scrollY + 100 < servicesSection.offsetTop){
        document.querySelector('.active').classList.remove('active')
        document.querySelector('#About-us').classList.add('active')
    }
    else if(window.scrollY >= servicesSection.offsetTop - 100 && window.scrollY + 100 < portfolioSection.offsetTop){
        document.querySelector('.active').classList.remove('active')
        document.querySelector('#Services').classList.add('active')
    }
    else if(window.scrollY >= portfolioSection.offsetTop - 100 && window.scrollY + 100 < contactUsSection.offsetTop){
        document.querySelector('.active').classList.remove('active')
        document.querySelector('#Portfolio').classList.add('active')
    }
    else{
        document.querySelector('.active').classList.remove('active')
        document.querySelector('#Contact-us').classList.add('active')
    }
}
// features section
function featuresSectionScrollAnimation(){
    if(window.scrollY >= featuresSection.offsetTop - 300){
        for(let i=0; i<4;i++){
            featuresCards[i].setAttribute('style','animation-play-state: running !important;')
        }
    }
    if(window.scrollY >= featuresSection.offsetTop + 40){
        for(let i=0; i<4;i++){
            maskFull[i].setAttribute('style','animation-play-state: running !important;')
        }
        for(let i=0; i<8;i++){
            circleFill[i].setAttribute('style','animation-play-state: running !important;')
        }
    }
}
// about us section
function aboutUsSectionScrollAnimation(){
    if(window.scrollY >= aboutUsSection.offsetTop - 300){
        document.querySelector('#about-us img').setAttribute('style','animation-play-state: running;')
        document.querySelector('#about-us .right-content').setAttribute('style','animation-play-state: running;')
    }
}
// services section
function servicesSectionScrollAnimation(){
    if(window.scrollY >= servicesSection.offsetTop - 400){
        document.querySelector('#services .services-heading').setAttribute('style','animation-play-state: running;')
    }
    if(window.scrollY >= servicesSection.offsetTop - 150){
        for(let i=0; i<3;i++){
            servicesRow1Cards[i].setAttribute('style','animation-play-state: running !important;')
        }
    }
    if(window.scrollY >= servicesSection.offsetTop + 20){
        for(let i=0; i<3;i++){
            servicesRow2Cards[i].setAttribute('style','animation-play-state: running !important;')
        }
    }
}
// portfolio section
function portfolioSectionScrollAnimation(){
    if(window.scrollY >= portfolioSection.offsetTop - 450){
        document.querySelector('.portfolio-heading').setAttribute('style','animation-play-state: running !important;')
    }
}
function leftSlide(){
    portfolioSliderCounter++
    if(portfolioSliderCounter>4 && window.innerWidth >= 992){
        portfolioSliderCounter=0
    }
    else if(portfolioSliderCounter>10 && window.innerWidth < 992){
        portfolioSliderCounter=0
    }
    document.querySelector('.slide.first').style.marginLeft =`-${portfolioSliderCounter*50}%`;
}
function rightSlide(){
    portfolioSliderCounter--
    if(portfolioSliderCounter<0 && window.innerWidth >= 992){
        portfolioSliderCounter=4
    }
    else if(portfolioSliderCounter<0 && window.innerWidth < 992){
        portfolioSliderCounter=10
    }
    document.querySelector('.slide.first').style.marginLeft =`-${portfolioSliderCounter*50}%`;
}

// contact us section
function contactUsSectionScrollAnimation(){
    if(window.scrollY >= contactUsSection.offsetTop - 450){
        contactUsContainer.setAttribute('style','animation-play-state: running !important;')
    }
}