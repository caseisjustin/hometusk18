function ifAused(){
    let a = document.querySelector(".object").value.split(" ")
    let c = 0
    for (const i in a) {
        for(let j = 0; j < a[i].length; j++){
            if(a[i][j] == 'a' || a[i][j] == 'A'){
                c++
                break
            }
        }
    }
    document.querySelector(".result").innerHTML = c
}