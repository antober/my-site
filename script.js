const createRowNumbers = () => {
    let rows = 22;

    for (let i = 0; i < rows; i++) {
        let number = document.createElement("li");
        number.id = 'number';
        document.getElementById("row-numbers").appendChild(number);
    }
}

const getWorkDates = (dates) => {
    if (dates[1] === "present") {
        return dates[0].toDateString() + " - " + dates[1];
    }
    
    return dates[0].toDateString() + " - " + dates[1].toDateString();
}

const makeBlinkingCursor = () => {
    let cursor = true;
    let cursorElement = document.getElementById('cursor');

    setInterval(() => {
        if (cursor) {
            cursorElement.style.opacity = 0;
            cursor = false;
        } else {
            cursorElement.style.opacity = 1;
            cursor = true;
        }
    }, 500);
}

const handleWorkPeriods = () => {
    let academicWork = [new Date(2019, 9, 3), new Date(2020, 11, 4)];
    let jetshop = [new Date(2020, 0, 7), "present"];

    document.getElementById("workDatesAcademicWork").innerText = getWorkDates(academicWork);
    document.getElementById("workDatesJetshop").innerText = getWorkDates(jetshop);  
}

createRowNumbers();
makeBlinkingCursor();
handleWorkPeriods();
