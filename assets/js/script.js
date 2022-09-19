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
var text = [];
var container = $("#schedule"); 

// Code to show the date
var date = moment().format("dddd, MMMM Do")
$("#currentDay").html(date);


// function to color code the scheduler
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

// Save button
container.on("click",".saveBtn" ,function(e){
        e.preventDefault();
        var text = this.parentElement.children[1].value;
        var stored = JSON.parse(localStorage.getItem("text"));
        for (var i=08; i<18; i++){
            if(this.parentElement.id == i)  {
                stored[i-8] = text;
            }
        }
        localStorage.setItem("text", JSON.stringify(stored));
    }
)

// Function to initialize page
function init(){
    if (localStorage.text === null || localStorage.text === undefined){
        for (var i=0; i<timeBlocks.length; i++){
            text[i] = timeBlocks[i].children[1].value;
        }
        localStorage.setItem("text", JSON.stringify(text));
    } else {
        var stored = JSON.parse(localStorage.getItem("text"));
        document.getElementById("08").children[1].value=stored[0];
        document.getElementById("09").children[1].value=stored[1];
        document.getElementById("10").children[1].value=stored[2];
        document.getElementById("11").children[1].value=stored[3];
        document.getElementById("12").children[1].value=stored[4];
        document.getElementById("13").children[1].value=stored[5];
        document.getElementById("14").children[1].value=stored[6];
        document.getElementById("15").children[1].value=stored[7];
        document.getElementById("16").children[1].value=stored[8];
        document.getElementById("17").children[1].value=stored[9];
    }
}

// Function calls
init();
checkTime();