// locomotive start
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





// locomotive end


var menu = document.querySelector(".ri-menu-line")
var side_bar = document.querySelector("#side-menu")
var flag = 0
menu.addEventListener("click",()=>{
    if(flag==0)
    {
        side_bar.style.display = "flex"
        document.querySelector("#nav").style.flexDirection="column"
        document.querySelector("#nav").style.gap="30px"
        flag=1
    }
    else
    {
        side_bar.style.display = "none"
        document.querySelector("#nav").style.flexDirection="row"
        document.querySelector("#nav").style.gap="50px"
        flag = 0
    }
})

// page1 animation

gsap.from(".animate",{
    y:-30,
    duration:1.5,
    yoyo:true,
    repeat:-1,
    repeatDelay:0
})
gsap.from("#star",{
    y:30,
    duration:1.5,
    yoyo:true,
    repeat:-1,
    repeatDelay:0
})

// nav animation

var tl = gsap.timeline()

tl.from("#nav h2",{
    y:-30,
    opacity:0,
    duration:0.2,
    delay:0.2
})
tl.from("#nav #nav-2",{
    y:-30,
    opacity:0,
    duration:0.3,
    stagger:0.5,
})
tl.from("#nav #nav-3",{
    y:-30,
    opacity:0,
    duration:0.2,
    stagger:0.5,
})

tl.from("#center-text h1",{
    y:10,
    opacity:0,
    duration:0.1,
    stagger:0.2
})
tl.from("#center-text p",{
    y:10,
    opacity:0,
    duration:0.1,
    stagger:0.2
})
tl.from("#center-img",{
    y:10,
    scale:1.2,
    opacity:0,
    duration:0.1,
    stagger:0.2
})

var tl2 = gsap.timeline()
tl2.from("#page2 #text",{
    y:50,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger : "#page2 #text",
        scroller : "body",
        // markers:true,
        start:"top 50%",
        end:"bottom 20%",
        stagger:0.2,
        scrub:1,
        onLeave: function(self) {
            self.disable()
            self.animation.progress(1)
          }
    }
});
tl2.from("#container .elem",{
    y:500,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger : "#container .elem",
        scroller : "body",
        stagger:0.2,
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:1,
        onLeave: function(self) {
            self.disable()
            self.animation.progress(1)
          }
    }
});

var tl3 = gsap.timeline()

tl3.from("#container2",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger : "#container2",
        scroller : "body",
        stagger:0.2,
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:1,
        onLeave: function(self) {
            self.disable()
            self.animation.progress(1)
          }
    }
})

tl3.from(".progress-bar",{
    width:0,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger : ".progress-bar",
        scroller : "body",
        stagger:0.2,
        // markers:true,
        start:"top 90%",
        end:"top 50%",
        scrub:1,
        onLeave: function(self) {
            self.disable()
            self.animation.progress(1)
          }
    }
})