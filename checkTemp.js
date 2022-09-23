/*
0-20 on liiga külm
21-40 on paras temperatuur
41-60 on liiga kuum
*/

function checkTemp(temp) {
//temp = prompt("temperatuur on...")
if (temp < 20){
    return -1
    console.log("liiga külm")
}
else if (temp > 40){
    return 1
    console.log("liiga kuum")
}
else{
    return 0
    console.log("paras temperatuur")
}
}
