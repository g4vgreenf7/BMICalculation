// console.log("Hello O!")
// console.log("Hello M!")
// console.log("Hello G!")
        
// var name = "NG"
// var Fname = "Nattaphon"
// var Lname = "Gluaythet"
// var age = 28
// var quiz1 = (4+2*2/2*2+4+1-5+19)+91
// console.log(typeof"NG")
// console.log(10*age*30)
// alert("OMG!"+Fname+" "+Lname)
// console.log(name)
// name = "NGNGNGNGNGNG"
// next10year = age + 10
// console.log(name+"!")
// console.log(Fname+" "+Lname)
// console.log(Fname+" "+Lname)
// console.log(next10year+" "+quiz1)
//     {
//             var x = 23
//             let y = 3
//             alert(y)
//     }
//     alert(x)

// let attention = prompt("Attention! Greeting your friends first")
// console.log("Hello! "+attention)
// console.log("type: "+typeof attention)

// let slak = prompt("กรอกเลขล็อตเตอรี่ที่ต้องการซื้อ: ") 
// document.getElementById("win").innerHTML = Math.floor(Math.random() * 1000000)
// document.getElementById("slak").innerHTML = slak //floorเพื่อปัดเศษลง

// console.log(1==1)
// console.log(2!=2)
// console.log("3"===2+1)//===คือเทียบหมดรวมถึง data typeด้วย
// console.log("hello"=="Hello")
// console.log("4"!==4)
// console.log(5<="Dogs")


// let age = prompt("กรุณากรอกอายุของคุณณณณ")
// if(age<=13){
//     alert("อายุขึ้นยังไม่ถึง13ปี")
// }
// else{
//     document.getElementById("contentH").innerHTML = "โอโห เด็กม.3ถ่ายคลิป พ่อของตนเล่นชู้อยู่กับครูประจำชั้น"
//     document.getElementById("content").innerHTML = "<iframe width=\"560\"\"height=\"315\" src=\"https://www.youtube.com/embed/qQ7QZIBHucg?si=H9zPddJ4y_2r0UmF\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>" //ต้องใส่backsladก่อน"ทุกอัน
// }

// let lotto = prompt("กรอกเลขล็อตเตอรี่ที่ต้องการซื้อ: ") 
// let win = Math.floor(Math.random() * 1000000)
// document.getElementById("random").innerHTML = win
// if(lotto==win){
//     document.getElementById("result").innerHTML = "ยินดีด้วย คุณถูกล็อตเตอรี่รางวัลที่ 1 คือ "+win
// }
// else{
//     document.getElementById("result").innerHTML = "เสียใจด้วย คุณไม่ถูกรางวัล "
// }

//=====================================
// let score = prompt("กรอกคะแนนที่คุณได้: ")
// if(score >= 80 && score<=100){
//     document.getElementById("result").innerHTML = "คุณได้เกรด A"
// }
// else if(score >= 70 && score<80){
//     document.getElementById("result").innerHTML = "คุณได้เกรด B"
// }
// else if(score >= 60 && score<70){
//     document.getElementById("result").innerHTML = "คุณได้เกรด C"
// }
// else if(score >= 50 && score<60){
//     document.getElementById("result").innerHTML = "คุณได้เกรด D"
// }
// else{
    
//     document.getElementById("result").innerHTML = "คุณติด F"
// }
    
//=============================

// for(var count=1;count<5;count++){
//     alert("Hello x"+count)
//     alert("Hello World x"+count)
// }
// console.log("Exit")
//=======================

// let qrt = prompt("ใส่จำนวนที่จะสั่งลงไป: ")
// let sum = 0
// for(var count=1;count<=qrt;count++){
//     let price_item = prompt("ราคาสินค้าชิ้นที่ "+count)
//     sum += parseInt(price_item)
//     document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ "+count+": "+price_item+" บาท<br>"
// }
// document.getElementById("result").innerHTML = "ราคารวมของสินค้าทั้งหมดคือ : "+ sum +" บาท"
// //อย่าลืม<br>เคาะบรรทัดใหม่,parseInt()แปลงเป็นตัวเลข
// //===========================

// let round = prompt("คุณต้องการเล่นกี่รอบ : ")
// sum = 0
// for(var i=1;i<=round;i++){
//     var answer = prompt("หัว/ก้อย ทายมาเลย...")
//     random = ""
//     ans = ""
//     if(Math.floor(Math.random() *10) <= 4 ){
//         //หัว
//         random = "หัว"
//     }
//     else{
//         //ก้อย
//         random = "ก้อย"
//     }

//     if(answer == random){
//         alert("ยินดีด้วยคุณทายถูก")
//         ans = "ทายถูก"
//         sum += 1
//         document.getElementById("random-list").innerHTML += "รอบที่ "+i+": คุณ"+ans+"<br>"
//     }
//     else{
//         alert("เสียใจด้วยจ้า ทายผิดเนอะ หุหุ")
//         ans = "ทายผิด"
//         sum -= 1
//         document.getElementById("random-list").innerHTML += "รอบที่ "+i+": คุณ"+ans+"<br>"
//     }
// }
// document.getElementById("result").innerHTML = "จำนวนครั้งที่ทายถูก คือ : "+ sum +" ครั้ง"

// while(prompt("ถ้าจะออกพิมพ์ exit") != "exit"){
//     document.getElementById("result").innerHTML += "ไม่ได้พิมพ์exit"+"<br>"
// }

// function toFahrenheit(){

//     let celsius = prompt("Input Degree Celsius: ")

//     let value = (celsius * 1.80) +32.00 

//     document.getElementById("result").innerHTML = value.toFixed(2) + " Degree Fahrenheit";

// }
// toFahrenheit();


// function toCelsius(fahrenheit){
//     let value = (fahrenheit - 32) * 5 / 9
//     return value.toFixed(2)+" C";
//  }
// function toFahrenheit(celsius){
//     let value = (celsius * 9) / 5 + 32 
//     return value.toFixed(2)+" F";
//  }
//  function display(elementId, value){
//     document.getElementById(elementId).innerHTML = "<b>"+value+"</b>";
//  }

//  alert(toCelsius(150))
//  display("toCelsius", toCelsius(150))
//  alert(toFahrenheit(32))
//  display("toFahrenheit",toFahrenheit(150))

//=========================================
// function Sayhello(){
//     alert("Hello you too!");
// }

//=========================================

// function toCelsius(fahrenheit){
//     let value = (fahrenheit - 32) * 5 / 9
//     return value.toFixed(2)+" C";
//  }
// function toFahrenheit(celsius){
//     let value = (celsius * 9) / 5 + 32 
//     return value.toFixed(2)+" F";
//  }
// function display(elementId, value){
//     document.getElementById(elementId).innerHTML = "<b>"+value+"</b>";
//  }
// function alerttoCelsius(value){
//     alert(toCelsius(value))
// }
// function alerttoFahrenheit(value){
//     alert(toFahrenheit(value))
// }

function calBMI(value1,value2){
    let weight = parseInt(value1)
    let height = parseInt(value2)
    let value = weight/(height^2)
    
        if(value > 30.00){
            return "ค่า BMI ของคุณ คือ "+value+" คุณอยู่ในเกณฑ์ อ้วน";
        }
        else if(value < 30.00 && value >= 24.99){
            return "ค่า BMI ของคุณ คือ "+value+" คุณอยู่ในเกณฑ์ น้ำหนักเกิน";
        }
        else if(value < 24.99 && value >= 18.50){
            return "ค่า BMI ของคุณ คือ "+value+" คุณอยู่ในเกณฑ์ สุขภาพดี/สมส่วน";
        }
        else if(value < 18.50 && value >= 0){
            return "ค่า BMI ของคุณ คือ "+value+" คุณอยู่ในเกณฑ์ ผอมเกินไป";
        }
        else{
            return "ค่า BMI ของคุณ คือ "+value+" เป็นค่าerror กรุณาระบุเป็นหน่วยตามช่องให้ถูกต้อง";
        }
}

function alertcalBMI(value1,value2){
    alert(calBMI(value1,value2));
}
