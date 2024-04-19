let sumOfArray = () =>{
    let a = 0
    let res = 0
    a = new Array(document.querySelector(".object").value.split(", "))
    for(let i = 0; i < a[0].length; i++){
        res+=Number(a[0][i])
    }
    a = String(res).split("")
    document.querySelector(".result").innerHTML = a
}
