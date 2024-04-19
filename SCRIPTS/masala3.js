function nTimes(){
    let obj = 0
    let n = document.querySelector(".ntimes").value
    try {
        obj = JSON.parse(document.querySelector(".object").value)
    } catch (error) {
        document.querySelector(".result").innerHTML = "Please ENTER data CORRECTLY!!!"
        document.querySelector(".result").style.color = "red"
        return 0
    }
    for (const i in obj) {
        obj[i] *= n
    }
    document.querySelector(".result").innerHTML = JSON.stringify(obj)
}