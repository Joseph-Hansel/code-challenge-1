function transact(){
    const amntstr = window.prompt("How much?");

    const amnt = parseInt(amntstr);

    if(!amnt){
        alert(`Please enter a valid value`)
        transact()
    }else {
        alertMessage()
    }

    function alertMessage(){

        const amnt = parseInt(amntstr);

        let cost = (amnt * 1.5) / 100;

        if(cost <= 10){
            alert(`Sending KES ${amnt}. 
                Transaction cost KES 10
                Total Amount = ${amnt + 10}`);
            return;
        }
    
        if(cost >= 70){
            alert(`Sending KES ${amnt}. 
                Transaction cost KES 70
                Total Amount = ${amnt + 70}`);
            return;
        }
    
        if(cost > 10 && cost < 70){
            alert(`Sending KES ${amnt}.
                Transaction cost KES ${cost}
                Total Amount = ${amnt + cost}`)
        }
    }
    
}
