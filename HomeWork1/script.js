//1

let number1 = 100;

if (number1 < 50) {
    console.log("ნაკლებია 50ზე");
} else if (number1 > 20) {
    console.log("მეტია 20ზე");
} else {
    console.log("შეცდომა");
};

//2 


let name1 = "მარიამ";

if (name1 == "მარიამ") {
    console.log(true);
}else{
    console.log(false);
};


//3

let name2 = "ლიკა";

switch (name2) {
    case  "ლიკა":


        console.log(true);
      
        break;

        default:
        console.log(false);
    
}

//4

let number = prompt('ჩაწერეთ რიცხვი');

if (number % 2 == 0) {
    alert('ლუწია');
} else {
    alert('კენტია');
}
