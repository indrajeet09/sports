function Grandparent(){
    console.log("i am dada");
    function Parent(){
        console.log("i am baap");
        function child(){
            console.log("i am beta");
        }
        return child()
    }
    return Parent()
}
Grandparent() 
