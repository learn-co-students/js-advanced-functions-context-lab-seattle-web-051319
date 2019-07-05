/* Your Code Here */
function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployees(array) {
  return array.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(string) {
  let newEvent = {
    type: 'TimeIn',
    hour: parseInt(string.slice(-5)),
    date: string.slice(0, -5)
  }
  this.timeInEvents.push(newEvent)
  return this
}

function createTimeOutEvent(string) {
  let newEvent = {
    type: 'TimeOut',
    hour: parseInt(string.slice(-5)),
    date: string.slice(0, -5)
  }
  this.timeOutEvents.push(newEvent)
  return this
}

function hoursWorkedOnDate(date) {
  let clockIn = this.timeInEvents.find(punch => punch.date === date)
  let clockOut = this.timeOutEvents.find(punch => punch.date === date)
  return (clockOut.hour - clockIn.hour)/100
}

function wagesEarnedOnDate(date) {
  return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function createEmployeeRecords(array) {
  return array.map(data => createEmployeeRecord(data))
}

function findEmployeebyFirstName(array, firstName) {
  return array.find(employee => employee.firstName = firstName)
}

function calculatePayroll(array) {
  return array.reduce(function(accumulator, currentValue, currentIndex){
    return accumulator + allWagesFor.call(array[currentIndex])
  }, 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
