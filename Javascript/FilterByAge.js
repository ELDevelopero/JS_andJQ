function ageFilter(arr) {
    let minimum=Number(arr[0]);
    let name1=(arr[1]);
    let age1=Number(arr[2]);
    let name2=(arr[3]);
    let age2=Number(arr[4]);

    while ((age1<minimum) || (age2<minimum)) //i did not really understand why minimum is needed and what is it doing
    //do something
        {break;}
        
    if  (age1>age2)
        console.log("Name: "+ name1 , ", age: "+age1);    
    else (console.log("Name: "+ name2 , ", age: "+age2))
    
}

 var data=["12", "Gabe", "15", "Mika", "9"]

 ageFilter(data);
