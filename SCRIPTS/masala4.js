function findCountNums(){
    let count = 0
    let str = document.querySelector(".string").value
    for(let i = 0; i < str.length; i++){
        if(Number(str[i])){
            count++
        }
    }
    console.log(count)
    document.querySelector(".result").innerHTML = count
}