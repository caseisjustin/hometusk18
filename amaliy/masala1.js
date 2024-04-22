class DBgetdata{
    data
    URL = "https://jsonplaceholder.typicode.com/todos/"

    async getData(){
        try{
            setTimeout(() => {
                try{
                    if(this.data == undefined){
                        console.log("500 ms passed... Canceled")
                    }
                    else{
                        console.log(this.data)
                    }
                }catch(er){
                    console.log("500 ms passed... Canceled")
                }
            }, 500);


            this.data = await fetch(this.URL)
            this.data = await this.data.json()


        }catch (error){
            console.log("Couldn't GET response")
        }
    }

    async showData(){
        this.data = await fetch(this.URL)
        this.data = await this.data.json()
        console.log(this.data)
    }
}


let getdata = new DBgetdata()

getdata.getData()


// getdata.showData()