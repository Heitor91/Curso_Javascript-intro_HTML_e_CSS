function startCalculator(){
    return{
        // Variables-----------------------------------------
        display: document.querySelector('.display'),
        result: false,
        btnNumber: false,

        // Methods-------------------------------------------
        start(){
            this.cliks();
        },
        cliks(){
            document.addEventListener('click', (e) =>{
                const el = e.target;
                if(el.classList.contains('btn')){
                    this.btnNumber = el.classList.contains('btn-num');
                    this.btnToDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clr')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-bsp')){
                    this.backspaceDisplay();
                }
                if(el.classList.contains('btn-eq')){
                    this.resultDisplay()
                }
            });
        },
        btnToDisplay(addText){
            if(this.result && this.operator){
                this.display.innerText = addText;
            }else{
                this.display.innerText += addText;
            }
            this.result = false;
            this.btnNumber = false;
        },
        clearDisplay(){
            this.display.innerText = '';
        },
        resultDisplay(){
            let operate = this.display.innerText;
            operate = eval(operate);
            this.display.innerText = operate;
            this.result = true;
        },
        backspaceDisplay(){
            let textDisplay = this.display.innerText;
            textDisplay = textDisplay.slice(0, -1);
            this.display.innerText = textDisplay;
        },
    };
}

const calculator = startCalculator();
calculator.start();
