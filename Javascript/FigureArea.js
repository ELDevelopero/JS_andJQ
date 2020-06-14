function figureArea(arr) {
    let w = Number(arr[0]);
    let h = Number(arr[1]);
    let W = Number(arr[2]);
    let H = Number(arr[3]);
    let area1=(w*h);
    let area2=(W*H);
    let commonArea= Math.min(Number(w), Number(W)) * Math.min(Number(h), Number(H));
    let figureArea = area1 + area2 - commonArea;
    console.log(figureArea);
    
    
}

var data=["2","4","5","3"];
//figureArea(data)


//console.log(data[0], data[1], data[2]);  <---accessing certain position in array


