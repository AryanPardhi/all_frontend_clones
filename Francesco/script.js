var timeLine = gsap.timeline()
timeLine.from("#nav h2",{
    y:-50,
    duration:1,
    delay:0.5,
    stagger:0.2,
    opacity:0
})
timeLine.from("#mid .bodytext",{
    x:-100,
    opacity:0,
    duration:1,
    stagger:0.25
})
timeLine.from("img",{
    x:200,
    opacity:0,
    duration:1.2,
    stagger:0.5,
    rotate:0
})
