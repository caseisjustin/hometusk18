function twoTimes(){
    let nt = document.querySelector(".object").value
    if(!Number(nt) || Number(nt) % 2 != 0){
        document.querySelector(".result").innerHTML = "Please enter NUM or JUFT NUM"
        return 1
    }
    let c = 1
    let n = Number(nt)
    let temp = Number(nt)
    let check = false
    while(n > 2){
        if(!check){
            for(let i = 0; i <= temp; i+=2){
                if(n == i){
                    check=true
                }
            }
            if(!check){
                break
            }
        }
        else{
            n/=2
            c++
        }
    }
    document.querySelector(".result").innerHTML = c
}