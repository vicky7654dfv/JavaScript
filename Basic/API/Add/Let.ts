var num1: number=1;
var num2: number=2;
var num3: number;
var num4: number;


function varDeclaration() {
    if(num2>num1) {
        var num3:number = 3;
        num3++;
    }
    while(num1<num2){
        var num4:number=4;
        num1++;
    }
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
}

varDeclaration();