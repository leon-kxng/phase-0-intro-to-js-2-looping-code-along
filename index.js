// Code your solutions in this file
let thankYouMessages = [];

function writeCards(names, event_name){

    thankYouMessages = [];

    for(let count = 0; count < names.length; count++){
        thankYouMessages.push(`Thank you, ${names[count]}, for the wonderful ${event_name} gift!`);
    }
    return thankYouMessages;
}

function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}

countDown(10);
writeCards(names, "surprise");
