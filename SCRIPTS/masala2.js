function shortWord(){
    let str = document.querySelector(".string").value
    str = str.split(" ")
    console.log(str[0])
    let max = ""
    for (const i in str) {
        if(str[i].length > max.length){
            max = str[i]
        }
    }
    if(max)
        document.querySelector("h1").innerHTML = max
    else
        document.querySelector("h1").innerHTML = "Here will be result"
}

