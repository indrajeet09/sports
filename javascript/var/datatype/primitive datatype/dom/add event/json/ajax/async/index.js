let x = async function(){
    let data = await fetch("")
    console.log(data);
    let finaldata = await data.json()
    console.log(finaldata);
    finaldata.map((x)=>{
        let body = document.body
        let div = document.createElement("div")
        div.innerHTML += `<section class='sec'>
        <div class="cards">
        <img src=${x.image} hight='250px' width='300px'>
        <p>$(x.title)</p>
        <h5><span>price.rate)<i class="fa-solid fa-beat"></i></p>
        <buttom>Add Cart</buttom>
        </div>
        </section>`
        body.appendChild(div)
    }
    )
}