if(new Date().getHours()>=0  && new Date().getHours()<12){
    document.getElementById("demo").innerHTML="Good Morning!!! "+" Dear Customer Welcome To 'Online Shopping' Thankyou For Visiting us. Please Place Your Order, Have a Good Day, Keep Smiling Always.";
}
else if(new Date().getHours()>=12 && new Date().getHours()<16){
     document.getElementById("demo").innerHTML="Good Afternoon!!! "+" Dear Customer Welcome To 'Online Shopping' Thankyou For Visiting us. Please Place Your Order, Have a Good Day, Keep Smiling Always.";
}
 else if(new Date().getHours()>=16 && new Date().getHours()<19){
     document.getElementById("demo").innerHTML="Good Evening!!! "+" Dear Customer Welcome To 'Online Shopping' Thankyou For Visiting us. Please Place Your Order, Have a Good Day, Keep Smiling Always.";
}
else{
     document.getElementById("demo").innerHTML="Good Night!!! "+" Dear Customer Sorry...! Orders are Closed Now....!!!";
}






