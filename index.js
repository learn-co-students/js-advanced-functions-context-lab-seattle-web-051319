/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



let createEmployeeRecord = employeeData => {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3], 
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployees = employeesData => {
    return employeesData.map(employee => createEmployeeRecord(employee));
}

let createTimeInEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })

    return this
}

let createTimeOutEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })

    return this
}

let hoursWorkedOnDate = function(date) {
    let timeIn = this.timeInEvents.find(e => e.date === date);
    let timeOut = this.timeOutEvents.find(e => e.date === date);
    let hoursWorked = (timeOut.hour - timeIn.hour)/100;
    return hoursWorked;
}

let wagesEarnedOnDate = function(date) {
    return (hoursWorkedOnDate.call(this,date) * this.payPerHour);
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const calculatePayroll = employees => {
    let employeeTotalWages = employees.map(employee => allWagesFor.call(employee));
    let totalPayroll = employeeTotalWages.reduce((acc, curr) => acc + curr, 0);
    return totalPayroll;
}

const createEmployeeRecords = arr => arr.map(employee => createEmployeeRecord(employee));

const findEmployeebyFirstName = (arr, firstName) => arr.find(employee => employee.firstName  === firstName);