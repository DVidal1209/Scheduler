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
$("#currentDay").html(date);

function checkTime(){
    now = moment().format("HH")
    for(var i=0; i<timeBlocks.length;i++){
        if(timeBlocks[i].id<now){
            timeBlocks[i].classList.add("past");
        }else if(timeBlocks[i].id == now){
            timeBlocks[i].classList.add("present");
        } else{
            timeBlocks[i].classList.add("future");
        }
    }
}
checkTime();