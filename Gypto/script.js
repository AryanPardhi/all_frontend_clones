
var tl = gsap.timeline()

tl.from("#nav",{
    y:-50,
    opacity:0,
    duration:1.3,
    delay:0.6,
    stagger:0.2
})

gsap.from("#bg_img",{
    opacity:0,
    rotate:-20,
    duration:1.3,
    delay:0.6
})

tl.from("#rotate",{
    duration:0.2,
    opacity:0,
    scale:0
})
tl.from("#rotate",{
    rotate:-360,
    duration:1,
    repeat:-1,
    ease:Linear.easeNone
})

gsap.from("#cry",{
    duration:1,
    y:50,
    opacity:0,
    delay:2
})
gsap.from("#crd",{
    duration:1,
    y:50,
    opacity:0,
    delay:2.5
    
})
gsap.from("#text p",{
    duration:1,
    x:-100,
    opacity:0,
    delay:3
})

var pop = document.querySelector('#start')
pop.addEventListener("click",()=>{
    document.querySelector("#popup").style.display="block"
})

var cross = document.querySelector("#cross")
cross.addEventListener("click",()=>{
    document.querySelector("#popup").style.display="none"
})

tl.from("#upper",{
    opacity:0,
    duration:1,
    scaleX:0
})

tl.from("#u-left , #u-right",{
    y:100,
    opacity:0,
    duration:1
})