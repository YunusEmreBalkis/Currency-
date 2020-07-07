class Currency {

    constructor(firslist,secondlist){

        this.firslist = firslist;
        this.secondlist = secondlist;
        this.url = "https://api.exchangeratesapi.io/latest?base=";

        this.amont = null;

    }


    change( ){

        return new Promise((resolve,reject) =>{

            fetch(this.url + this.firslist)
            .then(respone => respone.json())
            .then(data =>{
                const pair = data.rates[this.secondlist];
                const amont2= Number(this.amont);

                let total = pair*amont2;

                resolve(total);
            })
            .catch(err => reject(err))



        })


    }

    changeamount(amount){
        this.amont= amount;
    }
    changefirstcurrency(newfirst){
        this.firslist= newfirst;
    }
    changesecondcurrency(newsecond){
        this.secondlist = newsecond;
    }

}