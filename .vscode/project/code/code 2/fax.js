function factorial(n){
    if(n<0){
        return "number has to positive."
    }
    if(n==0||n==1){
        return1;
    }else{
        return n*factorial(n-1);
    
    }
}
let n=5;
answer = factorial(n)
console.log("Factorial of "+n+":"+answer);