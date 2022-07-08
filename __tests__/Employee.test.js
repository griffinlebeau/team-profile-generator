const Employee = require('../lib/Employee.js')

test ('creates an employee object', () => {
    const employee = new Employee;

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
});

test("gets an employee's name", () => {
    const employee = new Employee;
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("gets an employee's id number", () => {
    const employee = new Employee;
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("gets employee's email", () => {
    const employee = new Employee;
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("gets employee's role", () => {
    const employee = new Employee;
    expect(employee.getRole()).toEqual(expect(employee.role.toString()));
});