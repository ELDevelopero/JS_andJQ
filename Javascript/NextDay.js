


/*var day = new Date('Apr 30, 2020');
console.log(day);

var nextDay = new Date(day);
nextDay.setDate(day.getDate() + 2);
console.log(nextDay);  */



function nextDays(arr) {
    let year=Number(arr[0]);
    let month=Number(arr[1]);
    let day=Number(arr[2]);
    var nextDay = new Date(Number(year),Number(month), Number(day));
    nextDay.setDate(nextDay.getDate() + 2);
    console.log(nextDay); 
}

var data=["2016", "9", "30"];
nextDays(data);