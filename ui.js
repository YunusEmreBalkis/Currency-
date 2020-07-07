class UI {


    constructor(firstselected,secondselect){
        this.firstselected = firstselected;
        this.secondselect = secondselect;

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSeconsd = document.getElementById("outputSecond");
        this.result = document.getElementById("outputResult");
    };

    changefirst(){
        this.outputFirst.textContent = this.firstselected.options[this.firstselected.selectedIndex].textContent;
    }
    changesecond(){
        this.outputSeconsd.textContent = this.secondselect.options[this.secondselect.selectedIndex].textContent;
    }
    displayamount(ressslte){
        this.result.value= ressslte;
    }

}