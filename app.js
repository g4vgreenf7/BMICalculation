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
