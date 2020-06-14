function VATstuff(arr) {
    
    let num1=Number(arr[0]);
    let num2=Number(arr[1]);
    let num3=Number(arr[2]);
   let sum=(num1+num2+num3);
   let vat=(sum*1.2)-sum;
   let total=sum+vat;
   console.log("Sum: "+ sum );
   console.log("Vat: "+ vat );
   console.log("Total: "+ total);
}

var nums=["1.20","2.60","3.50"]

VATstuff(nums);


