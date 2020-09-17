const academicWork = [new Date(2019, 9, 3), new Date(2020, 11, 4)]
const jetshop = [new Date(2020, 0, 7), "present"]
var cursor = true;
var speed = 500;


function CreateRowNumbers()
{
    let rows = 18
    for(let i = 0; i < rows; i++) {
        let number = document.createElement("li");
        number.id = 'number';
        document.getElementById("list").appendChild(number);
    }
}

function GetWorkDates(dates) {
    if (dates[1] === "present")
    {
        return dates[0].toDateString() + " - " + dates[1];
    }
    return dates[0].toDateString() + " - " + dates[1].toDateString();
}

setInterval(() => {
    if (cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
    } else {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
    }
}, speed);

CreateRowNumbers()

document.getElementById("workDatesAcademicWork").innerHTML = GetWorkDates(academicWork);
document.getElementById("workDatesJetshop").innerHTML = GetWorkDates(jetshop);