var timeBlocks = [
    document.getElementById("08"),
    document.getElementById("09"),
    document.getElementById("10"),
    document.getElementById("11"),
    document.getElementById("12"),
    document.getElementById("13"),
    document.getElementById("14"),
    document.getElementById("15"),
    document.getElementById("16"),
    document.getElementById("17")
];

var date = moment().format("dddd, MMMM Do")
// console.log(timeBlocks[0].children[0].children[0].textContent);
$("#currentDay").html(date);

function checkTime(){
    now = moment().format("HH")
    for(var i=0; i<timeBlocks.length;i++){
        if(timeBlocks[i].id<now){
            timeBlocks[i].style.backgroundColor="grey";
        }else if(timeBlocks[i].id == now){
            timeBlocks[i].style.backgroundColor="red";
        } else{
            timeBlocks[i].style.backgroundColor="green";
        }
    }
}
checkTime();