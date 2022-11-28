const Employee = require('../lib/Employee'); 

//TEST - Create Employee
test('creates an employee in the roster', () => {
    const employee = new Employee(''); 

    expect(typeof(employee)).toBe('object');
});
