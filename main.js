const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    firstA = 0;
    secondA = 0;
    sym = prompt('Введите искомый символ', 'а')
    console.log(sym);
    for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) == sym) {
            firstA++;
        }
    }
    for (let i = 0; i < secondRow.length; i++) {
        if (secondRow.charAt(i) == sym) {
            secondA++;
        }
    }
    if (firstA > secondA) {
        return firstRow;
    }
    else{
        return secondRow;
    }
}
console.log(getRow(firstRow, secondRow));

function formattedPhone(phone) {
    let i = 0;
    if (phone.length == 12 && phone[0] == '+'){//+7... is used
        i = 2;
    }
    else if (phone.length == 11 && (phone[0] == '7' || phone[0] == '8')){//8... is used
        i = 1;
    }
    newPhone = "+7";
    for (i; i < phone.length; i++) {
        if (newPhone.length == 2){
            newPhone += ' (';
        }
        else if(newPhone.length == 7){
            newPhone += ') ';
        }
        else if(newPhone.length == 12 || newPhone.length == 15){
            newPhone += '-';
        }
        newPhone += phone.charAt(i);
    }
    return newPhone;
}
console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90