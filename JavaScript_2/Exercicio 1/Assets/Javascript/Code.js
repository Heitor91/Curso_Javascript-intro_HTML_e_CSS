function startCalculator(){
    return{
        // Variables-----------------------------------------
        display: document.querySelector('.display'),
        result: false,
        operator: false,

        // Methods-------------------------------------------
        start(){
            this.cliks();
        },
        cliks(){
            document.addEventListener('click', (e) =>{
                const el = e.target;
                if(el.classList.contains('btn')){
                    this.operator = el.classList.contains('btn-num');
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
            if(!(this.result) && this.operator){
                this.display.innerText = addText;
                this.result = false;
            }else{
                this.display.innerText += addText;
            }
        },
        clearDisplay(){
            this.display.innerText = '';
        },
        resultDisplay(){
            let operate = this.display.innerText;
            if(operate.includes('+')){
                operate = operate.split('+');
                operate = this.sumNubers(operate[0],operate[1]);
            }
            else if(operate.includes('-')){
                operate = operate.split('-');
                operate = this.subNumbers(operate[0],operate[1]);
            }
            else if(operate.includes('*')){
                operate = operate.split('*');
                operate = this.multNumbers(operate[0],operate[1]);
            }
            else if(operate.includes('/')){
                operate = operate.split('/');
                operate = this.divNumbers(operate[0],operate[1]);
            }
            this.display.innerText = operate;
            this.result = true;
        },
        backspaceDisplay(){
            let textDisplay = this.display.innerText;
            textDisplay = textDisplay.slice(0, -1);
            this.display.innerText = textDisplay;
        },
        sumNubers(valueOne, valueTwo){
            return Number(valueOne) + Number(valueTwo);
        },
        subNumbers(valueOne, valueTwo){
            return Number(valueOne) - Number(valueTwo);
        },
        multNumbers(valueOne, valueTwo){
            return Number(valueOne) * Number(valueTwo);
        },
        divNumbers(valueOne, valueTwo){
            return Number(valueOne) / Number(valueTwo);
        },
    };
}

const calculator = startCalculator();
calculator.start();
