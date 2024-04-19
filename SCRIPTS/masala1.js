function getLevel(){
    let t = document.querySelector("#numberget").value
    n = 2
    let main = document.querySelector(".contents")
    main.innerHTML = ''
    for(let i = 1; i <= t; i++){
        main.innerHTML += `<div><h1>${n}</h1></div>`
        n*=2
    }
    console.log(main)
}
