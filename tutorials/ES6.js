//alert("deneme")

//////////////////
// ## let - const ##
// ES6 variable structure
let number1 = 44;
number1 = 50;
const number2 = 23;

////////////////// 
// ## Template Literal ##

// 1-) multi-line
let multiline = "1.satır\n2.satır";
console.log(multiline);

let multilineEs6 = `1.satır
2.satır`; //backtick ile yazılabilir
console.log(multilineEs6);

// 2-) Interpolation
let name = "Hamit";
let surname = "Mızrak";
let nameAndSurname = name + " " + surname;
console.log(nameAndSurname);

let nameAndSurnameES6 = `${name} ${surname}`;
console.log(nameAndSurnameES6);

// 3-) Html template
/*
<html>
 <body class="container">
        <div id="html_template"></div>
        <div id="html_template2"></div>
  </body>
</html>
*/
const listem = "<ul>" +
    "<li>" + name + "</li>" +
    "<li>" + surname + "</li>" +
    "</ul>";
document.getElementById("html_template").innerHTML = listem;

const listemES6 = `
<ul>
    <li>${name}</li>
    <li>${surname}</li>
</ul>`;
document.getElementById("html_template2").innerHTML = listemES6;

////////////////// 
// Arrow Function
let es6Function = () => {
    console.log("ES6");
}
es6Function()

////////////////// 
// Promise
let data = () => {
    const promiseData = new Promise((resolve, reject) => {
        let result = true;
        if (result) {
            resolve("ok resolve");
        } else {
            reject("hata");
        }
    });
    promiseData.then(() => {
        console.log("Success");
    }).catch((err) => {
        console.error(err);
    });
    console.log(promiseData);
}
//data()

////////////////// 
// Spread /restParameter
let arrayDizi = [2, 4, 6, 8, 5];
console.log(...arrayDizi);

/////////////////////////
// Class
class Person {
    constructor(adi = "HamitM.", soyadi = "Mızrak") {
        this.adi = adi;
        this.soyadi = soyadi;
        console.log("constructor method");
        console.log(this);
    }

    message() {
        return `${this.adi} - ${this.soyadi}`;
    }
} //end class

let dataPerson1 = new Person();
console.log(`Merhabalar-1: ${dataPerson1.message()}`);

let dataPerson2 = new Person("Uğurcan", "Demirhan");
console.log(`Merhabalar-2: ${dataPerson2.message()}`);

// extends
class Hamit extends Person {
}

let dataPerson3 = new Hamit("Hamit", "Mızrak");
console.log(`Merhabalar-3: ${dataPerson3.message()}`);

//////////////////////////// 
//Destructing : okunabilirliği ve yazılabilirğini sağlamak
let destructingData = () => {
    let number1 = 20;
    let number2 = 40;
    let number3 = number1 + number2;

    // 1.YOL
    console.log(number3);

    // 2.YOL
    console.log(`${number3}`);

    // 3.YOL
    const [number4, number5] = [30, 40];
    let number6 = number4 + number5;
    console.log(`${number6}`);

    //destructing array
    const [number7, number8, ...restParameter] = [30, 40, 55, 2, 3, 4, 5, 6];
    console.log(restParameter[0]);

    // normal
    const computerArray = ["cpu", "ram", "hdd", "mainBoard"];
    const cpuData = computerArray[0];
    const ramData = computerArray[1];
    const hddData = computerArray[2];
    const mainBoardData = computerArray[3];
    console.log(`${cpuData}`);

      //destructing array
    const [cpuData3, ramData34, ramData3, hddData3, mainBoardData3] = computerArray;
    console.log(`${cpuData3}`);

    //destructing object
    const dataNumber = {
        name: "Hamit",
        surname: "Mızrak",
        job: "Computer Enginer"
    }
    const { name, surname } = dataNumber
    console.log(`${name}`);
}
destructingData()

//////////////////////////////
// for of
let dizi = [1, 2, 3, 4, 5, 6]
for (let data of dizi) {
    console.log(data);
} 