//1

const textField1 = "text";
const textField2 = "text2";

if(textField1 !== "" && textField2 !== "") {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}

//2

const num1 = "10";
const num2 = "13";
const sum = num1 + num2;

if (sum > 10) {
    console.log("Сума більше за 10");
} else {
    console.log("Сума менше за 10");
}

//3 

const text = "JavaScript";
if (text.toLowerCase().includes("javascript")){
    console.log("Текст містить JavaScript");
} else {
    console.log("Текст не містить JavaScript");
}

//4

const num3 = 28;
if(num3 > 10 && num3 < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

//5

const userName = "Karl";
const userEmail = "useremail@gmail.com";
const userPassword = "123456789";

if (userName.length >= 3 && userEmail.includes("@") && userEmail.includes(".", userEmail.indexOf("@")) && userPassword.length >= 6){
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}