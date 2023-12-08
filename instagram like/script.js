var arr = [
    {dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",img:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1516522973472-f009f23bba59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",img:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",img:"https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://plus.unsplash.com/premium_photo-1679619556703-0b49a65b04f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",img:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1583396082380-01f674489d6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",img:"https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1553860214-87b92d6c1e22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",img:"https://images.unsplash.com/photo-1514500759218-47f0ea1dce4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}
]

var clutter = ""
arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
    <img id=${idx} src="${elem.dp}" alt="">
</div>`
})

document.querySelector('#header').innerHTML=clutter
var growth=0
document.querySelector('#header').addEventListener("click",function(dets)
{

    document.querySelector("#full-scr").style.display="block"
    document.querySelector("#full-scr").style.backgroundImage = `url(${arr[dets.target.id].img})`
    
    setTimeout(()=>{
        document.querySelector("#full-scr").style.display="none"
    },3000)
    if(growth<100)
    {
    setInterval(()=>{
        document.querySelector("#grow").style.width= `${growth++}%`
    },30)
    }
    else{
        growth=0
    }
})

var flag=0
var like = document.querySelector(".ri-heart-fill")
like.addEventListener("click",()=>{
    if(flag==0){
    like.style.color="red"
    flag=1
}
else{
        like.style.color="white"
        flag=0
    }
})