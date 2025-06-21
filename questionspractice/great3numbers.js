const a=10;
const b=20;
const c= 30;
if (a==b && b==c && c==a){
    console.log("Three are equal");
}
else if (a>b && a>c){
    console.log(a, "is greatest");
}
else if (b>c && b>a){
    console.log(b, "is greatest" );

}
else{
    console.log(c, "is greatest");
}