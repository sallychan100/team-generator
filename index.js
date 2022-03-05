const Employee = require('./lib/Employee')

const employee1 = new Employee('Jared', '1', 'jared@fakemail.com')
const employee2 = new Employee('Alec', '2', 'alec@fakemail.com')
console.log(employee1.name)
console.log(employee2.getName())