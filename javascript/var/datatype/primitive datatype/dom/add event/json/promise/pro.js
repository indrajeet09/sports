let score = 35;
let pro = new Promise((reslove,reject)=>{
    if (score=35) {
        reslove("pass")
    }else{
        reject("fail")
    }
})
.then(data)