const academicWork = [new Date(2019, 9, 3), new Date(2020, 11, 4)]
const jetshop = [new Date(2020, 0, 7), "present"]

function GetWorkDates(dates) {
    if(dates[1] === "present")
    {
        return dates[0].toDateString() + " - " + dates[1];
    }
    return dates[0].toDateString() + " - " + dates[1].toDateString();
}

document.getElementById("workDatesAcademicWork").innerHTML = GetWorkDates(academicWork);
document.getElementById("workDatesJetshop").innerHTML = GetWorkDates(jetshop);