function factorial(n){
    let answer=1;
    if(n==0||n==1){
        return answer;
    }
    else if (n>1){
        for (var i=n; i>=1; i--){
            answer = answer * 1;
        }
        return answer;
    }
    else{
        return"number has to be positive."
    }
}
let n=4;
answer=factorial(n)
console.log("factorial of"+n+":"+answer);