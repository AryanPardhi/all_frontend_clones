gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    // markers:true,
    pin:true,
    scrub:true,
    start:"top -10%",
    end:"top -100%"

  }
})
var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    // markers:true,
    pin:true,
    scrub:true,
    start:"top -18%",
    end:"top -300%"

  }
})

tl1.to("#img-container #part2",{
  top:"-390px",
  duration:5
},"ref")

tl1.to("#img-container #part1",{
  top:"-100px",
  duration:2
},"ref")

tl1.to("#img-container #part3",{
  top:"-100px",
  duration:2
},"ref")

tl1.to("#nav",{
  opacity:0,
  duration:3
},"ref")

tl1.to("#page1>h1",{
  top:"-400px",
  duration:4
},"ref")

tl1.to("#page1>h2",{
  top:"-600px",
  duration:6
},"ref")


tl2.to("#img-container #part2",{
  width:"1000vw",
  height:"100%",
  duration:8
},"ref2")

tl2.to("#img-container #part1",{
  left:"-50%",
  duration:8
},"ref2")

tl2.to("#img-container #part3",{
  right:"-50%",
  duration:8
},"ref2")

tl2.from("#part2>h2",{
  y:300,
  opacity:0,
  duration:8
},"ref2")

tl2.to("#page1",{
  backgroundColor:"black",
},"ref2")

// video play page 2

var play = document.querySelector(".ri-play-circle-line")
var img = document.querySelector("#page2 #vid-contain img")
var vid = document.querySelector("#page2 #vid-contain video")
var overlay = document.querySelector("#page2 #overlay")

play.addEventListener("click",()=>{
  play.style.display="none"
  img.style.display="none"
  overlay.style.display="none"
  vid.play()
  vid.controls = true
})

vid.addEventListener("click",()=>{
  play.style.display="block"
  img.style.display="block"
  overlay.style.display="block"
  if(vid.paused==true){

    vid.pause()
  }
  vid.controls = true
})

var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    // markers:true,
    pin:true,
    scrub:true,
    start:"top 0%",
    // end:"top 50%"
  }
})
tl3.to("#page3",{
  backgroundColor:"white",
},"rel")
tl3.to("#page3 .amb-img h3",{
  color:"black",
},"rel")
tl3.to("#page3 .amb-img h4",{
  color:"black",
},"rel")

var tl4 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    // markers:true,
    pin:true,
    scrub:4,
    start:"top -10%",
    end:"top -200%"
  }
})

tl4.to("#elements #elem1 .img",{
  // height:"650px",
  y:-250,
  duration:5
},"ref3")
tl4.to("#elements #elem1 h2",{
  // height:"650px",
  y:-250,
  duration:5
},"ref3")

tl4.to("#elements #elem2 .img",{
  // height:"650px",
  y:-100,
  duration:8
},"ref3")
tl4.to("#elements #elem2 h2",{
  // height:"650px",
  y:-100,
  duration:8
},"ref3")

tl4.to("#elements #elem3 .img",{
  // height:"650px",
  y:-250,
  duration:5
},"ref3")
tl4.to("#elements #elem3 h2",{
  // height:"650px",
  y:-250,
  duration:5
},"ref3")
