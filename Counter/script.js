document.getElementById("incrementBtn").addEventListener('click',
    incrementCounter);
document.getElementById("decrementBtn").addEventListener('click',
    decrementCounter);
document.getElementById("resetBtn").addEventListener('click',
        resetCounter);
    let counterDisplay = document.getElementById("counterDisplay");
    let counterValve = 0;

    function updateCounterDisplay(){
        counterDisplay.textContent = counterValve;
    }

    function incrementCounter(){
        counterValve++;
        updateCounterDisplay();
    }

    function decrementCounter(){
        if(counterValve>0){
        counterValve--;
        updateCounterDisplay();
        }
    }

    function resetCounter(){
        counterValve = 0;
        updateCounterDisplay();
    }



