console.log("Start");
let dateSub = document.querySelector(".dateSub");
console.log(dateSub);

let days = new Array("Sun","mon","tues","wed","Thurs","Fri","Sat");
let date1=document.querySelector("#date1");
let date2=document.querySelector("#date2");
let day1 = document.querySelector("#day1");
let starting = false;
day1.addEventListener("input",()=>{
    date1.disabled = false;
    starting = true;
})

dateSub.addEventListener("click",()=>{
    // console.log("dvbeu");
    let d2 = new Date(date2.value).getDay();
    if(starting == false){
        document.querySelector("#dayresult").innerHTML = days[d2]; 
    }else{
        let d1 = new Date(date1.value).getDay();
        let dif = day1.value - d1;
        d2 = (dif+d2+7)%7;
        console.log(dif,d2);
        document.querySelector("#dayresult").innerHTML = days[d2]
    }
       
})

function calculateAngle() {
    const hour = document.getElementById('hourInput').value;
    const minute = document.getElementById('minuteInput').value;

    if (hour >= 1 && hour <= 12 && minute >= 0 && minute <= 59) {
      const minuteAngle = 6 * minute; // 360 degrees divided by 60 minutes
      const hourAngle = 30 * hour + 0.5 * minute; // 360 degrees divided by 12 hours plus adjustment for minutes

      let angle = Math.abs(hourAngle - minuteAngle);
      angle = Math.min(360 - angle, angle); // Choose the smaller angle between the two possibilities

      document.getElementById('angleResult').innerHTML = `Angle between Hour and Minute hands: ${angle} degrees`;
    } else {
      document.getElementById('angleResult').innerHTML = 'Invalid input. Please enter valid hour and minute values.';
    }
}

function calculate() {
    const number = document.getElementById('numberInput').value;
    const power = document.getElementById('powerInput').value;

    const result = Math.pow(parseInt(number), parseInt(power));
    const unitDigit = result % 10;
    const secondPlaceDigit = Math.floor((result / 10) % 10);

    document.getElementById('numResult').innerHTML = `Result: ${result}<br>
                                                    Unit Digit: ${unitDigit}<br>
                                                    2nd Place Digit: ${secondPlaceDigit}`;
  }