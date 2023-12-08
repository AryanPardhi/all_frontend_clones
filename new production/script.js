const scroll = new LocomotiveScroll({
    el: document.querySelector('#wrapper'),
    smooth: true
});

function mouseEffect(){
    var vidoearea = document.querySelector("#vid-container")
var play = document.querySelector("#play")
vidoearea.addEventListener("mouseenter",()=>{
    gsap.to(play,{
        scale:1,
        opacity:1,
    });
});
vidoearea.addEventListener("mouseleave",()=>{
    gsap.to(play,{
        scale:0,
        opacity:0,
    });
});
vidoearea.addEventListener("mousemove",(dets)=>{
    gsap.to(play,{
        left:dets.x-80,
        top:dets.y-80,
    });
});

}
mouseEffect()

function page1Animation(){
    gsap.from("#page1 h1",{
        opacity:0,
        y:100,
        delay:0.5,
        duration:0.9,
        stagger:0.3,
    })
    gsap.from("#page1 #vid-container",{
        opacity:0,
        scale:0.9,
        delay:1.3,
        duration:0.8,
    })
}
page1Animation()

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to(".cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    // document.querySelector("#child1").addEventListener("mouseenter",function(){
  
    // })
  
    // document.querySelector("#child1").addEventListener("mouseleave",function(){
    //   gsap.to("#cursor",{
    //     transform: 'translate(-50%,-50%) scale(0)'
    //   })
    // })
    document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to(".cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to(".cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
  cursorAnimation();