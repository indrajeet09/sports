let a = document.getElementById('p1')
a.style.color="red"
a.style.backgroundColor="black"
a.style.fontSize="100px"
a.style.textAlign="center"
a.className="pc1"


let b = document.getElementsByClassName('spc1')
for(let i=0;i<b.length;i++){
    b[0].style.backgroundColor="orange"
}


let c = document.getElementsByTagName('h1')
for(let i=0;i<c.length;i++){
    c[0].style.background="green"
    c[i].style.textAlign="center"
}
console.lo

