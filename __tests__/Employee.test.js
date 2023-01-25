const Employee = require('../lib/employee.js')

test('Create employee object', () => {
    const employee = new Employee('John',1, 'JohnDoe@gmail.com');

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
});

test('gets name', () => {
    const employee = new Employee('John', 2, 'JohnDoe@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets ID', () => {
    const employee = new Employee('John', 3, 'JohnDoe@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets email', () => {
    const employee = new Employee('John', 4, 'JohnDoe@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('John', 5, 'JohnDoe@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 