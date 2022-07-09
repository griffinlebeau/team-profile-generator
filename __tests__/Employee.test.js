const Employee = require('../lib/Employee.js')

test ('creates an employee object', () => {
    const employee = new Employee('Dave', '1', '@gmail');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
});

test("gets an employee's name", () => {
    const employee = new Employee('Dave', '1', '@gmail');
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("gets an employee's id number", () => {
    const employee = new Employee('Dave', '1', '@gmail');
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test("gets employee's email", () => {
    const employee = new Employee('Dave', '1', '@gmail');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("gets employee's role", () => {
    const employee = new Employee('Dave', '1', '@gmail');
    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role));
});