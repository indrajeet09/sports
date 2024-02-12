let a = document.getElementById("btn1")
a.addEventListener('click',()=>{
    document.body.style.background="green"
})


let b = document.getElementById('ipl')
b.addEventListener('keyup',()=>{
    document.body.style.background="red"
})


b.addEventListener('keydown',()=>{
    document.body.style.background="purple"
})

