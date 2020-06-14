function getDistance(arr){
let xA=Number(arr[0]);
let yA=Number(arr[1]);
let xB=Number(arr[2]);
let yB=Number(arr[3]);  
	let xDiff=( xA - xB); 
	let yDiff=(yA - yB); 

    let result=Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    console.log(result);
}

var data =["2.34","15.66","-13.55", "-2.9985"]
getDistance(data);